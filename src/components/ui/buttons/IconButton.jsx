import { Button, styled } from '@mui/material'
import { forwardRef } from 'react'

export const IconButton = forwardRef(({ icon, children, ...props }) => (
  <StyledButton {...props}>
    {icon && <Icon src={icon} alt="icon" />}

    {children}
  </StyledButton>
))

const StyledButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '50px',
  padding: '0 20px',
  borderRadius: '8px',
  border: '1px solid #d3d3d3',
  backgroundColor: '#fff',
  color: '#757575',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#f5f5f5',
    borderColor: '#d3d3d3',
  },
})

const Icon = styled('img')({
  width: '20px',
  height: '20px',
  marginRight: '10px',
  display: 'block',
})
