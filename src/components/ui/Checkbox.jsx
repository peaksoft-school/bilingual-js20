import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox, styled, Typography } from '@mui/material'
import { CheckFillGreenIcon } from '../../assets/icons'

export const Checkbox = forwardRef(({ onChange, checked, disabled, ...rest }, ref) => (
  <StyledCheckbox
    ref={ref}
    onChange={onChange}
    checked={checked}
    disabled={disabled}
    icon={<StyledIcon variant="span" />}
    checkedIcon={<img src={CheckFillGreenIcon} alt="checked" width={"25px"}/>}
    {...rest}
  />
))

const StyledCheckbox = styled(MuiCheckbox)({
  padding: 1.2,

  '&:hover': {
    backgroundColor: 'transparent',
  },
})

const StyledIcon = styled(Typography)({
  width: 22,
  height: 22,
  border: '2px solid #9e9e9e',
  borderRadius: 4,
  backgroundColor: 'transparent',
})
