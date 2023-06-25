import Table from '../components/Table'

function TablePage() {
  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 7},
    {name: 'Lime', color: 'bg-green-500', score: 1},
    {name: 'Apple', color: 'bg-red-500', score: 3},
    {name: 'Banana', color: 'bg-yellow-500', score: 4}
  ]

  const config = [
    {
      label: 'Fruit',
      render: fruit => fruit.name
    },
    {
      label: 'Color',
      render: fruit => <div className={`p-3 m-2 opacity-70 border border-current ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: fruit => fruit.score,
      header: () =><th className='bg-green-400'>Score</th>
    }
  ]

  const keyFn = (fruit) => fruit.name

  return (
    <div><Table data={data} config={config} keyFn={keyFn} /></div>
  )
}

export default TablePage