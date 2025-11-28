import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { useEffect, useRef } from 'react'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  const modalRef = useRef(null)

  useEffect(() => {
      modalRef.current.classList.toggle('show-modal')
  },[isModalOpen])


  return (
    <section id="modal" className='modal-container' ref={modalRef}>
      <div className="modal">
        <h3>modal content</h3>
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  )
}
export default Modal
