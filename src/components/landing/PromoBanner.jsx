import Box from '@mui/material/Box'
import styled from 'styled-components'
import { LeftArrow, RightArrow, World } from '../../assets/icons'
import { useState } from 'react'

export const PromoBanner = () => {
  const [index, setIndex] = useState(0)

  const data = [
    {
      title: 'Confirm your English proficiency today!',
      desc: [
        'For nearly 30 years, learners have turned to',
        'Rosetta Stone to build the fluency and',
        'confidence they need to speak new languages.',
      ],
      cardBg: '#212629',
      titleColor: '#fe9102',
    },
    {
      title: 'Improve your English skills daily!',
      desc: ['Practice makes perfect', 'Consistency is the key', 'Keep learning every day'],
      cardBg: '#FE9102',
      titleColor: '#FFFFFF',
    },
    {
      title: 'Speak with confidence!',
      desc: ['Real conversations', 'Real progress', 'Real results'],
      cardBg: '#2b1b3f',
      titleColor: '#a78bfa',
    },
    {
      title: 'Master English faster!',
      desc: ['Smart learning system', 'Daily practice', 'Better fluency'],
      cardBg: '#0f172a',
      titleColor: '#22c55e',
    },
    {
      title: 'Unlock your potential!',
      desc: ['Learn anywhere', 'Practice anytime', 'Achieve fluency'],
      cardBg: '#111827',
      titleColor: '#f97316',
    },
  ]

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  return (
    <StyledBox>
      <StyledTitle>Check out each question type</StyledTitle>

      <CarouselWrapper>
        <SliderContainer $index={index}>
          {data.map((item, i) => (
            <StyledContent key={i} bg={item.cardBg}>
              <TextSection>
                <StyledTitleTwo color={item.titleColor}>{item.title}</StyledTitleTwo>

                <StyledDescription>
                  {item.desc.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </StyledDescription>
              </TextSection>

              <StyledWorld src={World} alt="World Globe" />
            </StyledContent>
          ))}
        </SliderContainer>
      </CarouselWrapper>

      <NavigationWrapper>
        <NavButton className="white" onClick={prev}>
          <img src={LeftArrow} alt="prev" />
        </NavButton>

        <PaginationDots>
          {data.map((_, i) => (
            <div key={i} className={`dot ${i === index ? 'active' : ''}`} />
          ))}
        </PaginationDots>

        <NavButton className="blue" onClick={next}>
          <img src={RightArrow} alt="next" />
        </NavButton>
      </NavigationWrapper>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #fdf5e9;
  min-height: 100vh;
  overflow-x: hidden;
`

const StyledTitle = styled.h1`
  font-size: 44px;
  color: #3752b4;
  font-weight: 900;
  margin-bottom: 40px !important;
  width: 558px;
  height: 48px;
  font-style: bold;
`

const CarouselWrapper = styled.div`
  width: 1028px;
  display: flex;
  justify-content: flex-start;
`

const SliderContainer = styled.div`
  display: flex;
  gap: 40px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => `translateX(-${props.$index * 1068}px)`};
`

const StyledContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1028px;
  flex-shrink: 0;
  height: 440px;
  padding: 60px;
  border-radius: 70px 70px 70px 0px;
  background: ${(props) => props.bg};
  transition: all 0.4s ease;
`

const TextSection = styled.div`
  margin-top: -140px;
`

const StyledTitleTwo = styled.h1`
  color: ${(props) => props.color};
  font-size: 48px;
  margin-bottom: 200px;
  height: 106px;
  width: 508px;
`

const StyledDescription = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 575px;
  height: 108px;
  margin-top: -150px;
  font-size: 31px;
  font-weight: 400;
  line-height: 100%;
  font-style: normal;
`

const StyledWorld = styled.img`
  width: 332px;
  height: auto;
  margin-top: 20px;
  margin-right: 40px;
`

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  width: 283px;
  height: 78px;
`

const NavButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  background-color: white;
  transition: 0.3s;

  &.white:hover {
    background-color: #f1f1f5;
  }

  &.blue {
    background-color: blue;
    color: white;
  }

  &.blue:hover {
    background-color: #4c1fd1;
  }
`

const PaginationDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .dot {
    width: 6px;
    height: 16px;
    background: #3a10e533;
    border-radius: 10px;
    transition: 0.3s;
  }

  .dot.active {
    width: 6px;
    height: 30px;
    background: #3a10e5;
    border-radius: 10px;
    margin-bottom: 13px;
  }
`
