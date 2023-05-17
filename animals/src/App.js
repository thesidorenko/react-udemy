import './App.css'
import { useState } from "react"
import AnimalsShow from "./AnimalsShow"

function App() {
  const [animals, setAnimals] = useState([])

  const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'horse', 'gator', 'dog', 'cow']

    return animals[Math.floor(Math.random() * animals.length)]
  }

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  return (
    <div className='app'>
     <button onClick={handleClick}>Add Animal </button>
      <div className='animal-list'>
        {animals.map((animal, index) => {
          return <AnimalsShow type={animal} key={index} />
        })}
      </div>
    </div>
  )
}

export default App