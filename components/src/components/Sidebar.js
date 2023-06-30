import Link from "./Link"

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/'},
    { label: 'Accordion', path: '/accordion'},
    { label: 'Modal', path: '/modal'},
    { label: 'Table', path: '/table'},
    { label: 'Counter', path: '/counter'},
    { label: 'Buttons', path: '/buttons'},
  ]

  const renderedLinks = links.map(link => {
    return <Link
      key={link.label}
      to={link.path}
      className='mb-5'
      activeClassName='border-l-4 font-bold border-emerald-600 pl-3'
    >{link.label}</Link>
  })

  return (
    <div className="sticky top-0 border flex flex-col p-3 items-start">{renderedLinks}</div>
  )
}

export default Sidebar