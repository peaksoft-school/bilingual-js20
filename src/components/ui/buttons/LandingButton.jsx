import { forwardRef } from 'react'
import { styled, Button } from '@mui/material'
import BeginImage from '../../../assets/images/begin-btn.png'
import StartImage from '../../../assets/images/started-btn.png'

export const LandingButton = forwardRef(({ onClick, isStart = true, ...rest }, ref) => (
  <StyleStartButton onClick={onClick} isstart={isStart.toString()} ref={ref} {...rest} />
))

const StyleStartButton = styled(Button)(({ isstart }) => ({
  backgroundImage: `url(${isstart !== 'false' ? StartImage : BeginImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '12.5rem',
  height: '3.75rem',
  cursor: 'pointer',
  color: '#eeb6c0',
  borderRadius: '2rem',
}))
