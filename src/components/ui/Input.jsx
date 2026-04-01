import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  error = false,
  disabled = false,
  fullWidth = true,
  type = 'text',
  ...rest
}) => {
  return (
    <StyledTextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
      variant="outlined"
      {...rest}
    />
  )
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D9D9D9',
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7B61FF',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7B61FF',
      borderWidth: 2,
    },

    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FF4D4F',
    },

    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D9D9D9',
      backgroundColor: '#F5F5F5',
    },
  },
}))
