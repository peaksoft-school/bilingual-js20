import toast from 'react-hot-toast'
import { CheckCircle, X } from 'lucide-react'
import { Box, Button, Typography, keyframes, styled } from '@mui/material'

export const showNotification = ({ type = 'success', title, description, duration = 3000 }) => {
  toast.custom(
    (t) => (
      <StyledBox $type={type} $visible={t.visible}>
        {type === 'success' ? <CheckCircle color="#52c41a" size={22} /> : <StyledErrorBar />}

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          {description && <StyledDescription>{description}</StyledDescription>}
        </StyledContent>

        <StyledCloseButton onClick={() => toast.dismiss(t.id)}>
          <X size={16} />
        </StyledCloseButton>

        <StyledProgressBar $type={type} $duration={duration} />
      </StyledBox>
    ),
    { duration }
  )
}

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`

const slideOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(40px); }
`

const progressShrink = keyframes`
  from { width: 100%; }
  to   { width: 0%; }
`

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$type' && prop !== '$visible',
})(({ $type, $visible }) => ({
  borderRadius: '10px',
  width: '320px',
  minHeight: '72px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  padding: '14px 16px',
  position: 'relative',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  backgroundColor: $type === 'error' ? '#fff1f0' : '#f6ffed',
  border: `1px solid ${$type === 'error' ? '#ffa39e' : '#b7eb8f'}`,
  animation: `${$visible ? slideIn : slideOut} 0.25s ease forwards`,
}))

const StyledErrorBar = styled(Box)({
  width: '4px',
  height: '44px',
  backgroundColor: '#f61414',
  borderRadius: '4px',
})

const StyledContent = styled(Box)({
  flex: 1,
})

const StyledTitle = styled(Typography)({
  fontSize: '15px',
  fontWeight: 500,
  color: '#1a1a1a',
})

const StyledDescription = styled(Typography)({
  fontSize: '13px',
  color: '#555',
})

const StyledCloseButton = styled(Button)({
  position: 'absolute',
  top: '8px',
  right: '8px',
  minWidth: 'auto',
  padding: '4px',
})

const StyledProgressBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$type' && prop !== '$duration',
})(({ $type, $duration }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '3px',
  width: '100%',
  background: $type === 'error' ? '#f61414' : '#52c41a',
  animation: `${progressShrink} ${$duration}ms linear forwards`,
}))
