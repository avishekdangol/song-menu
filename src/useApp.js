import { dialogueData } from "./constants/constants"
import { setDialogue, setPlayingSong, setCurrentVisual, store } from "./store"
import kaboomInit from '@/utils/kaboomInit'
import playSound from "./utils/playSounds"

const poppadomOrBread = () => {
  const { text, choices } = dialogueData['poppadomOrBread']
  const payload = {
    text,
    choices,
    showDialogue: true,
    boundary: 'pob'
  }
  store.dispatch(setDialogue(payload))
}

export const initialiseKaboom = () => {
  const canvas = document.getElementById('kanvas');
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }
    kaboomInit(canvas)
}

export const closeDialogue = boundary => {
  if (boundary === 'water-table') {
    setTimeout(() => poppadomOrBread(), 2000)
  }
  playSound(boundary)

  const payload = {
    text: '',
    choices: [],
    showDialogue: false,
  }
  store.dispatch(setDialogue(payload))
}

export const onChoiceSelected = choice => {
  const state = store.getState()

  switch (state.choiceType) {
    case 'song':
      store.dispatch(setPlayingSong(choice))
      break
    case 'visual':
      store.dispatch(setCurrentVisual(state.boundary))
      break
    default:
      store.dispatch(setCurrentVisual(''))
  }
}

export const stopPlaying = () => {
  store.dispatch(setPlayingSong(null))
}