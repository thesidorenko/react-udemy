import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store'

const CarList = () => {
  const dispatch = useDispatch()
  const { cars, name } = useSelector(({ formReducer, carsReducer: {cars, searchTerm }}) => {
    const filteredCars = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      cars: filteredCars,
      name: formReducer.name
    }
  })

  const handleCarDelete = car => {
    dispatch(removeCar(car.id))
  }

  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  return <div className='car-list'>{renderedCars}</div>
}

export default CarList
