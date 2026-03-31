import { ModalApp } from './components/ui/modal-ui/ModalApp'

export const App = () => {
  return (
    <>
      <div>
        <h1>App</h1>

        <ModalApp />
      </div>
      <div>{/* <Modal isOpen={isOpen} onClose={onclose} /> */}</div>
    </>
  )
}
