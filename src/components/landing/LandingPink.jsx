import PinkImg from '../../assets/icons/pink.svg'
import MoneyImg from '../../assets/icons/money.svg'
import CurrencyImg from '../../assets/icons/currency.svg'
import PinkLeftImg from '../../assets/icons/pink-left.svg'
import PinkEyesImg from '../../assets/icons/pink-eyes.svg'
import BorderLine2Img from '../../assets/icons/border-line-2.svg'
import LinePink from '../../assets/icons/line-pink.svg'

import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const LandingPink = () => {
  const coins = Array.from({ length: 12 })

  const [value, setValue] = useState(0)
  const count = useMotionValue(0)

  useEffect(() => {
    const controls = animate(count, 10000, {
      duration: 3,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setValue(Math.floor(latest))
      },
    })

    return controls.stop
  }, [])

  return (
    <Wrapper>
      {coins.map((_, i) => (
        <Coin
          key={i}
          style={{ left: Math.random() * 160 }}
          initial={{ y: -120, opacity: 0, rotate: 0 }}
          animate={{
            y: 90,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        >
          <CoinBg src={MoneyImg} />
          <CoinIcon src={CurrencyImg} />
        </Coin>
      ))}

      <PigWrapper>
        <Pig src={PinkImg} alt="pig" />
        <PigEyes src={PinkEyesImg} alt="eyes" />
      </PigWrapper>

      <BalanceWrapper style={{ x: '-50%' }}>
        <BorderLine src={BorderLine2Img} alt="border" style={{ x: '-50%', y: '-50%' }} />

        <Balance>${value.toLocaleString()}</Balance>
      </BalanceWrapper>

      <PigLeftWrapper>
        <PigLeft src={PinkLeftImg} alt="pig" />
        <StyledLinePink src={LinePink} alt="pink" />
        <LeftEyesImg src={PinkEyesImg} alt="eyes" />
      </PigLeftWrapper>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  overflow: hidden;
`



const PigWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  left: 19%;
  transform: translateX(-50%);
  width: 77px;
  z-index: 2;
`

const PigLeftWrapper = styled.div`
  position: absolute;
  bottom: 0%;
  left: 80%;
  transform: translateX(-50%);
  width: 77px;
  z-index: 2;
`

const Pig = styled.img`
  width: 100%;
`

const PigLeft = styled.img`
  width: 100%;
`

const PigEyes = styled.img`
  position: absolute;
  top: 26%;
  left: 20%;
  transform: translateX(-50%);
  width: 5px;
  pointer-events: none;
`

const LeftEyesImg = styled.img`
  position: absolute;
  top: 26%;
  left: 80%;
  transform: translateX(-50%);
  width: 5px;
  pointer-events: none;
`



const Coin = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  z-index: 1;
`

const CoinBg = styled.img`
  width: 29px;
  height: 29px;
`

const CoinIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 30%;
  width: 11px;
  height: 11px;
  transform: translate(-50%, -50%);
`



const BalanceWrapper = styled(motion.div)`
  position: absolute;
  bottom: 35px;
  left: 50%;

  width: 160px;
  height: 68px;

  z-index: 3;
`

const BorderLine = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 170px;
  height: 95px;

  z-index: 1;
  pointer-events: none;
`

const StyledLinePink = styled.img`
  width: 15px;
  position: absolute;
  bottom: 130px;
  right: 155px;
`
const Balance = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(255, 255, 255, 0.5);

  padding: 6px 14px;
  border-radius: 12px;

  border: 2px solid #3785d7;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 38px;

  backdrop-filter: blur(4px);
`
