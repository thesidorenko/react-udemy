import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    searchTerm: ''
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      })
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload)
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

export const carsReducer = carsSlice.reducer
export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions