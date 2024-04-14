import React, { createContext, useContext, useReducer } from 'react'

const StateContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-choices':
      break
    default:
  }
}

const stateProvider = ({ children }) => {
  const initialState = {
    choices: null,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      { children }
    </StateContext.Provider>
  )
}

const useStateContext = () => useContext(StateContext)
