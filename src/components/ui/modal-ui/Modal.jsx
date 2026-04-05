import styled from 'styled-components'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose}>&times;</CloseIcon>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  // main modal
  background: white;
  width: 637px;
  height: 376px;
  padding: 45px;

  border-radius: 20px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`
// x close
const CloseIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:hover {
    background: #f5f5f5;
  }
`

const ModalContent = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0px;
`
