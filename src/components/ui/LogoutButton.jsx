import React from 'react'
import Button from '@mui/material/Button'

export const LogoutButton = ({ disabled, onClick }) => {
  return (
    <Button
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
      sx={{
        width: 114,
        height: 42,
        background: disabled ? '#ffffff' : '#ffffff',
        color: disabled ? '#1a1a1a' : '#131212',
        fontSize: '14px',
        borderRadius: '8px',
        textTransform: 'none',
        border: '2px, solid #4C4859',

        px: 2,
        py: 0.5,
        '&:hover': {
          background: disabled ? '#f7f4f4' : '#3a10e5e5',
          color: '#ffffff',
        },
      }}
    >
      LOG OUT
    </Button>
  )
}
