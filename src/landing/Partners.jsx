import React from 'react'
import styled from 'styled-components'
import ADAMA from '../../src/assets/images/ADAMA.jpg'
import BASF from '../../src/assets/images/BASF.jpg'
import DEKALB from '../../src/assets/images/DEKALB.png'
import RODONIT from '../../src/assets/images/Rodonit.png'
import LIDEA from '../../src/assets/images/Lidea.jpg'
import LG from '../../src/assets/images/LG.png'

function Partners() {
  const logos = [
    { src: LG, alt: 'LG' },
    { src: ADAMA, alt: 'ADAMA' },
    { src: BASF, alt: 'BASF' },
    { src: DEKALB, alt: 'DEKALB' },
    { src: LIDEA, alt: 'Lidea' },
    { src: RODONIT, alt: 'Rodonit' },
  ]

  return (
    <Container>
      <Title>Partners</Title>
      <CarouselWrapper>
        <CarouselTrack>
          {logos.map((logo, idx) => (
            <LogoItem key={`first-${idx}`}>
              <img src={logo.src} alt={logo.alt} />
            </LogoItem>
          ))}
          {logos.map((logo, idx) => (
            <LogoItem key={`second-${idx}`} aria-hidden="true">
              <img src={logo.src} alt={logo.alt} />
            </LogoItem>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </Container>
  )
}

export default Partners

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: #FEF5E8;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

const Title = styled.h1`
  font-size: 40px;
  font-style: Bold;
  color: #3752B4;
  margin: 0 0 50px 0;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(90deg, #f5f7fa 0%, rgba(245, 247, 250, 0) 100%);
    z-index: 10;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 60px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(270deg, #f5f7fa 0%, rgba(245, 247, 250, 0) 100%);
    z-index: 10;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 60px;
    }
  }
`

const CarouselTrack = styled.div`
  display: flex;
  gap: 40px;
  animation: scroll 30s linear infinite;
  width: fit-content;
  padding: 20px 0;

  @media (max-width: 768px) {
    gap: 30px;
    animation: scroll 25s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 20px));
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 255px;
  height: 126px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 140px;
    height: 110px;
    padding: 15px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    width: auto;
    height: auto;
  }
`