import classNames from "classnames"

function Panel({ children, className, ...rest }) {
  const classes = classNames('border p-3 bg-white w-full shadow rounded', className)

  return (
    <div {...rest} className={classes}>{children}</div>
  )
}

export default Panel