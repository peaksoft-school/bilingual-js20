import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const MyButton = ({ children, variant = 'primary', large, disabled, onClick, ...props }) => {
  return (
    <StyledButton
      variantType={variant}
      large={large}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}



const StyledButton = styled(Button)(({ disabled, variantType, large }) => ({
  borderRadius: 8,
  fontWeight: 500,
  fontSize: 14,
  padding: large ? '14px 40px' : '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
  transition: 'all 0.2s ease',
  ...variantStyles[variantType](disabled),
}))

const variantStyles = {
  primary: (disabled) => ({
    width: 164,
    height: 42,
    background: disabled ? '#e0e0e0' : 'linear-gradient(90deg, #5f2cff, #3a5bff)',
    color: disabled ? '#a0a0a0' : 'white',
    '&:hover': {
      background: disabled ? '#e0e0e0' : 'linear-gradient(90deg, #5f2cff, #3a5bff)',
    },
  }),
  success: (disabled) => ({
    width: 82,
    height: 42,
    background: disabled ? '#e0e0e0' : '#2ecc71',
    color: disabled ? '#a0a0a0' : 'white',
    '&:hover': {
      background: disabled ? '#e0e0e0' : '#31cf38',
    },
  }),
  outline: (disabled) => ({
    width: 114,
    height: 42,
    background: 'transparent',
    color: disabled ? '#bdbdbd' : '#5f2cff',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,
    '&:hover': {
      background: disabled ? 'transparent' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),
  secondary: (disabled) => ({
    width: 100,
    height: 42,
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,
    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),
  default: (disabled) => ({
    width: 115,
    height: 42,
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,
    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),
  unknown: (disabled) => ({
    width: 142,
    height: 42,
    background: disabled ? '#e0e0e0' : '#3a10e5',
    color: disabled ? '#a0a0a0' : '#ffffff',
    '&:hover': {
      background: disabled ? '#e0e0e0' : '#4e28e8',
    },
  }),
  rpaction: (disabled) => ({
    width: 168,
    height: 42,
    background: '#ffffff',
    color: disabled ? '#bdbdbd' : '#3a10e5',
    border: `2px solid ${disabled ? '#e0e0e0' : '#3a10e5'}`,
    '&:hover': {
      background: disabled ? '#ffffff' : '#3a10e5',
      color: disabled ? '#bdbdbd' : '#fff',
    },
  }),
  loqout: (disabled) => ({
    width: 500,
    height: 52,
    background: disabled ? '#e0e0e0' : '#3a10e5',
    color: disabled ? '#a0a0a0' : '#ffffff',
    '&:hover': {
      background: disabled ? '#e0e0e0' : '#3a10e5e5',
    },
  }),
}
