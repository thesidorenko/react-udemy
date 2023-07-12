import { configureStore } from '@reduxjs/toolkit'
import { reset } from './actions'
import { songReducer, addSong, removeSong } from './slices/songSlice'
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice'


const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  }
})

export { store, reset, addSong, removeSong, addMovie, removeMovie }
