import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderComponent = styled.header`
  background-color: #241929;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
`;

export const MainContent = styled.main``;

export const Footer = styled.footer`
  background-color: #241929;
  color: white;
  text-align: center;
  padding: 10px 0;
  width: 100%;
`;