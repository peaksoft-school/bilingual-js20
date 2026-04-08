import { useState } from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'

export const ModalApp = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  return (
    <StyledBox>
      <OpenButton onClick={handleOpen}>Open Modal</OpenButton>

      <Modal isOpen={modalOpen} onClose={handleClose}>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" placeholder="Select the main idea" />
        </FormGroup>

        <CheckboxContainer>
          <span>Is true option?</span>
          <Checkbox type="checkbox" defaultChecked />
        </CheckboxContainer>

        <ButtonGroup>
          <GoBackButton onClick={handleClose}>GO BACK</GoBackButton>
          <SaveButton onClick={handleClose}>SAVE</SaveButton>
        </ButtonGroup>
      </Modal>
    </StyledBox>
  )
}

// --- Styled Components (көп өзгөргөн жок) ---
const StyledBox = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`

const OpenButton = styled.button`
  padding: 10px 20px;
  background-color: #3a10e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 14px;
  color: #555;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1.5px solid #dcdcdc;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #3a10e5;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #555;
  margin-bottom: 35px;
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #2ecc71;
  cursor: pointer;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`

const BaseButton = styled.button`
  padding: 10px 35px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
`

const GoBackButton = styled(BaseButton)`
  background: transparent;
  border: 2px solid #3a10e5;
  width: 150px;
  color: #3a10e5;
  &:hover {
    background-color: #f0edff;
  }
`

const SaveButton = styled(BaseButton)`
  background: #2ecc71;
  width: 190px;
  border: none;
  color: white;
  &:hover {
    background-color: #27ae60;
  }
`
