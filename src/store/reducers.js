// reducer.js

import { songs } from "@/constants/constants"

const reducers = {
  setDialogue: (state, { payload }) => {
    const { text, choices, showDialogue, boundary, close, choiceType } = payload
    state.dialogueText = text
    state.choices = choices ?? []
    state.showDialogue = showDialogue
    state.boundary = boundary ?? ''
    state.closeText = close
    state.choiceType = choiceType ?? null
  },
  setPlayingSong: (state, { payload }) => {
    state.playingSong = songs[payload]
  },
  setCurrentVisual: (state, { payload }) => {
    state.currentVisual = payload
  },
  setGoSpline: (state, { payload }) => {
    state.goSpline = payload
  },
}

export default reducers;
