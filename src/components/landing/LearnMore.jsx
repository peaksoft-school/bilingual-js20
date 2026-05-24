import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  Globe,
  ResultsDashboardImg,
  SecureDesignImg,
  TestScience,
  TestSecurityImg,
} from '../../assets/icons'

const ITEMS = [
  {
    title: 'Expand your applicant pool',
    description:
      'Tap into a diverse pool of candidates from 130+ countries and territories of origin, who have taken the Duolingo English Test because of its robust accessibility.',
    image: Globe,
    top: 42,
    isLeft: true,
    isCenter: true,
    offset: -349,
    delay: 0,
  },
  {
    title: 'Built on the latest assessment science',
    description:
      'The Duolingo English Test is a computer adaptive test backed by rigorous research, with results that are highly correlated with other major assessments such as the TOEFL and the IELTS.',
    image: TestScience,
    top: 440,
    isLeft: false,
    offset: 133,
    delay: 0.5,
  },
  {
    title: 'Innovative test security',
    description:
      'Industry-leading security protocols, individualized test proctoring, and computer adaptive technology help prevent fraud and cheating and ensure results you can trust.',
    image: TestSecurityImg,
    top: 760,
    isLeft: true,
    offset: -240,
    delay: 1.0,
  },
  {
    title: 'Convenient results dashboard',
    description:
      "Access candidates' certificates, video interviews, and writing samples through a free and secure dashboard. Quickly and easily view applicant data with filtering tools.",
    image: ResultsDashboardImg,
    top: 1042,
    isLeft: false,
    offset: 190,
    delay: 1.5,
  },
  {
    title: 'Secure design',
    description:
      'Adaptive test engine dynamically administers test questions from a database of hundreds of thousands of items.',
    image: SecureDesignImg,
    top: 1380,
    isLeft: true,
    offset: -240,
    delay: 2.0,
  },
]

const PATH =
  'M197.554 1.10071C73.7951 326.215 390.383 136.877 393.094 318.798C368.372 484.549 -61.1025 400.385 30.4793 593.229C122.061 786.072 365.342 705.637 360.917 875.077C356.932 1027.63 13.5246 1017.02 3.25223 1169.29C-7.4874 1328.47 532.942 1310.21 241.798 1672.1'

const SnakePathSVG = () => (
  <SVGWrap>
    <svg
      width="397"
      height="1675"
      viewBox="0 0 397 1675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_948_14298"
          x1="205.392"
          y1="2.33688"
          x2="205.392"
          y2="1672.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00AAFF" />
          <stop offset="0.328125" stopColor="#FF6163" />
          <stop offset="0.682292" stopColor="#A169F7" />
          <stop offset="1" stopColor="#97CF26" />
        </linearGradient>
      </defs>

      <path
        d={PATH}
        stroke="url(#paint0_linear_948_14298)"
        strokeWidth="7.18796"
        strokeDasharray="29.56 18.56"
      />

      <circle r="7" fill="#3b2fcc">
        <animateMotion dur="5s" begin="0s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="7" fill="rgba(59,47,204,0.9)">
        <animateMotion dur="5s" begin="-0.15s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="6" fill="rgba(59,47,204,0.75)">
        <animateMotion dur="5s" begin="-0.3s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="6" fill="rgba(59,47,204,0.6)">
        <animateMotion dur="5s" begin="-0.45s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="5" fill="rgba(59,47,204,0.45)">
        <animateMotion dur="5s" begin="-0.6s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="5" fill="rgba(59,47,204,0.3)">
        <animateMotion dur="5s" begin="-0.75s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="4" fill="rgba(59,47,204,0.2)">
        <animateMotion dur="5s" begin="-0.9s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r="4" fill="rgba(59,47,204,0.1)">
        <animateMotion dur="5s" begin="-1.1s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
    </svg>
  </SVGWrap>
)

export const LearnMore = () => {
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.classList.add('visible')
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })
    return () => {
      observers.forEach((obs) => obs && obs.disconnect())
    }
  }, [])

  return (
    <Wrapper>
      <Title>Learn more</Title>
      <ContentWrap>
        <SnakePathSVG />
        {ITEMS.map((item, index) => (
          <ItemRow
            key={index}
            $top={item.top}
            $isLeft={item.isLeft}
            $index={index}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <ItemText>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.description}</ItemDesc>
            </ItemText>
            <ItemImageWrap
              $isCenter={item.isCenter}
              $isLeft={item.isLeft}
              $offset={item.offset}
              $delay={item.delay}
            >
              <img src={item.image} alt={item.title} />
            </ItemImageWrap>
          </ItemRow>
        ))}
      </ContentWrap>
      <CtaWrap>
        <Button>GET STARTED</Button>
      </CtaWrap>
    </Wrapper>
  )
}

export default LearnMore

const SVGWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 0;
  pointer-events: none;
`

const Wrapper = styled.div`
  background: #fdf8f4;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 36px;
  color: #3b2fcc;
  margin-bottom: 80px;
`

const ContentWrap = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  height: 1644px;
`

const ItemRow = styled.div`
  position: absolute;
  top: ${({ $top }) => $top}px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: ${({ $isLeft }) =>
    $isLeft === true ? 'row' : $isLeft === false ? 'row-reverse' : 'row'};
  z-index: 1;

  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s ease ${({ $index }) => $index * 0.15}s,
    transform 0.7s ease ${({ $index }) => $index * 0.15}s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`

const ItemText = styled.div`
  width: 400px;
  padding: 0 20px;
  padding-top: 40px;
`

const ItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #3c3c3c;
  margin-bottom: 12px;
`

const ItemDesc = styled.p`
  font-size: 15px;
  color: #6a6a6a;
  line-height: 1.6;
`

const ItemImageWrap = styled.div`
  width: ${({ $isCenter }) => ($isCenter ? '100%' : '400px')};
  position: ${({ $isCenter }) => ($isCenter ? 'absolute' : 'relative')};
  left: ${({ $isCenter }) => ($isCenter ? '50%' : 'auto')};
  transform: ${({ $isCenter, $offset }) =>
    $isCenter ? `translateX(calc(-50% + ${$offset || 0}px))` : `translateX(${$offset || 0}px)`};
  display: flex;
  justify-content: ${({ $isLeft }) => ($isLeft ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  padding: 0;
  margin-top: 0px;

  img {
    max-width: 260px;
    height: auto;
    transition: transform 0.4s ease;
    animation: starGlow 2.5s ease-in-out ${({ $delay }) => $delay || 0}s infinite;

    &:hover {
      transform: scale(1.05);
    }
  }

  @keyframes starGlow {
    0% {
      filter: drop-shadow(0 0 0px transparent);
      opacity: 1;
    }
    50% {
      filter: drop-shadow(0 0 12px #a169f7) drop-shadow(0 0 24px #00aaff);
      opacity: 0.85;
    }
    100% {
      filter: drop-shadow(0 0 0px transparent);
      opacity: 1;
    }
  }
`

const CtaWrap = styled.div`
  margin-top: 50px;
  margin-left: 90px;
`

const Button = styled.button`
  background: #e8427a;
  color: #fff;
  border: none;
  padding: 16px 50px;
  border-radius: 35px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #d03570;
    transform: scale(1.05);
  }
`
