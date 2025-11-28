import React, { useReducer } from 'react'
import { data } from '../../../data'
import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM} from './action'
import reducer from './reducer'

const ReducerBasics = () => {
  const defaultPeople = {
    people: data,
    isLoading: false,
  }

  const [state, dispatch] = useReducer(reducer, defaultPeople)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearItem = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetItem = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetItem}
        >
          reset items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearItem}
        >
          clear items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
