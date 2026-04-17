import { styled, Typography } from '@mui/material'
import { BilingualIcon } from '../assets/icons'

export const Footer = () => (
  <StyledFooter>
    <img src={BilingualIcon} alt="bilingual" width={98} />

    <Typography>© 2022 Peaksoft</Typography>
  </StyledFooter>
)

const StyledFooter = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '1rem',
  padding: '34px',

  fontFamily: 'Gilroy',
  color: '#98a2b3',
  backgroundColor: 'white',
})
