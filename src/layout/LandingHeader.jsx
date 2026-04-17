import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BilingualIcon } from '../assets/icons'

export const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50

    setScrolled(isScrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeader scrolled={scrolled}>
      <StyledLogo src={BilingualIcon} alt="logo" />

      <StyledNav></StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header(({ scrolled }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '24px 80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 999,

  backgroundColor: scrolled ? '#ffffff' : '#FFD700',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
}))

const StyledLogo = styled.img({
  height: '48px',
})

const StyledNav = styled.nav({
  display: 'flex',
  gap: '15px',
})
