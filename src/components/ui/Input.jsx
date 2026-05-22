import { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

export const Input = forwardRef(
  ({ label, placeholder, value, type = 'text', onChange, error, disabled, ...rest }, ref) => (
    <StyledTextField
      ref={ref}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      error={error}
      disabled={disabled}
      {...rest}
    />
  )
)

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',

    '& fieldset': {
      borderColor: '#ccc',
    },

    '&:hover fieldset': {
      borderColor: '#7b61ff',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#7b61ff',
      borderWidth: '2px',
    },

    '&.Mui-error fieldset': {
      borderColor: 'red',
    },

    '&.Mui-disabled': {
      backgroundColor: '#f5f5f5',
    },
  },
}))
