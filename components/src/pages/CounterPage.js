import { useReducer } from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const SET_VALUE_TO_ADD = 'value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }

    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }

    default:
      return state
  }
}

function CounterPage({ initialState }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialState,
    valueToAdd: 0
  })

  const increment = () => dispatch({ type: INCREMENT_COUNT })
  const decrement = () => dispatch({ type: DECREMENT_COUNT })

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0

    dispatch({ type: SET_VALUE_TO_ADD, payload: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: ADD_VALUE_TO_COUNT })
  }

  return (
    <Panel className='p-5'>
      <p className='text-lg mb-4'>Current count: {state.count}</p>
      <div className='flex flex-row mb-5'>
        <Button onClick={increment} primary>Increment</Button>
        <Button onClick={decrement} secondary>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <p><label>Add a lot!</label></p>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-2 border bg-gray-50 border-gray-500 my-2'
        />
        <Button success outline>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage