import './styles.css'
import { useDispatch } from 'react-redux'
import { reset } from './store'
import SongPlaylist from './components/SongPlaylist'
import MoviePlaylist from './components/MoviePlaylist'

export default function App() {
  const dispatch = useDispatch()

  const handleResetClick = () => {dispatch(reset())}

  return (
    <div className='container is-fluid'>
      <button onClick={() => handleResetClick()} className='button is-danger'>
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}
