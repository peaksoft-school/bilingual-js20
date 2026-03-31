import React from 'react'
import styled from 'styled-components'
import { MyButton } from '../components/ui/Button'
import BilingualImg from '../assets/icons/images/bilingual.png'


export const Header = ({ role = 'client' }) => {
 
  const navText = role === 'admin' ? 'SUBMITTED RESULTS' : 'MY RESULTS'

  return (
    <HeaderWrapper>
      <Content>
        <Logo src={BilingualImg} alt="logo" />

        <Nav>
          <NavItem bold color="#0909f6">
            TESTS
          </NavItem>

          
          <NavItem color="#4C4859">{navText}</NavItem>

          <MyButton variant="outline">LOG OUT</MyButton>
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
  gap: 32px;
`

const NavItem = styled.span`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ color }) => color};
  cursor: pointer;
  line-height: 100%;
  text-transform: uppercase;
`
