import { forwardRef } from 'react'
import { Radio as MuiRadio, styled} from '@mui/material'

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


const StyledRadio = styled(MuiRadio)({
  color: '#9A9A9A',

  '&.Mui-checked': {
    color: '#3A10E5',
  },
})