import toast from 'react-hot-toast'
import { X } from 'lucide-react'
import styled from 'styled-components'
import { LineErrorToas } from '../../../assets/icons'

export const ErrorToas = (title, message) => {
  toast.custom((t) => (
    <Box>
      <img src={LineErrorToas} alt="" />
      <div>
        <StyledText>{title}</StyledText>
        <StyledP>{message}</StyledP>
      </div>
      <StyledX onClick={() => toast.dismiss(t.id)} />
    </Box>
  ))
}

const Box = styled.div`
  border: 1px solid #8cdb95;
  border-radius: 8px;
  background-color: #eafbe7;
  width: 311px;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const StyledCheckCircle = styled.img`
  color: green;
  width: 23px;
  height: 23px;
  top: 20px;
  border-radius: 50%;
  margin-left: 20px;
  margin-bottom: 23px;
  background-color: white;
`

const StyledText = styled.h3`
  width: 93px;
  height: 18px;
  top: 51px;
  left: 60px;
`

const StyledP = styled.p`
  width: 152px;
  height: 18px;
  top: 51px;
  left: 60px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
`

const StyledX = styled(X)`
  width: 24px;
  height: 24px;
  margin-left: 30px;
  margin-bottom: 50px;
`
