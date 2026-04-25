import React, { useState } from 'react'
import styled from 'styled-components'
import { Aibek, Alina, Minura, Start } from '../../assets/icons'

export const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const testimonials = [
    {
      id: 1,
      name: 'Aibek Atabekov',
      text: 'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      image: Aibek,
      stars: [Start, Start, Start, Start, Start],
    },
    {
      id: 2,
      name: 'Alina Begishova',
      text: 'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
      image: Alina,
      stars: [Start, Start, Start, Start, Start],
    },
    {
      id: 3,
      name: 'Minura Telegenova',
      text: 'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      image: Minura,
      stars: [Start, Start, Start, Start, Start],
    },
  ]

  return (
    <StyledMainContainer>
      <StyledTitle>Why people love Bilingual</StyledTitle>

      <StyledSliderWrapper>
        <StyledArrowButton onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0))}>
          ←
        </StyledArrowButton>

        <StyledListContainer>
          {testimonials.map((item, index) => (
            <StyledCard
              key={item.id}
              $isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <StyledAvatarContainer>
                <img src={item.image} alt={item.name} />
              </StyledAvatarContainer>

              <StyledReviewText>{item.text}</StyledReviewText>
              <StyledUserName $isActive={index === activeIndex}>- {item.name}</StyledUserName>

              <StyledStars>
                {item.stars.map((starIcon, starIndex) => (
                  <img key={starIndex} src={starIcon} alt="star" />
                ))}
              </StyledStars>
            </StyledCard>
          ))}
        </StyledListContainer>

        <StyledArrowButton onClick={() => setActiveIndex((prev) => (prev < 2 ? prev + 1 : 2))}>
          →
        </StyledArrowButton>
      </StyledSliderWrapper>

      <StyledPagination>
        {[...Array(5)].map((_, index) => (
          <StyledBar
            key={index}
            $active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </StyledPagination>
    </StyledMainContainer>
  )
}

const StyledMainContainer = styled.div`
  margin: 0 auto;
  width: 1351px;
  height: 804px;
  top: 5655px;
  left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`

const StyledTitle = styled.h1`
  color: #3a10e5;
  font-size: 36px;
  font-family: sans-serif;
  width: 480px;
  height: 48px;
  top: 5655px;
  left: 479px;
  font-weight: 700;
  font-style: bold;
  line-height: 100%;
  letter-spacing: 0%;
  margin-top: -57px;
`

const StyledSliderWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const StyledCard = styled.div`
  width: 380px;
  height: 622px;
  top: 5763px;
  left: 536px;
  padding: 40px 30px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;

  background-color: ${(props) => (props.$isActive ? '#666CA7' : '#E5E7EB')};
  color: ${(props) => (props.$isActive ? '#FFFFFF' : '#4C4859')};
  transform: ${(props) => (props.$isActive ? 'scale(1.08)' : 'scale(1)')};
  z-index: ${(props) => (props.$isActive ? '2' : '1')};
  box-shadow: ${(props) => (props.$isActive ? '0px 20px 40px rgba(0, 0, 0, 0.15)' : 'none')};
`

const StyledAvatarContainer = styled.div`
  width: 260px;
  height: 260px;
  top: 5803px;
  left: 589px;
  border-radius: 50%;
  margin-bottom: 25px;
  overflow: hidden;
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StyledReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  font-weight: 600;
`

const StyledUserName = styled.h4`
  font-size: 16px;
  width: 145px;
  height: 24px;
  top: 6283px;
  left: 647px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${(props) => (props.$isActive ? '#FFFFFF' : '#3a10e5')};
  margin-bottom: 10px;
  font-weight: bold;
`

const StyledStars = styled.div`
  display: flex;
  gap: 4px;

  img {
    width: 18px;
    height: 18px;
  }
`

const StyledArrowButton = styled.button`
  width: 60px;
  height: 60px;
  left: 70px;
  top: 6044px;
  border-radius: 50%;
  border: 2px solid #3a10e5;
  background: none;
  color: #3a10e5;
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -18px;
  margin-left: -18px;

  &:hover {
    background-color: #3a10e5;
    color: white;
  }
`

const StyledPagination = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 50px;
  align-items: flex-end;
`

const StyledBar = styled.div`
  width: 6px;
  height: ${(props) => (props.$active ? '30px' : '15px')};
  background-color: ${(props) => (props.$active ? '#3a10e5' : '#D1D5DB')};
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
`
