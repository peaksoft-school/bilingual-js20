import styled from 'styled-components'
import Alice from '../../assets/Imgs/Img_1.jpg'

function OurTeam() {
  return (
    <StyledCorousel>
      <StyledTeam>Our team</StyledTeam>
      <StyledGroup>
        <div>
          <StyledCard tl="0" tr="0" br="0" bl="52.5px" bg={Alice}>
            <StyledName>Alice Archie</StyledName>
            <StyledRole>Founder Bilingual</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="52.5px" tr="0" br="52.5px" bl="0">
            2<StyledName>Mia George</StyledName>
            <StyledRole>Marketer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="0" br="52.5px" bl="0">
            3<StyledName>Oscar Ryan</StyledName>
            <StyledRole>Developer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="52.5px" br="0" bl="0">
            4<StyledName>Jack William</StyledName>
            <StyledRole>UX/UI Designer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="52.5px" tr="0" br="52.5px" bl="0">
            5<StyledName>Rose Thomas</StyledName>
            <StyledRole>Chief Editor</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="52.5px" br="0" bl="">
            6<StyledName>Albert Stanley</StyledName>
            <StyledRole>Chief Editor</StyledRole>
          </StyledCard>
        </div>
      </StyledGroup>

     <StyledGroup aria-hidden>
        <div>
          <StyledCard tl="0" tr="0" br="0" bl="52.5px">
            1<StyledName>Alice Archie</StyledName>
            <StyledRole>Founder Bilingual</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="52.5px" tr="0" br="52.5px" bl="0">
            2<StyledName>Mia George</StyledName>
            <StyledRole>Marketer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="0" br="52.5px" bl="0">
            3<StyledName>Oscar Ryan</StyledName>
            <StyledRole>Developer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="52.5px" br="0" bl="0">
            4<StyledName>Jack William</StyledName>
            <StyledRole>UX/UI Designer</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="52.5px" tr="0" br="52.5px" bl="0">
            5<StyledName>Rose Thomas</StyledName>
            <StyledRole>Chief Editor</StyledRole>
          </StyledCard>
        </div>

        <div>
          <StyledCard tl="0" tr="52.5px" br="0" bl="">
            6<StyledName>Albert Stanley</StyledName>
            <StyledRole>Chief Editor</StyledRole>
          </StyledCard>
        </div>
      </StyledGroup>
    </StyledCorousel>
  )
}

export default OurTeam

const StyledCorousel = styled.div`
  margin: 100px auto;
  width: 1232px;
  height: 335px;
  border: 1px solid;
  display: flex;
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  gap: 1em;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
`
const StyledTeam = styled.div`
  font-size: 3rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Gilroy', sans-serif;
  font-weight: bold;
  color: #3752b4;
  line-height: 130%;
  font-weight: 700;
`
const StyledGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-shrink: 0;
  will-change: transform;
  animation: spin 10s linear infinite;

  @keyframes spin {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-101.5%);
    }
  }
`
const StyledCard = styled.div`
  height: 180px;
  width: 180px;
  padding: 1em;
  position: relative;
  overflow: hidden;

  background-image: url(${({ bg }) => bg});
  background-size: 100px;
  background-position: center;
  background-repeat: no-repeat;

  font-size: 3rem;
  text-align: center;
  align-content: center;

  border-top-left-radius: ${({ tl }) => tl || '0'};
  border-top-right-radius: ${({ tr }) => tr || '0'};
  border-bottom-right-radius: ${({ br }) => br || '0'};
  border-bottom-left-radius: ${({ bl }) => bl || '0'};
`
const StyledName = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #3a10e5;
  width: 160px;
  margin: 0;
  position: absolute;
  left: 12px;
  bottom: 28px;
  transform: none;
`

const StyledRole = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  width: 160px;
  margin: 0;
  position: absolute;
  left: 12px;
  bottom: 10px;
  transform: none;
`