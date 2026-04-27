import CounterImg from '../../assets/icons/counter.svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import BorderLine2Img from '../../assets/icons/border-line-2.svg'

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
      <BorderLine src={BorderLine2Img} alt="border" style={{ x: '-50%', y: '-50%' }} />
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

      <Badge>{count}+</Badge>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 140px;
`

const CounterIcon = styled(motion.img)`
  width: 130px;
  height: 140px;
`

const BorderLine = styled(motion.img)`
  position: absolute;
  top: 57%;
  left: 30%;

  width: 170px;
  height: 95px;

  z-index: 1;
  pointer-events: none;
`

const Badge = styled.div`
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-75%, -50%);

  width: 160px;
  height: 70px;

  background: white;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 38px;
  font-weight: 800;
  color: #111;

  border: 1.5px solid #3b82f6;

  box-shadow: 0 4px 10px rgba(56, 130, 240, 0.15);
 
`

