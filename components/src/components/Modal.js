import ReactDOM from 'react-dom'
import { useEffect } from 'react'

function Modal({ onClose, actionBar, children }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='inset-0 fixed bg-gray-300 opacity-80'></div>
      <div className='fixed inset-x-96 inset-y-60 p-10 text-gray-700 bg-white border border-gray-300 rounded shadow'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal')
  )
}

export default Modal
