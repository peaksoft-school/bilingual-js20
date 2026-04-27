import AirplaneImg from '../../assets/icons/airplane.svg'
import WarpImg from '../../assets/icons/warp.svg'
import BorderLineImg from '../../assets/icons/border-line.svg'

import styled from 'styled-components'
import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

export const LandingTwo = () => {
  const planesData = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    delay: Math.random() * 1.2,
    duration: Math.random() * 3 + 4,
    scale: Math.random() * 0.8 + 0.4,
  }))

  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(count, 10000, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        setDisplay(Math.floor(value))
      },
    })

    return controls.stop
  }, [])

  const formatted = display.toLocaleString()

  return (
    <Wrapper>
      <Container>
        <SkyLayer>
          {planesData.map((plane) => (
            <PlaneTrack
              key={plane.id}
              style={{ left: plane.left }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: -160, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: plane.duration,
                repeat: Infinity,
                delay: plane.delay,
                ease: 'linear',
              }}
            >
              <PlaneWrap>
                <Warp
                  src={WarpImg}
                  alt="warp"
                  style={{
                    transform: `translate(-50%, -50%) rotate(-45deg) scale(${plane.scale})`,
                  }}
                />

                <PlaneIcon
                  src={AirplaneImg}
                  alt="airplane"
                  style={{
                    transform: `translate(-50%, -50%) rotate(-45deg) scale(${plane.scale})`,
                  }}
                />
              </PlaneWrap>
            </PlaneTrack>
          ))}
        </SkyLayer>

        <BorderLine src={BorderLineImg} alt="border" />

        <Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Title>{formatted}+</Title>
        </Card>
      </Container>

      <Description>
        Over 10,000 fee waivers for the Bilingual English Test are offered annually.
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
`

const SkyLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`

const PlaneTrack = styled(motion.div)`
  position: absolute;
  bottom: 0;
  pointer-events: none;
`

const PlaneWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`

const Warp = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 20px;
  height: 20px;

  z-index: 0;
`

const PlaneIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 23px;
  opacity: 0.6;
  z-index: 1;
`

const BorderLine = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 178px;
  height: 99px;

  transform: translate(-50%, -50%);
  z-index: 5;
  pointer-events: none;
`

const Card = styled(motion.div)`
  position: absolute;
  z-index: 10;
  width: 165px;
  height: 78px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 12px;

  border: 2px solid #3b82f6;
  box-shadow: 0 4px 10px rgba(56, 130, 240, 0.15);
`

const Title = styled.h1`
  font-size: 45px;
  margin: 0;
`

const Description = styled.p`
  margin-top: 12px;
  font-size: 16px;
  text-align: start;
  color: #23212a;
  font-weight: 100;
  width: 256px;
  height: 48px;
`
