import Table from './Table'
import useSort from '../hooks/useSort'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'

function SortableTable(props) {
  const { config, data } = props
  const { sortBy, sortOrder, sortedData, handleClick } = useSort(config, data)

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)} className='cursor-pointer hover:bg-slate-100'>
          <div className='flex items-center'>
           <div className='mr-2'>{getIcons(column.label, sortBy, sortOrder)}</div>
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    )
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoTriangleUp />
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoTriangleDown />
      </div>
    )
  }
}

export default SortableTable
