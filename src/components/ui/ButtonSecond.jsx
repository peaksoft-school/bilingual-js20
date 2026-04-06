
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ToBeginPNG from '../../assets/to-begin.png' 

export const ButtonSecond = ({
  children,
  variant = 'begin',
  large,
  disabled,
  onClick,
  ...props
}) => (
  <StyledButton
    variantType={variant}
    large={large}
    disabled={disabled}
    onClick={onClick}
    disableRipple
    {...props}
  >
    {children}
  </StyledButton>
)

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variantType' && prop !== 'large',
})(({ variantType, large, disabled }) => ({
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 14,
  padding: large ? '14px 40px' : '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',

  transformOrigin: 'center',
  transition: 'all 0.1s ease',

  '&:active': {
    transform: disabled ? 'none' : 'scale(0.96)',
  },

  ...(variantStyles[variantType] || variantStyles['filled'])(disabled),
}))

const variantStyles = {
  begin: (disabled) => ({
    width: 164,
    height: 42,
    backgroundColor: disabled ? '#e0e0e0' : 'transparent',
    backgroundImage: disabled ? 'none' : `url(${ToBeginPNG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: disabled ? '#a0a0a0' : '#fff',

    borderRadius: 999,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    position: 'relative',

    boxShadow: disabled ? 'none' : '0px 6px 0px #8e2e3c, 0px 10px 15px rgba(0,0,0,0.15)',

    '&:hover': {
      backgroundColor: disabled ? '#e0e0e0' : 'transparent',
      backgroundImage: disabled ? 'none' : `url(${ToBeginPNG})`,
    },

    '&:active': {
      transform: disabled ? 'none' : 'translateY(4px) scale(0.95, 0.9)',
      boxShadow: disabled ? 'none' : '0px 2px 0px #7a2835',
    },
  }),

  filled: (disabled) => ({
    width: 120,
    height: 42,
    background: disabled ? '#e0e0e0' : '#ffffff',
    color: disabled ? '#a0a0a0' : '#4C4C4C',
    boxShadow: disabled ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    '&:hover': {
      background: disabled ? '#e3d7d7' : '#e1e1e1',
    },
    '&:active': {
      transform: disabled ? 'none' : 'scale(0.97)',
      boxShadow: disabled ? 'none' : '0px 2px 3px rgba(0, 0, 0, 0.08)',
    },
  }),

  unknown: (disabled) => ({
    width: 142,
    height: 42,
    background: disabled ? '#e0e0e0' : '#3a10e5',
    color: disabled ? '#a0a0a0' : '#ffffff',
    '&:hover': {
      background: disabled ? '#e0e0e0' : '#4e28e8',
    },
  }),
}
