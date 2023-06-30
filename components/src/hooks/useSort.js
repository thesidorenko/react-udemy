import { useState } from 'react'

function useSort(config, data) {
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  const handleClick = label => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    if (sortOrder === null) {
      setSortBy(label)
      setSortOrder('asc')
    } else if (sortOrder === 'asc') {
      setSortBy(label)
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortBy(null)
      setSortOrder(null)
    }
  }

  let sortedData = data

  // sort data if sortOrder and sortBy are not null
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy)

    sortedData = [
      ...data.sort((a, b) => {
        // a, b are objects
        const valueA = sortValue(a)
        const valueB = sortValue(b)

        const reverseOrder = sortOrder === 'asc' ? 1 : -1

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder
        } else {
          return (valueA - valueB) * reverseOrder
        }
      }),
    ]
  }

  return { sortBy, sortOrder, sortedData, handleClick }
}

export default useSort
