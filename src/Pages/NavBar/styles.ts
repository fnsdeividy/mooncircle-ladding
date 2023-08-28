import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #241929;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 10px;
  }
`

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  button {
    background: none;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    color: white;
    font-size: 16px;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    button {
      padding: 1.5px 1.5rem;
      font-size: 14px;
    }
  }
`

export const LogoImage = styled.img`
  display: flex;
  position: relative;
  left: -20rem;
  width: 80px;
  height: auto;
  width: 128px;
  height: 84px;
  @media (max-width: 768px) {
    width: 50px;
    height: 35px;
    display: flex;
    position: relative;
    left: 10rem;
    top: -2rem;
  }
`

export const MoonImage = styled.img`
  width: 40px;
  height: auto;
  display: flex;
  position: relative;
  left: 20rem;
  width: 128px;
  height: 84px;

  @media (max-width: 768px) {
    display: none;
  }
`
