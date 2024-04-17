import { sounds } from "@/constants/medias"

const playSound = boundaryName => {
  if (boundaryName) {
    const audio = new Audio(sounds[boundaryName])
    audio.play()
  }
}

export default playSound