import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    width: 600px;
    height: 600px;
    display: flex;
    position: relative;
    top: -25rem;
    left: -17rem;
  }

  .Content {
    display: flex;
    position: relative;
    top: -56rem;
    left: -9rem;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 601px;
    height: 542px;
  }

  .Frame {
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
  }

  @media (max-width: 600px) {
    position: relative;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    img {
      width: 200px;
      height: 200px;
      display: flex;
      position: relative;
      top: -18rem;
      left: 1rem;
    }

    .Content {
      display: flex;
      position: relative;
      top: -18rem;
      left: -23rem;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      width: 318px;
      height: 542px;
    }

    .Frame {
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
    }
  }
`
