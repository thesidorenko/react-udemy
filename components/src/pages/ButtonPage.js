import Button from '../components/Button'
import { RxBell, RxCheck, RxClock, RxCube, RxHeartFilled } from 'react-icons/rx'

function ButtonPage() {
  return (
    <div>
      <Button primary rounded className='mb-3'>
        <RxBell className='mr-1' />
        click
      </Button>
      <Button secondary rounded className='mb-4'>
        <RxCheck className='mr-1' />
        click
      </Button>
      <Button success rounded className='mb-5'>
        <RxClock className='mr-1' />
        click
      </Button>
      <Button warning rounded className='mb-6'>
        <RxCube className='mr-1' />
        click
      </Button>
      <Button danger rounded className='mb-7'>
        <RxHeartFilled className='mr-1' />
        click
      </Button>
    </div>
  )
}

export default ButtonPage
