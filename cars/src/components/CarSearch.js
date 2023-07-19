import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

const CarSearch = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(state => state.carsReducer.searchTerm)

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch