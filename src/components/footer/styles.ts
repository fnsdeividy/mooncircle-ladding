import { styled } from "styled-components";
const mobileBreakpoint = "600px";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column; 
    align-items: center; 
  }

  p {
    color: white;
  }
`;

export const FooterSection = styled.div`
  
  display: flex;
    align-items: center;
    flex-wrap: wrap;
  flex-direction: initial;
  @media (max-width: ${mobileBreakpoint}) {
    margin-bottom: 20px; 
  }
  .ContainerIMG {
    width: 104px;
height: 24px;
top: 232px;
left: 143px;
gap: 16px;
color: white;
     .img {
      width: 24px;
height: 24px;
padding: 1.5px;

     }
  }
  p{
    width: 370px;
    height: 31px;
  }

`;

export const FooterTitle = styled.h1`
  font-size: 18px;
  width: 370px;
    height: 31px;
gap: 14px;
  color: white;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
  color: white;
  text-decoration: none;
  width: 361px;
height: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterImage = styled.img`

  max-width: 100px;
  margin-top: 10px;
`;