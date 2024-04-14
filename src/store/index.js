import { createSlice, configureStore } from "@reduxjs/toolkit"
import reducers from "./reducers"

const dialogueSlice = createSlice({
  name: 'dialogue',
  initialState: {
    dialogueText: '',
    choices: [],
    showDialogue: false,
    playingSong: null,
    boundary: '',
    closeText: 'Close',
  },
  reducers,
})

export const { setDialogue, setPlayingSong } = dialogueSlice.actions

export const store = configureStore({
  reducer: dialogueSlice.reducer
})
