import { GoTrash } from 'react-icons/go'
import { removeUser } from '../store'
import useThunk from '../hooks/useThunk'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './AlbumsList'

const UsersListItem = ({ user }) => {
  const [isLoading, error, doRemoveUser] = useThunk(removeUser)

  const handleClick = () => {
    doRemoveUser(user)
  }

  const header = (
    <>
      <Button className='mr-3' loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && 'error'}
      {user.name}
    </>
  )
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UsersListItem
