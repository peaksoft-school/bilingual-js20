import { useState } from 'react'
import styled from 'styled-components'

const data = [
  {
    question: 'What is Bilingual?',
    answer: 'Bilingual is a platform for testing your English skills.',
  },
  {
    question: 'How can I show what I am typing during the test?',
    answer: 'Use only one keyboard and avoid switching devices.',
  },
  {
    question: 'Why should I take the Bilingual English Test?',
    answer: 'It helps evaluate your real English level.',
  },
  {
    question: 'How can I make sure my microphone picks up my voice clearly? ',
    answer: 'Microphone should be properly connected and test sound level before starting.'
  },
  {
    question: 'How can I allow a test to record my computers screen? ',
    answer: 'It helps evaluate your real English level.',
  },
]

export const LandingFooterFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <Wrapper>
      <Title>FAQ:</Title>

      {data.map((item, index) => (
        <Item key={index}>
          <Question onClick={() => toggle(index)}>
            {item.question}
            <Plus>{activeIndex === index ? '×' : '+'}</Plus>
          </Question>

          {activeIndex === index && <Answer>{item.answer}</Answer>}
        </Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #262626;
  color: white;
  padding: 30px;
  max-height: 79vh;
  overflow: hidden;
`

const Title = styled.h2`
  margin-bottom: 30px;
`

const Item = styled.div`
  border-bottom: 1px solid #2a2a2a;
  padding: 20px 0;
`

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
`

const Plus = styled.span`
  font-size: 20px;
`

const Answer = styled.p`
  margin-top: 10px;
  color: #aaa;
`