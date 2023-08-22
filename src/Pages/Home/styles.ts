import styled from "styled-components";
const mobileBreakpoint = "500px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
top  : 1rem; ;
left: -5rem;

  .Logo-Home {
        display: flex;
        position: relative;
        width: 400px;
        height: 400px;
        top: -40rem;
        left: 30rem;
        padding: 0;
    }

.Math {
    gap: 32px;
    h1 {
        width: 269px;
        height: 23px;
        font-family: Museo Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #FFFFFF;
    }
    h4 {
        width: 527px;
        height: 152px;
        font-family: Museo Sans;
        font-size: 64px;
        font-weight: 600;
        line-height: 76px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
    p {
        width: 527px;
        height: 120px;
        font-family: Museo Sans;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
}
.Confirm{
    width: 407.55px;
    height: 334.19px;
    .ContainerButton {
        display: flex;
    position: relative;
        button {
      width: 223px;
    height: 50px;
    padding: 6px 0px 8px 29px;
border-radius: 100px;
gap: 10px;
background: #641978;
box-shadow: 0px 10px 100px 0px #00000040;
}
.confirmP {
    width: 210px;
height: 34px;
font-family: Museo Sans;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
}
    }
} 

@media (max-width: ${mobileBreakpoint}) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
top  : 1rem; 
left: -5rem;
    .Logo-Home {
        display: flex;
    position: relative;
    width: 230px;
    height: 230px;
    top: -52rem;
    left: 5rem;
    padding: 0;
    }

.Math {
    gap: 32px;
    h1 {
        width: 269px;
        height: 23px;
        font-family: Museo Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #FFFFFF;
        position: relative;
    display: flex;
    top: 6.5rem;
    left: 5.5rem;
    }
    h4 {
        width: 226px;
    height: 73px;
    font-family: Museo Sans;
    font-size: 33px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    position: relative;
    display: flex;
    top: 7rem;
    left: 6rem;
    }
    p {
        width: 272px;
    height: 85px;
    font-family: Museo Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    display: flex;
    position: relative;
    left: 5.5rem;
    top: 7rem;
    }
}
.Input {
    display: grid;
    position: relative;
    left: 5rem;
    top: 8rem;
}
.Confirm{
    width: 407.55px;
    height: 354.19px;
    
   
    .ContainerButton {
        display: flex;
    position: relative;
    left: 10.5rem;
    top: 8.5rem;
        button {
      width: 223px;
    height: 50px;
    padding: 6px 0px 8px 29px;
border-radius: 100px;
gap: 10px;
background: #641978;
box-shadow: 0px 10px 100px 0px #00000040;
}
.confirmP {
    width: 210px;
height: 34px;
font-family: Museo Sans;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
}
    }
} 

}
`