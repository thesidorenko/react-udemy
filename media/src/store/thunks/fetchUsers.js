import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk('users/fetch',
  async () => {
    const response = await axios.get('http://localhost:3005/users')

    // dev only!!!
    await pause(1000)

    return response.data
  }
)

// dev only!!!
const pause = duration => new Promise((resolve) => {
  setTimeout(resolve, duration)
})

export { fetchUsers }