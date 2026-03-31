import React from 'react'
import styled from 'styled-components'
import { MyButton } from '../components/ui/Button'
import BilingualImg from '../assets/icons/images/bilingual.png'

export const LandingHeader = () => {
  return (
    <HeaderWrapper>
      <Content>
        <Logo src={BilingualImg} alt="logo" />

        <Nav>
          <MyButton variant="outline">TO COME IN</MyButton>
          <MyButton variant="filled">REGISTER</MyButton>
        </Nav>
      </Content>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
`

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`

const Logo = styled.img`
  width: 174px;
  height: 42px;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
