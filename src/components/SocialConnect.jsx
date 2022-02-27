import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div` 
padding: 70px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`
const Main = styled.div`
/* font-family: 'klavika-bold'; */
color: #F8B133;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
letter-spacing: -0.015em;
font-weight: 500;

@media screen and (max-width:900px){
    font-size: 18px;
    line-height: 15px;

}
`
const Sub = styled.div`
font-size: 50px;
line-height: 59px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #1D1D1D;
font-weight: 500;



@media screen and (max-width:900px){
    font-size: 28px;
    line-height: 35px;

}
 `
const Catchy = styled.div`
margin-top: 30px;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #1D1D1B;



br{
  @media screen and (max-width:900px){
   display: none;
  
}
}

@media screen and (max-width:900px){
    margin-top: 10px;
 font-size: 20px;
 line-height: 20px;
}
`

const SocialCon = styled.div` 
padding: 30px 0;
display: flex;
align-items: center;
justify-content: space-between;

`
const SocialL1 = styled(Link)` 
font-family: Klavika;
font-size: 35px;
color: #000;
text-decoration: none;
margin-right: 30px;
`
const SocialL2 = styled(Link)` 
font-family: Billabong;
font-size: 35px;
color: #000;
text-decoration: none;
margin-right: 30px;

`
const SocialL3 = styled(Link)`
font-family: Pico Black;
font-size: 35px;
color: #000;
text-decoration: none;
margin-right: 30px;

`
const SocialL4 = styled(Link)` 
font-family: Kenyan Coffee;
font-size: 35px;
color: #000;
text-decoration: none;
`

function SocialConnect() {
  return (
    <Container>
        <Main>GET IN TOUCH WITH US</Main>
        <Sub>Hey! Follow us on Social Media</Sub>
        <Catchy>Stay updated with content around the world of <br/> Blockchain economy by following us on social media </Catchy>
        <SocialCon>
            <SocialL1 to='#'>facebook</SocialL1>
            <SocialL2 to='#'>Instagram</SocialL2>
            <SocialL3 to='#'>twitter</SocialL3>
            <SocialL4 to='#'>YoutubeTv</SocialL4>
        </SocialCon>
    </Container>
  )
}

export default SocialConnect