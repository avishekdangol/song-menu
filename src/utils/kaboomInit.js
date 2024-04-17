import { Kaboom } from "@/contexts/KaboomCtx";
import { dialogueData, scaleFactor } from "../constants/constants";
import { setCamScale } from "./utils";
import { setDialogue, store } from "../store";

let player

const init = canvas => {
  const k = Kaboom(canvas)

  // Character
  k.loadSprite('rick', './spritesheet/rick.png', {
    sliceX: 4,
    sliceY: 3,
    anims: {
      'idle-down': 0,
      'walk-down': { from: 0, to: 3, loop: true, speed: 8 },
      'idle-side': 4,
      'walk-side': { from: 4, to: 7, loop: true, speed: 8 },
      'idle-up': 8,
      'walk-up': { from: 8, to: 11, loop: true, speed: 8 },
    },
  })
  
  // Map
  k.loadSprite('map', './spritesheet/new.png')
  
  k.setBackground(k.Color.fromHex('#311047'))

  k.scene('main', async () => {
    const mapData = await (await fetch('./spritesheet/new.json')).json()
    const layers = mapData.layers

    const map = k.add([
      k.sprite('map'),
      k.pos(0),
      k.scale(scaleFactor)
    ])

    player = k.make([
      k.sprite('rick', { anim: 'idle-down' }), // spritesheet with default animation
      k.area({
        shape: new k.Rect(k.vec2(0, 3), 10, 10) // shape of the hitbox for the player
      }),
      k.body(), // makes the player tangible object
      k.anchor('center'), // draw the player from center (default is top-left corner)
      k.pos(),
      k.scale(0.4),
      {
        speed: 100,
        direction: 'down',
        isInDialogue: false,
      },
      'player', // tag
    ])

    for (const layer of layers) {
      if (layer.name === 'boundaries') {
        for (const boundary of layer.objects) {
          map.add([
            k.area({
              shape: new k.Rect(k.vec2(0), boundary.width, boundary.height), // hitbox
            }),
            k.body({ isStatic: true }), // player won't be able to overlap
            k.pos(boundary.x, boundary.y), 
            boundary.name, // tag
          ])

          player.onCollide(boundary.name, () => {
            if (boundary.type === 'has-dialogue') {
                player.isInDialogue = true
                const { text, choices, choiceType = null, close = null } = dialogueData[boundary.name]
                const payload = {
                  text,
                  choices,
                  choiceType,
                  showDialogue: true,
                  boundary: boundary.name,
                  close,
                }
                store.dispatch(setDialogue(payload))
            }
          })
        }
        continue
      }

      if (layer.name === 'spawnpoints') {
        for (const entity of layer.objects) {
          if (entity.name === 'player') {
            player.pos = k.vec2(
              (map.pos.x + entity.x) * scaleFactor,
              (map.pos.y + entity.y) * scaleFactor
            )
            k.add(player)
            continue
          }
        }
      }
    }

    setCamScale(k)

    k.onResize(() => {
      setCamScale(k)
    })

    k.onUpdate(() => {
      k.camPos(player.pos.x, player.pos.y + 100)
    })

    const walkSpeed = 2
    let pressedKey = ''

    k.onKeyPress(key => (pressedKey = key))
    k.onKeyDown(key => {
      if (player.isInDialogue) return
      switch (key) {
        case 'up':
          if (pressedKey === 'up') {
            player.pos.y -= walkSpeed
            if (player.curAnim() !== 'walk-up') {
              player.play('walk-up')
              player.direction = 'up'
            }
          }
          break
        case 'down':
          if (pressedKey === 'down') {
            player.pos.y += walkSpeed
            if (player.curAnim() !== 'walk-down') {
              player.play('walk-down')
              player.direction = 'down'
            }
          }
          break
        case 'left':
          if (pressedKey === 'left') {
            player.pos.x -= walkSpeed
            player.flipX = false
            if (player.curAnim() !== 'walk-side') {
              player.play('walk-side')
              player.direction = 'left'
            }
          }
          break
        case 'right':
          if (pressedKey === 'right') {
            player.pos.x += walkSpeed
            player.flipX = true
            if (player.curAnim() !== 'walk-side') {
              player.play('walk-side')
              player.direction = 'right'
            }
          }
          break
      }
    })

    k.onKeyRelease(key => {
      if (key === 'up') player.play('idle-up')
      else if (key === 'down') player.play('idle-down')
      else player.play('idle-side')
    })

    k.onMouseDown(mouseBtn => {
      if (mouseBtn !== 'left' || player.isInDialogue) return

      const worldMousePos = k.toWorld(k.mousePos())
      player.moveTo(worldMousePos, player.speed)

      const mouseAngle = player.pos.angle(worldMousePos)

      const lowerBound = 50
      const upperBound = 125

      if (mouseAngle > lowerBound && mouseAngle < upperBound && player.curAnim() !== 'walk-up') {
        player.play('walk-up')
        player.direction = 'up'
        return
      }

      if (mouseAngle < -lowerBound && mouseAngle > -upperBound && player.curAnim() !== 'walk-down') {
        player.play('walk-down')
        player.direction = 'down'
        return
      }

      if (Math.abs(mouseAngle) > upperBound) {
        player.flipX = true
        if (player.curAnim() !== 'walk-side') player.play('walk-side')
        player.direction = 'right'
        return
      }

      if (Math.abs(mouseAngle) < lowerBound) {
        player.flipX = false
        if (player.curAnim() !== 'walk-side') player.play('walk-side')
        player.direction = 'left'
        return
      }
    })

    k.onMouseRelease(() => {
      if (player.direction === 'up') player.play('idle-up')
      else if (player.direction === 'down') player.play('idle-down')
      else player.play('idle-side')
    })
  })
  k.go('main')

  const handleStoreChange = () => {
    const state = store.getState()
    if (!state.showDialogue) {
      player.isInDialogue = false
      setTimeout(() => {
        document.getElementById('kanvas').focus()
      }, 10)
    } else player.isInDialogue = true
  }

  store.subscribe(handleStoreChange)
}

export default init