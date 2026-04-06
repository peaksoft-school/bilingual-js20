
import styled from 'styled-components'

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

          
          <NavItem bold color="#4C4859" variant="results">
            {navText}
          </NavItem>

          
        </Nav>
      </Content>
    </HeaderWrapper>
  )
}


const HeaderWrapper = styled.div`
  width: 100%;
  
  background-color: #fff;
`

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px ;
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
  font-family: 'Inter', sans-serif; // 👈 новый шрифт
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`
