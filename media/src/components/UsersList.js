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
    <div className='w-4/5 mx-auto'>
      <div className='flex flex-row justify-between m-5 items-center '>
        <h1 className='text-2xl'>Users</h1>
        {creatingUserError && 'error'}
        <Button loading={isCreatingUser} onClick={handleUserAdd} primary rounded>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  )
}

export default UsersList
