import styled from 'styled-components'
import Alice from '../../assets/imgs/Img_1.jpg'
import Mia from '../../assets/imgs/Img_2.jpg'
import Oscar from '../../assets/imgs/Img_3.jpg'
import Jack from '../../assets/imgs/Img_4.jpg'
import Rose from '../../assets/imgs/Img_5.jpg'
import Albert from '../../assets/imgs/Img_6.jpg'

function OurTeam() {
  const members = [
    {
      name: 'Alice Archie',
      role: 'Founder Bilingual',
      tl: '0',
      tr: '0',
      br: '0',
      bl: '52.5px',
      bg: Alice,
    },
    { name: 'Mia George', role: 'Marketer', tl: '52.5px', tr: '0', br: '52.5px', bl: '0', bg: Mia },
    { name: 'Oscar Ryan', role: 'Developer', tl: '0', tr: '0', br: '52.5px', bl: '0' , bg: Oscar },
    { name: 'Jack William', role: 'UX/UI Designer', tl: '0', tr: '52.5px', br: '0', bl: '0' , bg: Jack },
    { name: 'Rose Thomas', role: 'Chief Editor', tl: '52.5px', tr: '0', br: '52.5px', bl: '0' , bg: Rose },
    { name: 'Albert Stanley', role: 'Chief Editor', tl: '0', tr: '52.5px', br: '0', bl: '0' , bg: Albert },
  ]

  const renderCards = () =>
    members.map(({ name, role, tl, tr, br, bl, bg }) => (
      <div key={name}>
        <StyledCard>
          <StyledPhoto $bg={bg} $tl={tl} $tr={tr} $br={br} $bl={bl} />
          <StyledInfo>
            <StyledName>{name}</StyledName>
            <StyledRole>{role}</StyledRole>
          </StyledInfo>
        </StyledCard>
      </div>
    ))

  return (
    <>
      <StyledTeam>Our team</StyledTeam>
    <StyledCarousel>
      <StyledGroup>{renderCards()}</StyledGroup>
      <StyledGroup aria-hidden>{renderCards()}</StyledGroup>
      <StyledGroup aria-hidden>{renderCards()}</StyledGroup>
    </StyledCarousel>
    </>
  )
}

export default OurTeam

const StyledCarousel = styled.div`
  margin: 100px auto;
  width: 1232px;
  height: 335px;
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
`

const StyledTeam = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  color: #3752b4;
  line-height: 130%;
  font-size: 40px;
  letter-spacing: 0%;
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
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const StyledPhoto = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  background-color: coral;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-top-left-radius: ${({ tl }) => tl || '0'};
  border-top-right-radius: ${({ tr }) => tr || '0'};
  border-bottom-right-radius: ${({ br }) => br || '0'};
  border-bottom-left-radius: ${({ bl }) => bl || '0'};
`

const StyledInfo = styled.div`
  text-align: center;
`

const StyledName = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #3a10e5;
  margin: 0 0 2px 0;
`

const StyledRole = styled.p`
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #555;
  margin: 0;
`