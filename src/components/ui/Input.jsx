import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Input = forwardRef(
  ({ label = 'Label', placeholder = 'text', value, onChange, state = 'default', ...rest }, ref) => {
    return (
      <StyledTextField
        ref={ref}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        disabled={state === 'disabled'}
        error={state === 'error'}
        inputState={state}
        InputProps={{
          readOnly: state === 'click',
        }}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'inputState',
})(({ inputState }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',

    '& fieldset': {
      borderColor: '#ccc',
    },

    ...(inputState === 'hover' && {
      '&:hover fieldset': {
        borderColor: '#7b61ff',
      },
    }),

    ...(inputState === 'click' && {
      '& fieldset': {
        borderColor: '#7b61ff',
      },
    }),

    ...(inputState === 'active' && {
      '& fieldset': {
        borderColor: '#7b61ff',
        borderWidth: '2px',
      },
    }),

    ...(inputState === 'focus' && {
      '&.Mui-focused fieldset': {
        borderColor: '#7b61ff',
      },
    }),

    ...(inputState === 'filled' && {
      backgroundColor: '#f5f5f5',
    }),

    ...(inputState === 'error' && {
      '& fieldset': {
        borderColor: 'red',
      },
    }),
  },
}))
