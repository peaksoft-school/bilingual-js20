import { forwardRef } from 'react'
import { Radio as MuiRadio } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Radio = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => {
  return (
    <StyledRadio
      ref={ref}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  )
})

export default Radio

const StyledRadio = styled(MuiRadio)({
  color: '#9A9A9A',
  '&.Mui-checked': {
    color: '#3A10E5',
  },
})