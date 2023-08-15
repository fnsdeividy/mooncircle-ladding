import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(-150deg, #241929 65%, #054F77);
  min-height: 92vh; 
`;

export const MoonCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0rem;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
  
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  box-sizing: border-box;
`;

export const Frame = styled.div`
    width: 100%;
  max-width: 800px;
  padding: 0px;
 
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  

  margin-right: -47rem;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

`
