import { dialogueData } from "./constants/constants"
import { setDialogue, setPlayingSong, setCurrentVisual, store, setGoSpline } from "./store"
import kaboomInit from '@/utils/kaboomInit'
import playSound from "./utils/playSounds"
import { exitRoom } from "./utils/kaboomInit"

const poppadomOrBread = () => {
  const { text, choices, choiceType } = dialogueData['poppadomOrBread']
  const payload = {
    text,
    choices,
    showDialogue: true,
    boundary: 'pob',
    choiceType,
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
  if (boundary === 'waterTable') {
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
    case 'spline':
      store.dispatch(setGoSpline(true))
      break;
    default:
      store.dispatch(setCurrentVisual(''))
  }
}

export const stopPlaying = () => {
  store.dispatch(setPlayingSong(null))
}

export const toggleSpline = show => {
  store.dispatch(setGoSpline(show))
  closeDialogue()
  exitRoom()
}