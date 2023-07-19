import { useSelector } from 'react-redux'

const CarValue = () => {
  const totalCost = useSelector(({ carsReducer: { cars, searchTerm } }) =>
      cars
        .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, car) => acc + car.cost, 0)
  )

  return <div className='car-calue'>Total cost: ${totalCost}</div>
}

export default CarValue
