import styled, { keyframes } from 'styled-components'
import english from '../../assets/icons/english.svg'
import Accessible from '../../assets/icons/accessible.svg'
import speech from '../../assets/icons/speech.svg'
import extensive from '../../assets/icons/extensive.svg'
import tutoring from '../../assets/icons/tutoring.svg'

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(10deg) scale(1.05);
  }

  100% {
    transform: rotate(0deg) scale(1);
  }
`
export const UserExperience = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Unparalleled user experience</h1>
          <p>
            The most effective way to perfect a language is by immersing yourself in it. Rosetta
            Stone for Enterprise delivers an effective end-to-end experience, founded on a wealth of
            carefully structured content. Each learner has the opportunity to balance independent
            study with optional online tutoring in a way that fits their schedule and language
            learning goals.
          </p>
          <div className="cards">
            <div className="card" style={{ display: 'flex' }}>
              <img src={Accessible} alt="" />
              <h4>Accessible anytime, anywhere</h4>
            </div>

            <div className="card" style={{ display: 'flex' }}>
              <img src={extensive} alt="" />
              <h4>Extensive business content</h4>
            </div>

            <div className="card" style={{ display: 'flex' }}>
              <img src={speech} alt="" />
              <h4>Leading speech recognition</h4>
            </div>

            <div className="card" style={{ display: 'flex' }}>
              <img src={tutoring} alt="" />
              <h4>Unlimited live tutoring</h4>
            </div>
          </div>
        </div>

        <EnglishBook src={english} alt="" />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  background-color: #eccece;
  width: 1205.81px;
  height: 437px;
  left: 80px;

  margin-left: 70px;
  margin-top: 50px;

  h1 {
    width: 328px;
    height: 96px;
    top: 1266px;
    left: 81px;
    margin-top: 3px;
    font: Gilroy;
    font-weight: 700;
    font-style: bold;

    font-size: 40px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #3752b4;
  }

  p {
    width: 520px;
    height: 120px;
    top: 1395px;
    left: 81px;
    margin-top: 29px;
    font: Poppins;
    font-weight: 400px;
    font-size: 20px;
    line-height: 100%;

    letter-spacing: 0%;
    color: #23212a;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;

    margin-top: 55px;

    .card {
      width: 230.11px;
      height: 50px;
      top: 1556px;
      left: 80px;
      gap: 26px;
    }
  }
`

const EnglishBook = styled.img`
  margin-top: 20px;
  width: 460px;
  height: 420px;
  margin-left: 107px;

  animation: ${spin} 3s ease-in-out infinite;
`
