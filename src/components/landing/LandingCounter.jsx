import CounterImg from '../../assets/icons/counter.svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import BorderLine2Img from '../../assets/icons/border-line-2.svg'
import CounterLineImg from '../../assets/icons/counter-line.svg'

export const LandingCounter = () => {
  const [count, setCount] = useState(200)

  useEffect(() => {
    let start = 200
    const end = 1000
    const duration = 2500
    const startTime = performance.now()

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const value = Math.floor(start + (end - start) * progress)

      setCount(value)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [])

  return (
    <Wrapper>
      <Inner>
        <BorderLine src={BorderLine2Img} alt="border" />

        <CounterIcon
          src={CounterImg}
          alt="counter"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <StyledCounterLine src={CounterLineImg} alt="counter-line" />
        <StyledCounterLineSecond src={CounterLineImg} alt="counter-line" />
        <StyledCounterLineTheird src={CounterLineImg} alt="counter-line" />

        <Badge>{count}+</Badge>
      </Inner>

      
      <Description>Students from over 200 countries and territories have benefitted.</Description>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Inner = styled.div`
  position: relative;
  width: 220px;
  height: 140px;
`

const CounterIcon = styled(motion.img)`
  width: 130px;
  height: 140px;
`

const BorderLine = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  width: 170px;
  height: 95px;

  z-index: 1;
`

const Badge = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  width: 160px;
  height: 70px;

  background: white;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 38px;
  font-weight: 800;

  border: 1.5px solid #3b82f6;
  box-shadow: 0 4px 10px rgba(56, 130, 240, 0.15);
`

const StyledCounterLine = styled.img`
  width: 114px;
  position: absolute;
  right: 110px;
  top: 10px;
`

const StyledCounterLineSecond = styled.img`
  width: 144px;
  position: absolute;
  right: 90px;
  top: 30px;
`

const StyledCounterLineTheird = styled.img`
  width: 114px;
  position: absolute;
  right: 86px;
  top: 80px;
`

const Description = styled.p`
  margin-top: 12px;
  font-size: 16px;
  text-align: start;
  color: #23212a;
  font-weight: 400;
  width: 310px;
  height: 38px;
`
