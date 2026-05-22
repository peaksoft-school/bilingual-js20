import styled from 'styled-components'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <StyledOverlay onClick={onClose}>
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        <StyledCloseIcon onClick={onClose}>&times;</StyledCloseIcon>

        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </StyledOverlay>
  )
}

const StyledOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',
  fontFamily: 'Inter, sans-serif',
})

const StyledModalContainer = styled.div({
  background: 'white',
  width: '637px',
  height: '376px',
  padding: '45px',
  borderRadius: '20px',
  position: 'relative',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
})

const StyledCloseIcon = styled.button({
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'none',
  border: '1px solid #dcdcdc',
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  cursor: 'pointer',
  color: '#999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',

  '.&:hover': {
    background: '#f5f5f5',
  },
})

const StyledModalContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})
