import React, { Component } from 'react'
import styled from 'styled-components'

import BilingualImg from '/src/assets/icons/images/bilingual.png'

export class LandingHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { scrolled: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50
    if (isScrolled !== this.state.scrolled) {
      this.setState({ scrolled: isScrolled })
    }
  }

  render() {
    return (
      <Header scrolled={this.state.scrolled}>
        <Logo src={BilingualImg} alt="logo" />
        <Nav>
         
        </Nav>
      </Header>
    )
  }
}


const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  background-color: ${({ scrolled }) => (scrolled ? '#ffffff' : '#FFD700')};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none')};
`

const Logo = styled.img`
 
  height: 48px;
`

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`
