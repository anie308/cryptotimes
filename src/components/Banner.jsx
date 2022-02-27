import React from 'react'
import styled from 'styled-components'
import Phone from '../assets/PHONE.png'

const Container = styled.div` 
background: #1D1D1D;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0;


  @media screen and (max-width:900px){
   padding: 10px;
  
}

`
const Head = styled.h1`
margin: 0;
font-size: 25px;
color:  #F8B133;
font-weight: 400;

@media screen and (max-width:900px){
   font-size: 17px;
}
`
const Sub = styled.h2`
margin: 0;
font-size: 60px;
line-height: 70.31px;
text-align: center;
color:#FFFFFF;

br{
  @media screen and (max-width:900px){
   display: none;
  
}
}

@media screen and (max-width:900px){
   font-size: 30px;
   line-height: 34px;
}
`
const Small = styled.p`
margin: 0;
font-size: 30px;
line-height: 35.8px;
text-align: center;
color:#FFFFFF;
text-align: center;

span{
  color: #F8B133;
  font-weight: 500;
}
br{
  @media screen and (max-width:900px){
   display: none;
  
}
}

@media screen and (max-width:900px){
   font-size: 20px;
   line-height: 30px;
   margin-top: 10px;
}
`

const ImageCon = styled.div` 
margin-top: 20px;

`
const Img = styled.img` 

@media screen and (max-width:900px){
width: 250px;
  
}
`

const ImageTxtCon = styled.div` 
background: #1D1D1D;
position: relative;
z-index: 200;
margin-top: -120px;
/* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); */
padding: 0 20px;
width: auto;


@media screen and (max-width:900px){
margin-top: -60px;
padding:0  10px;
  
}

`
const ImageFTxt = styled.div` 
justify-content: center;
text-align: center;
font-size: 50px;
line-height: 59px;
display: flex;
align-items: center;
letter-spacing: -0.015em;
color: #ffff;
margin: 20px 0;

span{
  color: #F8B133;
  padding: 0 10px;
  font-weight: 500;

  @media screen and (max-width:900px){
padding: 0 5px;
  
}
}


@media screen and (max-width:900px){
font-size: 28px;
line-height: 30px;
  
}
`
const ImageSTxt = styled.div` 
justify-content: center;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #ffff;
margin: 10px 0;

br{
  @media screen and (max-width:900px){
display: none;
  
}
}


@media screen and (max-width:900px){
font-size: 25px;
line-height: 30px;
  
}
`

function Banner() {
  return (
    <Container>
            <Head>NEWS HEADLINE </Head>
            <Sub>View the world of Blockchain <br/>from the Crypto lens</Sub>
            <Small>We bring you tonnes on happenings around the <br/> world of Blockchain here on <span>Cryptotimes TV.</span></Small>

            <ImageCon>
              <Img src={Phone}/>
            </ImageCon>
            <ImageTxtCon>
          <ImageFTxt>  From the  <span> Crypto</span>   lens</ImageFTxt>
          <ImageSTxt>  Stay tuned on Cryptotimes TV for updates on the <br/>cryptocurrency market, and blockchain economy <br/> from our finest of programs.</ImageSTxt>
            </ImageTxtCon>
           
    </Container>
  )
}

export default Banner