// reducer.js

import { songs } from "../constants/constants"

const reducers = {
  setDialogue: (state, { payload }) => {
    const { text, choices, showDialogue, boundary, close } = payload
    state.dialogueText = text
    state.choices = choices ?? []
    state.showDialogue = showDialogue
    state.boundary = boundary ?? ''
    state.closeText = close
  },
  setPlayingSong: (state, { payload }) => {
    state.playingSong = songs[payload]
  }
}

export default reducers;
