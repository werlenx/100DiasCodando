import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)



  return (
    <div className='App'>
      Front Beginers
      <div>
        <button onClick={() => setOpenModal(true)}>
          Abrir Modal
        </button>
      </div>
      <Modal isOpen={openModal} setModalOpen = {() => setOpenModal(!openModal)}>
        conteudo do modal
      </Modal>
    </div>
  )
}

export default App
