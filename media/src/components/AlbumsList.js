import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store"
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from "./Skeleton"

const AlbumsList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user)
  const [ addAlbum, result ] = useAddAlbumMutation()

  const handleAddAlbum = () => {
    addAlbum(user)
  }

  let content
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading albums...</div>
  } else {
    content = data.map(album => {
      const header = <h3>{album.title}</h3>

      return <ExpandablePanel key={album.id} header={header}>
        List of photos in the album
      </ExpandablePanel>
    })
  }

  return (
    <div>
      <div>
        <h3>Albums by {user.name}</h3>
        <Button onClick={handleAddAlbum} rounded primary>
          + Add album
        </Button>

      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList