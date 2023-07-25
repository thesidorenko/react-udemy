import axios from 'axios'
import { faker } from '@faker-js/faker'
import { createAsyncThunk } from '@reduxjs/toolkit'

const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users', {
    name: faker.person.fullName()
  })

  return response.data
})

export { addUser }
