import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import bird from './svg/bird.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'

function AnimalsShow({type}) {
  const [clicks, setClicks] = useState(0)

  const svgMap = {
    cat,
    cow,
    dog,
    bird,
    gator,
    horse
  }

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div onClick={handleClick} className='animal-show'>
      <img
        alt='animal'
        src={svgMap[type]}
        className='animal'
      />
      <img
        alt='heart'
        src={heart}
        className='heart'
        style={{width: 10 + 10 * clicks + 'px'}}
      />
    </div>
  )
}

export default AnimalsShow