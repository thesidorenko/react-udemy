import classNames from "classnames"

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {

  const classes = classNames(rest.className, 'flex items-center px-4 py-1.5 border-2 mr-3', {
    'border-cyan-500 text-cyan-500': primary,
    'border-gray-500 border-gray-500 text-gray-600': secondary,
    'border-lime-500 bg-lime-500': success,
    'border-yellow-500 text-yellow-500': warning,
    'border-red-500 bg-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-cyan-500': primary && outline,
    'text-gray-500': outline && secondary,
    'text-lime-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  })

  return (
    <button className={classes} {...rest}>{children}</button>
  )
}

export default Button