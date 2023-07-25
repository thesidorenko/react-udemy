import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers, addUser } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'
import useThunk from '../hooks/useThunk'
import UsersListItem from './UsersListItem'

const UsersList = () => {
  const [isLoadingUsers, loadingUsersError, doFetchUsers] = useThunk(fetchUsers)
  const [isCreatingUser, creatingUserError, doCreateUser] = useThunk(addUser)
  const { data } = useSelector(state => state.users)

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  const handleUserAdd = () => {
    doCreateUser()
  }

  let content
  if (isLoadingUsers) {
    content = <Skeleton times={5} className='h-10 w-full' />
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>
  } else {
    content = data.map(user => {
      return <UsersListItem key={user.id} user={user} />
    })
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3 items-center '>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd} primary rounded>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  )
}

export default UsersList
