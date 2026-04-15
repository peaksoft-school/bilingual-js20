import { Box, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import BooksImg from '../../assets/icons/images/books.png'
import HatImg from '../../assets/icons/images/hat.png'



export const Landing = () => {
  return (
    <StyledWrapper>
      
      <StyledTextBlock>
        <StyledTypography>Prove your English proficiency today with</StyledTypography>
        <StyledSpan>BILINGUAL</StyledSpan>
        <StyledPTeg component="p" variant="body1">
          For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
          confidence they need to speak new languages.
        </StyledPTeg>
      </StyledTextBlock>
      <StyledImageOne src={HatImg} alt="Hat" />
     
      <StyledImage src={BooksImg} alt="Books" />
    </StyledWrapper>
  )
};


const fadeSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-100px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(-150px); }
  to { opacity: 1; transform: translateX(-100px); }
`;


const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;

  background-color: #fcd200;

  padding-top: 0px;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: url('/src/assets/icons/images/splash.png');
    background-repeat: no-repeat;

    background-size: 1289px; 
    background-position: center; 

    opacity: 0.4;
    pointer-events: none;
  }
`

const StyledTextBlock = styled(Box)`
  animation: ${fadeSlideDown} 1s ease-out forwards;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', sans-serif; 
  font-size: 50px !important; 
  font-weight: 700 !important; 
  line-height: 1.2 !important; 
  letter-spacing: 1.2px !important; 
  gap: 10px;
  color: #43404e !important;
  padding: 122px 80px !important;
  width: 735px !important;
  height: 160px !important;
  margin-top: 30px !important;
`;

const StyledSpan = styled.span`
  font-family: "Inter", 'Arial', sans-serif;
  font-size: 40px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  letter-spacing: 2% !important;
  color: #c93d7d !important;
  padding: 162px 80px !important;
  width: 295px;
  height: 75px;
`;

const StyledPTeg = styled(Typography)`
  width: 830px !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  letter-spacing: -0.5px !important;
  color: #23212a !important;
  padding: 0px 80px !important;
  margin-top: 20px !important;
`

const StyledImage = styled.img`
  width: 494px; 
  height: 399px;
  position: absolute; 
  top: 168px; 
  left: 830px;

  animation: ${slideInRight} 1s ease-out forwards;
`;

const StyledImageOne = styled.img`
  width: 180px;
  height: 213px;
  position: absolute;
  top: 130px; 
  left: 720px; 

  animation: ${bounce} 2s infinite;
`;


  

