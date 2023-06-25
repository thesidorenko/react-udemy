import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Button warning onClick={handleClick}>
        Open modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={<div><Button success rounded outline onClick={handleClose}>I accept</Button></div>}>
            <p>Here is an important information for you to accept.</p>
        </Modal>
      )}
    </div>
  )
}

export default ModalPage
