import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon, Google } from '../assets/icons/index.js'
import { Checkbox } from '../components/ui/Checkbox.jsx'
import { Input } from '../components/ui/Input.jsx'
import Button from '@mui/material/Button'

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6b0fa9; 
  width: 100vw;
  height: 100vh;
`

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 660px;
  height: 726px;  
  gap: 20px; 
  padding: 40px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  
  /* Размеры кнопки */
  width: 25px;
  height: 25px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: none;
  border: none; 
  padding: 0;
  border-radius: 100%;
  
  color: #9e9e9e;
  cursor: pointer;
  font-size: 40px;
  
  transform: scale(1) rotate(45deg); 
  
  transition: all ease 0.2s;

  &:hover {
    color: #4c4859; 
  }
`
const LogoImg = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 5px;
`

const H1styled = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #4c4859;
  margin: 0 0 10px 0;
`

const textFieldStyle = {
  width: '95%', /* Вернул 95% */
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '8px',
  },
}

const RememberStyled = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 2.5%; 
  gap: 8px;
  font-size: 14px;
  color: #757575;

  & input, & > *:first-child {
    transform: scale(0.8);
  }
`

const signInButtonStyle = {
  width: '95%', 
  height: '56px', 
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  background: '#3A10E5',
  '&:hover': { background: '#2e0db5' }
}

const GoogleButton = styled(Button)`
  && {
    width: 221px;
    height: 49px;
    padding: 14px 20px;
    border-radius: 8px;
    text-transform: none;
    white-space: nowrap;
    font-size: 14px;
    color: #616161;
    border: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: white;
    margin-top: 10px;
    box-shadow: none; /* Убираем тень MUI, если она не нужна */

    &:hover {
      background: #f5f5f5;
      border: 1px solid #BDBDBD;
      box-shadow: none;
    }
  }
`

const FooterText = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #757575;
  margin-top: 15px;
  text-transform: uppercase;

  a {
    color: #3A10E5;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`

function SignUp() {
  return (
    <BackgroundWrapper>
      <StyledDiv>
        <CloseButton>+</CloseButton>
        
        <LogoImg src={LogoIcon} alt="Logo" />
        <H1styled>Create an Account</H1styled>

        <Input id="email" label="First name" variant="outlined" sx={textFieldStyle} />
        <Input id="email" label="Last name" variant="outlined" sx={textFieldStyle} />
        <Input id="email" label="Email" variant="outlined" sx={textFieldStyle} />

        <Input
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={textFieldStyle}
        />

        <Button variant="contained" sx={signInButtonStyle}>
          SIGN UP
        </Button>

        <GoogleButton variant="outlined">
          <img src={Google} alt="Google"/>
          SIGN UP WITH GOOGLE
        </GoogleButton>

        <FooterText>
          <span>ALREADY HAVE AN ACCOUNT?</span>
          <a to="/Login">LOG IN</a>
        </FooterText>
      </StyledDiv>
    </BackgroundWrapper>
  )
}

export default SignUp