import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, addCar } from '../store'

const CarForm = () => {
  const dispatch = useDispatch()
  const { name, cost } = useSelector(state => {
    return {
      name: state.formReducer.name,
      cost: state.formReducer.cost
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addCar({name, cost}))

    // dispatch(changeName(''))
    // dispatch(changeCost(0))
  }

  const handleNameChange = e => dispatch(changeName(e.target.value))

  const handleCostChange = e => {
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  }

  return (
    <div className='car-form panel'>
      <h2 className='subtitle is-3'>Add car</h2>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleNameChange} />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              className='input is-expanded'
              type='number'
              value={cost || ''}
              onChange={handleCostChange} />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
