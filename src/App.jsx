import { useEffect, useState } from 'react'
import './App.css'
import kaboomInit from '@/utils/kaboomInit'
import { setDialogue, setPlayingSong, store } from './store'
import Typewriter from 'typewriter-effect'
import Player from './components/AudioPlayer'
import { dialogueData, sounds } from './constants/constants'

function App() {
  const [dialogueText, setDialogueText] = useState('')
  const [showDialogue, setShowDialogue] = useState(false)
  const [choices, setChoices] = useState([])
  const [playingSong, setSong] = useState(null)
  const [boundary, setBoundary] = useState('')
  const [closeText, setCloseText] = useState(false)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      setDialogueText(state.dialogueText)
      setShowDialogue(state.showDialogue)
      setTimeout(() => {
        if (choices !== state.choices) setChoices(state.choices)
      }, 500)
      if (playingSong !== state.playingSong) setSong(state.playingSong)
      if (boundary !== state.boundary) setBoundary(state.boundary)
      setCloseText(state.closeText)
    })

    return () => {
      unsubscribe()
    }
  }, [])

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

  const closeDialogue = () => {
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

  const onChoiceSelected = choice => {
    store.dispatch(setPlayingSong(choice))
  }

  const stopPlaying = () => {
    store.dispatch(setPlayingSong(null))
  }
  
  useEffect(() => {
    const canvas = document.getElementById('kanvas');
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }
    kaboomInit(canvas)
  }, []);

  return (
    <div className='w-screen h-screen overflow-hidden relative'>
      <div id="ui">
        <p className="ui-text note absolute left-[5%] top-[1vh] flex flex-col text-gray">
          Tap/Click around or use keyboard arrows to move
        </p>
        {
          showDialogue
          ? (
              <div id="textbox-container" className='absolute left-[10%] right-[10%] bottom-[2vh]'>
                <div id="textbox" className='min-h-[10vh] bg-white text-black text-left flex flex-col flex-wrap'>
                  {
                    playingSong
                      ? (
                        <div className='relative'>
                          <div
                            className="bg-red-500 text-white cursor-pointer w-[40px] h-[40px] rounded-full text-center text-[28px] absolute right-0 top-[-29px] hover:shadow-lg hover:shadow-red-500/50"
                            onClick={stopPlaying}
                          >
                            X
                          </div>
                          <Player source={playingSong} />
                        </div>
                      )
                      : (
                        <>
                          <div id="content">
                            {
                              dialogueText
                              ? (<div id="dialogue" className='ui-text m-0'>
                                  <Typewriter
                                    options={{
                                      strings: dialogueText,
                                      autoStart: true,
                                      delay: 1,
                                      cursor: '',
                                    }}
                                  />
                                </div>)
                              : ('') 
                            }
                          </div>
                          <div className='btn-container flex justify-between mt-1'>
                            <div>
                              {
                                choices.map(choice => (
                                  <button
                                    key={choice}
                                    className='ui-btn bg-sky-500 hover:shadow-lg hover:shadow-sky-500/50 text-white me-3 py-1 px-2'
                                    onClick={() => { onChoiceSelected(choice) }}
                                  >
                                    {choice}
                                  </button>
                                ))
                              }
                            </div>
                            <button
                              id="close"
                              className='ui-btn text-white hover:shadow-lg hover:shadow-gray-500/50 py-1 px-2'
                              onClick={closeDialogue}
                            >
                              { closeText ?? 'Close' }
                            </button>
                          </div>
                        </>
                      )}
                </div>
              </div>
          ) : ('')
        }
      </div>
      <canvas id="kanvas" />
    </div>
  )
}

export default App
