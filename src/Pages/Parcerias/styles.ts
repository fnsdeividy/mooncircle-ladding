import styled from "styled-components";

const mobileBreakpoint = "600px";

export const ContainerParcerias = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  .ContainerText{
    display: flex;
    position: relative;
  }

  .TextParceiros {
   display: flex;
   position: relative;
   top: -70rem;
   left: 100rem;
    width: 17pc;
    font-family: Museo Sans;
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
  .TextP{
    width: 390px;
    height: 24px;
    font-family: Museo Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    position: relative;
    top: -70rem;
    left: 97.5rem
  }
  .ContainerImages {
    display: flex;
    left: 60rem;
    top: -59rem;
    position: relative;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
    
  }
  .Image1 {
    width: 200px;
height: 200px;
  }
  .Image2 {
    width: 200px;
height: 200px;
  }
  .Image3 {
    width: 200px;
height: 200px;
  }
  .Image4 {
    width: 200px;
height: 200px;
  }

  .ContainerTexts {
    display: flex;
   position: relative;
   top: -10rem;
   left: -46rem;

    h1 {
      width: 481px;
    height: 77px;
    font-family: Museo Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: -36rem;
    left: 78rem;
    }

    p {
      width: 431px;
    height: 80px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: -30.5rem;
    left: 48rem;
    }
  }
  .ContainerInput {
    display: flex;
   position: relative;
   top: -10rem;
    left: -55rem;
    gap: 16px;

    .PrimeiroInput {
      display: flex;
      position: relative;
      top: -24rem;
      left: 30rem;

    }
    .SegundoInput {
      display: flex;
    position: relative;
    top: -20rem;
    left: 12.8rem;
    }
    button {
      width: 223px;
    height: 50px;
    padding: 8px 0px 8px 43px;
border-radius: 100px;
gap: 10px;
background: #641978;
box-shadow: 0px 10px 100px 0px #00000040;

p {
  width: 154px;
height: 32px;
font-family: Museo Sans;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;

}

.ImageGrafismo {
  width: 470px;
    height: 470px;
    display: flex;
    position: relative;
    top: -25rem;
    left: -38rem;
  }
    }
    .ButtonForm {
      display: flex;
      position: relative;
      left: -3rem;
    top: -16rem;

  }

  
 .containerprojetos {
  .Parceiroh3 {
    width: 424px;
    height: 2px;
    font-family: Museo Sans;
    font-size: 40px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: 6rem;
    left: -38rem;

  }

  .email {
    width: 34rem;
    height: 38px;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: 10rem;
    left: -42rem;


  }
 }
}
@media (max-width: ${mobileBreakpoint}) {
  .ContainerText{
    display: flex;
    position: relative;
  }

  .TextParceiros {
    display: flex;
    position: relative;
    top: -69rem;
    left: 82.7rem;
    width: 21pc;
    font-family: Museo Sans;
    font-size: 39px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
  .TextP{
    width: 313px;
    height: 24px;
    font-family: Museo Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    position: relative;
    top: -65.5rem;
    left: 61.5rem;
  }
  .ContainerImages {
    display: flex;
    left: 41.5rem;
    top: -59rem;
    position: relative;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
    
  }
  .Image1 {
    width: 75px;
height: 75px;
  }
  .Image2 {
    width: 75px;
height: 75px;
  }
  .Image3 {
    width: 75px;
height: 75px;
  }
  .Image4 {
    width: 75px;
height: 75px;
  }

  .ContainerTexts {
    display: flex;
   position: relative;
   top: -10rem;
   left: -46rem;

    h1 {
      width: 254px;
    height: 77px;
    font-family: Museo Sans;
    font-size: 26px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0.03em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: -43rem;
    left: 71rem;


    }

    p {
      width: 400px;
    height: 80px;
    font-family: Inter;
    font-size: 23px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: -31.5rem;
    left: 50.5rem;
    }
  }
  .ContainerInput {
    display: flex;
   position: relative;
   top: -10rem;
    left: -55rem;
    gap: 16px;

    .PrimeiroInput {
      display: flex;
      position: relative;
      top: -17rem;
    left: 37.5rem;

    }
    .SegundoInput {
      display: flex;
    position: relative;
    top: -12rem;
    left: 20.3rem;

    }
    button {
      width: 223px;
    height: 50px;
    padding: 8px 0px 8px 43px;
border-radius: 100px;
gap: 10px;
background: #641978;
box-shadow: 0px 10px 100px 0px #00000040;

p {
  width: 154px;
height: 32px;
font-family: Museo Sans;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;

}

.ImageGrafismo {
  display: none;
  }
    }
    .ButtonForm {
      display: flex;
      position: relative;
      left: 3.9rem;
    top: -5rem;

  }

  
 .containerprojetos {
  .Parceiroh3 {
    width: 424px;
    height: 2px;
    font-family: Museo Sans;
    font-size: 40px;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: -1rem;
    left: -12rem;


  }

  .email {
    width: 34rem;
    height: 38px;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    position: relative;
    top: 7rem;
    left: -12rem;


  }
 }
  }}



`