
import styled from 'styled-components'
import googleImg from '../../assets/icons/svgs/google.svg'

const GoogleSignUpButton = () => {
  return (
    <StyledButton>
      <img src={googleImg} alt="Google" />
      SIGN UP WITH GOOGLE
      
    </StyledButton>
    
  )
}

export default GoogleSignUpButton


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding: 0 20px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  color: #757575;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
    border-color: #d3d3d3;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: block;
  }
`
