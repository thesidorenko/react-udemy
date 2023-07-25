import { GoTrash } from 'react-icons/go'
import { removeUser } from '../store'
import useThunk from '../hooks/useThunk'
import Button from './Button'

const UsersListItem = ({ user }) => {
  const [isLoading, error, doRemoveUser] = useThunk(removeUser)

  const handleClick = () => {
    doRemoveUser(user)
  }

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
          <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>
          {error && 'error'}
          {user.name}
        </div>
      </div>
    </div>
  )
}

export default UsersListItem
