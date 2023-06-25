import classNames from 'classnames'
import useNavigation from '../hooks/useNavigation'

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation()

  const classes = classNames(
    className,
    'text-emerald-600',
    currentPath === to && activeClassName
  )

  const handleClick = e => {
    if (e.metaKey ||  e.ctrlKey) {
      return
    }

    e.preventDefault()

    navigate(to)
  }

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link
