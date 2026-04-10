import { useState } from 'react'
import { Modal } from './components/ui/modal-ui/Modal'

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <h1>Пример использования модалки</h1>

      <button onClick={openModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Открыть модальное окно
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
