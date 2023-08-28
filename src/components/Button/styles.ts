import { styled } from 'styled-components'
const mobileBreakpoint = '500px'

export const ButtonComponent = styled.button`
  width: 223px;
  height: 50px;
  padding: 8px 0px 8px 24px;
  border-radius: 100px;
  gap: 10px;
  background: #641978;

  p {
    width: 175px;
    height: 32px;
    font-family: Museo Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 223px;
    height: 50px;
    padding: 8px 0px 8px 24px;
    border-radius: 100px;
    gap: 10px;
    background: #641978;

    p {
      width: 178px;
      height: 32px;
      font-family: Museo Sans;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
  }
`
