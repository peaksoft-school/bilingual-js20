import { } from '@mui/material'

import styled from 'styled-components'
import { GoPaperAirplane } from 'react-icons/go'

export const LandingTwo = () => {
  return (
    <StyledBox>
      <GoPaperAirplane />
    </StyledBox>
  )
}





const StyledBox = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;

`