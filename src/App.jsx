import { useEffect, useState } from 'react'
import './App.css'
import { store } from './store'
import Typewriter from 'typewriter-effect'
import Player from './components/AudioPlayer'
import { closeDialogue, initialiseKaboom, onChoiceSelected, stopPlaying, toggleSpline } from './useApp'
import PhotoViewer from './components/PhotoViewer'
import Spline from './components/Spline'
import Loader from './components/Loader'

function App() {
  const [state, setState] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [loadingPreloader, setLoadingpreloader] = useState(true)

  setTimeout(() => {
    setLoadingpreloader(false)
  }, 5000)

  const closeSpline = () => {
    toggleSpline(false)
  }

  const handleLoading = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    initialiseKaboom()
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()

      setState(state)
    })

    window.addEventListener('load', handleLoading)

    return () => {
      window.removeEventListener('load', handleLoading)
      unsubscribe()
    }
  }, [])

  return (
    <div className='w-screen h-screen overflow-hidden relative'>
      {/* Loader */}
      { (isLoading || loadingPreloader) && <Loader /> }
      {/* Spline Room */}
      {
        state.goSpline 
        && <Spline close={closeSpline} />
      }

      {/* Photo Viewer */}
      {
        state.currentVisual
        &&
        <div className='absolute left-0 right-0 w-screen h-screen bg-white z-10'>
          <PhotoViewer />
        </div>
      }

      {/* UI */}
      <div id="ui">
        <p className="ui-text note absolute left-[5%] top-[1vh] flex flex-col text-gray-200">
          Tap/Click around or use keyboard arrows to move
        </p>
        {/* Dialogue Box */}
        {
          state.showDialogue
          &&
          <div id="textbox-container" className='absolute left-[10%] right-[10%] bottom-[2vh]'>
            <div id="textbox" className='min-h-[10vh] bg-white text-black text-left flex flex-col flex-wrap'>
              {
                // Song
                state.playingSong
                  ? (
                    <div className='relative'>
                      {/* Close Button */}
                      <div
                        className="bg-red-500 text-white cursor-pointer w-[40px] h-[40px] rounded-full text-center text-[28px] absolute right-0 top-[-29px] hover:shadow-lg hover:shadow-red-500/50"
                        onClick={stopPlaying}
                      >
                        X
                      </div>

                      {/* Title */}
                      <h4 className='font-bold text-gray-500 absolute top-[32px] left-[48px] max-w-[480px] leading-7'>{state.playingSong.title}</h4>

                      {/* Player */}
                      <Player source={state.playingSong.song} />
                    </div>
                  )
                  : (
                    // Dialogue
                    <>
                      <div id="content">
                        {
                          state.dialogueText
                          ? (<div id="dialogue" className='ui-text m-0'>
                              <Typewriter
                                options={{
                                  strings: state.dialogueText,
                                  autoStart: true,
                                  delay: 1,
                                  cursor: '',
                                }}
                              />
                            </div>)
                          : ('') 
                        }
                      </div>
                      {/* Footer - Buttons */}
                      <div className='btn-container flex justify-between mt-1'>
                        <div>
                          {
                            state.choices.map(choice => (
                              <button
                                key={choice.label}
                                className='ui-btn bg-sky-500 hover:shadow-lg hover:shadow-sky-500/50 text-white me-3 py-1 px-2'
                                onClick={() => { onChoiceSelected(choice.choice ?? state.boundary) }}
                              >
                                {choice.label}
                              </button>
                            ))
                          }
                        </div>
                        <button
                          id="close"
                          className='ui-btn text-white hover:shadow-lg hover:shadow-gray-500/50 py-1 px-2'
                          onClick={() => { closeDialogue(state.boundary) }}
                        >
                          { state.closeText ?? 'Close' }
                        </button>
                      </div>
                    </>
                  )}
            </div>
          </div>
        }
      </div>
      <canvas id="kanvas" />
    </div>
  )
}

export default App
