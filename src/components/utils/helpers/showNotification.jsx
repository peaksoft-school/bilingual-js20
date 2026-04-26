import toast from 'react-hot-toast'
import { X, CheckCircle } from 'lucide-react'
import styled from 'styled-components'

const showNotification = ({ type = 'success', title, description, duration = 3000 }) => {
  toast.custom(
    (t) => (
      <Box $type={type}>
        {type === 'success' && <CheckCircle color="green" size={23} />}
        {type === 'error' && <ErrorBar />}
        <Content>
          <StyledText>{title}</StyledText>
          {description && <StyledP>{description}</StyledP>}
        </Content>
        <StyledX onClick={() => toast.dismiss(t.id)} />
      </Box>
    ),
    { duration }
  )
}

export default showNotification

const Box = styled.div`
  border-radius: 8px;
  width: 311px;
  min-height: 93px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  position: relative;
  background-color: ${({ $type }) => ($type === 'error' ? '#fff1f0' : '#f6ffed')};
  border: 1px solid ${({ $type }) => ($type === 'error' ? '#F6141466' : '#52c41a66')};
`

const ErrorBar = styled.div`
  width: 4px;
  height: 50px;
  background-color: #f61414;
  border-radius: 4px;
  flex-shrink: 0;
`

const Content = styled.div`
  flex: 1;
`

const StyledText = styled.h3`
  width: 93px;
  height: 18px;
  top: 51px;
  left: 60px;
  margin: 0;
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
  cursor: pointer;
`
