import { Box, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import BooksImg from '../assets/icons/images/books.png';
import HatImg from '../assets/icons/images/hat.png';
import { LandingHeader } from './../layout/LandingHeader';



export const Landing = () => {
  return (
    <Wrapper>
      <LandingHeader />
      <TextBlock>
        <StyledTypography>Prove your English proficiency today with</StyledTypography>
        <StyledSpan>BILINGUAL</StyledSpan>
        <StyledPTeg component="p" variant="body1">
          For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
          confidence they need to speak new languages.
        </StyledPTeg>
      </TextBlock>
      <StyledImageOne src={HatImg} alt="Hat" />
     
      <StyledImage src={BooksImg} alt="Books" />
    </Wrapper>
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


const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 150vh;
  background-color: #fcd200;
  padding-top: 0px;
  position: relative;
  flex-direction: column;
`;

const TextBlock = styled(Box)`
  animation: ${fadeSlideDown} 1s ease-out forwards;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', sans-serif; 
  font-size: 60px !important; 
  font-weight: 700 !important; 
  line-height: 1 !important; 
  letter-spacing: -1px !important; 
  color: #43404e !important;
  padding: 142px 80px !important;
  width: 735px !important;
  height: 190px !important;
  margin-top: 280px !important;
`;

const StyledSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 100px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  letter-spacing: -2px !important;
  color: #c93d7d !important;
  padding: 162px 80px !important;
  width: 835px !important;
  height: 290px !important;
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
  width: 590px; 
  height: auto;
  position: absolute; 
  top: 550px; 
  right: 100px;

  animation: ${slideInRight} 1s ease-out forwards;
`;

const StyledImageOne = styled.img`
  width: 336px;
  height: auto;
  position: absolute;
  top: 430px; 
  left: 720px; 

  animation: ${bounce} 2s infinite;
`;


  

