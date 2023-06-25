import { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    {label: 'Green', value: 'green'},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Blue', value: 'blue'},
    {label: 'Red', value: 'red'},
  ]

  return (
    <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default DropdownPage