import { styled } from 'styled-components'
const mobileBreakpoint = '500px'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  color: white;
  p {
    color: white;
  }

  .FooterSectionOne {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ContainerIMG {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .FooterTitleTwo,
  .FooterTitleTree,
  .FooterTitleFour {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .FooterLink {
    color: white;
    text-decoration: none;
    display: flex;
    margin-bottom: 5px;
  }

  .email,
  .number {
    margin-top: 10px;
  }

  .FooterImage {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    top: 67rem;
    left: 2rem;
    p {
      color: white;
    }

    .FooterSectionOne {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: initial;
      position: relative;
      left: 1rem;

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
      p {
        width: 370px;
        height: 31px;
      }
    }

    .FooterSectionTwo {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: initial;
      position: relative;
      left: -22rem;
      top: 13.5rem;
    }
    .FooterTitleTwo {
      color: white;
    }

    .FooterSectionTree {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 1rem;
      flex-direction: initial;
      position: relative;
      left: -44.5rem;
      top: 25.5rem;

      .email {
        display: flex;
        position: relative;
        top: -2rem;
      }

      .number {
        display: flex;
        position: relative;
        top: -4.5rem;
      }
    }

    .FooterTitleTree {
      color: white;
    }

    .FooterSectionFour {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 1rem;
      flex-direction: initial;
      position: relative;
      left: -52.5rem;
      top: 30.5rem;
    }
    .FooterTitleFour {
      color: white;
      font-size: 19px;
      width: 238px;
      display: flex;
      position: relative;
      top: -6rem;
      left: 17.5rem;
    }
    .FooterImage {
      display: grid;
      grid-gap: 5px;
      position: relative;
      top: -6rem;
      left: 18rem;
    }
  }
`
