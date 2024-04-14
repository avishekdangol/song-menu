import { dialogueData, sounds } from "./constants/constants"
import { setDialogue, setPlayingSong, store } from "./store"
import kaboomInit from '@/utils/kaboomInit'

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

export const closeDialogue = (boundary) => {
  if (boundary === 'water-table') {
    setTimeout(() => poppadomOrBread(), 2000)
  } else if (boundary === 'exit') {
    const audio = new Audio(sounds['Yeah'])
    audio.play()
  } else if (boundary === 'bookshelves') {
    const audio = new Audio(sounds['Fine'])
    audio.play()
  }
  const payload = {
    text: '',
    choices: [],
    showDialogue: false,
  }
  store.dispatch(setDialogue(payload))
}

export const onChoiceSelected = choice => {
  store.dispatch(setPlayingSong(choice))
}

export const stopPlaying = () => {
  store.dispatch(setPlayingSong(null))
}