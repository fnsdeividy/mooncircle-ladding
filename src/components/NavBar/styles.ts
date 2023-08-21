import styled from 'styled-components';

export const AppContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  
`;

export const NavMenu = styled.nav` 
  display: flex;
  align-items: center;
  flex-wrap: wrap;

.Home, .saibamais, .parcerias{
  color: white;
  text-decoration: none;
} 
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const NavLink = styled.div`
  color: white;
  text-decoration: none;
`;

export const ImageLogo = styled.img`
  max-width: 100px;
`;


