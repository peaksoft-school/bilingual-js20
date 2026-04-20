import { forwardRef } from 'react'
import { Button as ButtonMUI, styled } from '@mui/material'

export const Button = forwardRef(
  ({ children, variant = 'primary', large, disabled, onClick, ...props }, ref) => (
    <StyledButton
      ref={ref}
      variantType={variant}
      large={large}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
)
const StyledButton = styled(ButtonMUI, {
  shouldForwardProp: (prop) => prop !== 'variantType' && prop !== 'large',
})(({ disabled, variantType, large }) => ({
  borderRadius: 8,
  fontWeight: 500,
  fontSize: 14,
  fontFamily: 'Poppins',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
  transition: 'all 0.2s ease',
  padding: large ? '14px 40px' : '10px 20px',
  ...variantStyles[variantType]?.(disabled),
}))

const variantStyles = {
  primary: (disabled) => ({
    margin: ' 0px, auto',
    background: disabled ? 'transparent' : '#3A10E5',
    color: disabled ? '#a0a0a0' : 'white',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3A10E5'}`,

    '&:hover': { background: disabled ? '#e0e0e0' : '#3A10E5E5' },
  }),

  success: (disabled) => ({
    background: disabled ? 'transparent' : '#2AB930',
    color: disabled ? '#a0a0a0' : 'white',
    border: `2px solid ${disabled ? '#e0e0e0' : '#2AB930'}`,

    '&:hover': { background: disabled ? 'transparent' : '#31CF38' },
  }),

  outline: (disabled) => ({
    background: 'white',
    color: disabled ? '#bdbdbd' : '#4C4859',
    border: `2px solid ${disabled ? '#e0e0e0' : '#4C4859'}`,

    '&:hover': {
      background: disabled ? 'transparent' : '#F0EDED',
      color: disabled ? '#bdbdbd' : '#4C4859',
    },
  }),

  secondary: (disabled) => ({
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,

    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),

  default: (disabled) => ({
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,

    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),

  unknown: (disabled) => ({
    background: disabled ? '#e0e0e0' : '#3a10e5',
    color: disabled ? '#a0a0a0' : '#ffffff',

    '&:hover': { background: disabled ? '#e0e0e0' : '#4e28e8' },
  }),

  rpaction: (disabled) => ({
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,

    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),

  logout: (disabled) => ({
    background: disabled ? '#e0e0e0' : '#3a10e5',
    color: disabled ? '#a0a0a0' : '#ffffff',

    '&:hover': { background: disabled ? '#e0e0e0' : '#3a10e5e5' },
  }),

  filled: (disabled) => ({
    background: disabled ? '#e0e0e0' : '#FFFFFF',
    color: disabled ? '#a0a0a0' : '#4C4C4C',
    boxShadow: '0 1px 2px #4C485933',

    '&:hover': { background: disabled ? '#e0e0e0' : '#F0EDED' },
  }),
}
