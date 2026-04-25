import styled, { keyframes } from "styled-components";
import { Typography } from "@mui/material";
import english from "../../assets/icons/english.svg";
import Accessible from "../../assets/icons/accessible.svg";
import speech from "../../assets/icons/speech.svg";
import extensive from "../../assets/icons/extensive.svg";
import tutoring from "../../assets/icons/tutoring.svg";

const rotateAnimation = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg) scale(1.02); }
`;

export const UserExperience = () => {
  const features = [
    { icon: Accessible, text: "Accessible anytime, anywhere" },
    { icon: extensive, text: "Extensive business content" },
    { icon: speech, text: "Leading speech recognition" },
    { icon: tutoring, text: "Unlimited live tutoring" },
  ];

  return (
    <StyledMainContainer>
      <StyledContentSection>
        <StyledTitle>Unparalleled user experience</StyledTitle>

        <StyledDescription>
          The most effective way to perfect a language is by immersing yourself
          in it. Rosetta Stone for Enterprise delivers an effective end-to-end
          experience, founded on a wealth of carefully structured content. Each
          learner has the opportunity to balance independent study with optional
          online tutoring in a way that fits their schedule and language
          learning goals.
        </StyledDescription>

        <StyledListContainer>
          {features.map((item, index) => (
            <StyledListItem key={index}>
              <StyledIconBox>
                <img src={item.icon} alt={item.text} />
              </StyledIconBox>
              <StyledListItemText>{item.text}</StyledListItemText>
            </StyledListItem>
          ))}
        </StyledListContainer>
      </StyledContentSection>

      <StyledImageSection>
        <StyledIllustration src={english} alt="English Learning Illustration" />
      </StyledImageSection>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf5e9;
  height: 100vh;
  padding: 60px 6%;
  gap: 50px;
`;

const StyledContentSection = styled.div`
  flex: 1;
  max-width: 600px;
`;

const StyledTitle = styled(Typography)`
  && {
    font-size: 43px;
    font-weight: 700;
    color: #3752b4;
    line-height: 1.2;
    margin-bottom: 44px;
    font-family: "Inter", sans-serif;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

const StyledDescription = styled(Typography)`
  && {
    font-size: 15px;
    line-height: 1.6;
    font-weight: 400;
    color: #23212a;
    margin-bottom: 40px;
  }
`;

const StyledListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 39px;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledIconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledListItemText = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`;

const StyledImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledIllustration = styled.img`
  width: 100%;
  max-width: 448px;
  height: auto;
  animation: ${rotateAnimation} 5s ease-in-out infinite;
`;
