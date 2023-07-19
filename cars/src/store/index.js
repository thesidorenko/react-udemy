import { configureStore } from '@reduxjs/toolkit'
import { formReducer, changeName, changeCost } from './slices/formSlice'
import { carsReducer, addCar, removeCar, changeSearchTerm } from './slices/carsSlice'

const store = configureStore({
  reducer: {
    carsReducer,
    formReducer,
  },
})

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm }
