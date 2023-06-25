import { useState } from 'react'
import { GoTriangleDown, GoTriangleLeft } from 'react-icons/go'

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    setExpandedIndex(currentExpandedIndex => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)} className='flex justify-between bg-gray-100 p-3 border-b border-t cursor-pointer items-center text-lg'>
          {item.label}
          <span className='text-2xl'>{isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}</span>
        </div>
        {isExpanded && <p className='bg-gray-50 p-5'>{item.content}</p>}
      </div>
    )
  })

  return <div className=' border-x border-t rounded'>{renderedItems}</div>
}

export default Accordion
