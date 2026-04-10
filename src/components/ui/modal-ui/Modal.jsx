import styled from 'styled-components'

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose}>&times;</CloseIcon>

        <ModalContent>
          <FormGroup>
            <label>Title</label>
            <Input type="text" placeholder="Select the main idea" />
          </FormGroup>

          <CheckboxContainer>
            <span>Is true option?</span>
            <StyledCheckbox type="checkbox" defaultChecked />
          </CheckboxContainer>

          <ButtonGroup>
            <Button className="secondary" onClick={onClose}>
              GO BACK
            </Button>
            <Button className="primary">SAVE</Button>
          </ButtonGroup>
        </ModalContent>
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
  font-family: 'Inter', sans-serif;
`

const ModalContainer = styled.div`
  background: white;
  width: 637px;
  height: 376px;
  padding: 45px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

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
  display: flex;
  flex-direction: column;
  height: 100%;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  label {
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }
`

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #333;
`

const StyledCheckbox = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:checked {
    background: #2ecc71;
    border-color: #2ecc71;
  }
  &:checked::after {
    content: '✔';
    color: white;
    font-size: 14px;
  }
`

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  border: none;

  &.primary {
    background: #2ecc71;
    color: white;
  }

  &.secondary {
    background: transparent;
    color: #6c5ce7;
    border: 2px solid #6c5ce7;
  }

  &:hover {
    opacity: 0.8;
  }
`
