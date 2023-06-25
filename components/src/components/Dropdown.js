import { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = event => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, [])

  const handleOptionClick = option => {
    setIsOpen(false)

    onChange(option)
  }

  const renderedOptions = options.map(option => {
    return (
      <div
        className='p-2 hover:bg-sky-100 rounded cursor-pointer text-center'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className='w-48 relative mx-auto'>
      <Panel onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center cursor-pointer'>
        {value?.label || 'Select...'}
        <FaAngleDown />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
