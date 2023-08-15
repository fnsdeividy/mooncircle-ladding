import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 8vh;
`;

export const HeaderComponent = styled.header`
  
  color: white;
 
  text-align: center;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  
  .Moon {
    max-width: 128px;
    max-height: 84px;
   

  }

  .Logo {
    max-width: 109px;
    max-height: 78px;

  }
`;

export const NavLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  
  margin: 0 ;

  .Home, .saiba-mais, .parcerias {
    color: white;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    
   
  }
`;

export const MainContent = styled.main``;

export const Footer = styled.footer`
  
  color: white;
  text-align: center;
  
  
`;