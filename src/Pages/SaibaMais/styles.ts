import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 92vh; 
  display: flex;
  position: relative;

  img {
    width: 750px;
    height: 750px;
   display: flex;
   position: relative;
  top: -30rem;
  }
`;



export const Content = styled.div`
  display: flex;
  position: relative;
  top: -25rem;
  left: -27rem;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 601px;
height: 542px;

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
