import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'
import { styled } from '@mui/material/styles'

const Icon = styled('span')({
  width: 22,
  height: 22,
  border: '2px solid #9e9e9e',
  borderRadius: 4,
  backgroundColor: 'transparent',
})

const CheckedIcon = styled(Icon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::after': {
    content: '"✔"',
    fontSize: 14,
    color: '#4caf50',
  },
})

export const Checkbox = forwardRef(({ onChange, checked, disabled, ...rest }, ref) => {
  return (
    <div>
      <MuiCheckbox
        ref={ref}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        icon={<Icon />}
        checkedIcon={<CheckedIcon />}
        sx={{
          padding: 1.2,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        {...rest}
      />
    </div>
  )
})