import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export const Button = ({ children, variant = 'primary', large, disabled, onClick, ...props }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    if (disabled) return
    setIsClicked(!isClicked)
    if (onClick) onClick(e)
  }

  return (
    <StyledButton
      variant={variant}
      large={large}
      disabled={disabled}
      $clicked={!disabled && isClicked}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

const variantStyles = {
  primary: css`
    width: 164px;
    height: 42px;
    background: linear-gradient(90deg, #5f2cff, #3a5bff);
    color: white;

    ${({ disabled }) =>
      disabled &&
      css`
        background: #e0e0e0;
        color: #a0a0a0;
      `}

    ${({ $clicked, disabled }) =>
      $clicked &&
      !disabled &&
      css`
        background: #2b0c9a;
      `}
  `,

  success: css`
    width: 82px;
    height: 42px;
    background: #2ecc71;
    color: white;

    &:hover {
      background: #31cf38;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #e0e0e0;
        color: #a0a0a0;
      `}

    ${({ $clicked, disabled }) =>
      $clicked &&
      !disabled &&
      css`
        background: #27ae60;
      `}
  `,

  outline: css`
    width: 114px;
    height: 42px;
    background: transparent;
    border: 2px solid #3a10e5;
    color: #5f2cff;

    &:hover {
      background: #3a10e5;
      color: white;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: transparent;
        border: 2px solid #e0e0e0;
        color: #bdbdbd;
      `}

    ${({ $clicked, disabled }) =>
      $clicked &&
      !disabled &&
      css`
        background: #3007da;
        color: #ffffff;
      `}
  `,

  secondary: css`
    width: 100px;
    height: 42px;
    background: #ffffff;
    color: #3a10e5;
    border: 2px solid #3a10e5;

    &:hover {
      background: #3a10e5;
      color: white;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #ffffff;
        border: 2px solid #e0e0e0;
        color: #bdbdbd;
      `}

    ${({ $clicked, disabled }) =>
      $clicked &&
      !disabled &&
      css`
        background: #3007da;
        color: #ffffff;
      `}
  `,

  default: css`
    width: 115px;
    height: 42px;
    background: #ffffff;
    color: #3a10e5;
    border: 2px solid #3a10e5;

    &:hover {
      background: #3a10e5;
      color: white;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #ffffff;
        border: 2px solid #e0e0e0;
        color: #bdbdbd;
      `}
  `,

  unknown: css`
    width: 142px;
    height: 42px;
    background: #3a10e5;
    color: #ffffff;

    &:hover {
      background: #4e28e8;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #e0e0e0;
        color: #a0a0a0;
      `}
  `,

  rpaction: css`
    width: 158px;
    height: 42px;
    background: #ffffff;
    color: #3a10e5;
    border: 2px solid #3a10e5;

    &:hover {
      background: #3a10e5;
      color: white;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #ffffff;
        border: 2px solid #e0e0e0;
        color: #bdbdbd;
      `}
  `,

  loqout: css`
    width: 500px;
    height: 52px;
    background: #3a10e5;
    color: #ffffff;

    &:hover {
      background: #3a10e5e5;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: #e0e0e0;
        color: #a0a0a0;
      `}
  `,
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: ${({ large }) => (large ? '14px 40px' : '10px 20px')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => variantStyles[variant]}

  &:disabled {
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`
