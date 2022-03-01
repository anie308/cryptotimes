import React from 'react'
import styled from 'styled-components'
import People from '../assets/people.png'


const Container = styled.div`
padding: 20px 40px;

@media screen and (max-width:900px){
    padding: 20px;

}
`
const CtaCon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px){
   
    flex-direction: column;
    justify-content: center;
}
`
const CtaMessage = styled.div` `
const Main = styled.div`
font-size: 38px;
line-height: 49px;
letter-spacing: -0.015em;
font-family: poppins;
font-weight: 500;

br{
  @media screen and (max-width:900px){
   display: none;
  
}
}
@media screen and (max-width:900px){
   
font-size:28px ;
line-height: 40px;
}
`


const Follow = styled.div`
font-size: 30px;

br{
  @media screen and (max-width:900px){
   display: none;
  
}
}
@media screen and (max-width:900px){
   
   font-size:18px ;
   line-height: 20px;
   }

`
const CtaImage = styled.div`


@media screen and (max-width:900px){
  margin-top: 30px;
}
`
const Image = styled.img` 
width: 500px;

@media screen and (max-width:1200px){
  width: 400px;
}
@media screen and (max-width:900px){
  width: 300px;
}
`

const CtaForm = styled.form`
display: flex;
align-items: center;
padding: 10px 0;
margin-top: 10px;

@media screen and (max-width:900px){
  flex-direction: column;
}
`
const Input = styled.input`
width: 400px;
height: 50px;
  background: #FFFFFF;
border: 1px solid #C9C9C9;
box-sizing: border-box;
border-radius: 5px;
margin-right: 10px;
padding: 0 10px;
font-size: 16px;
outline: none;


  &::placeholder{
    color: #D8D8D8;
    font-family: Roboto;
  font-style: normal;
  font-weight: normal;

@media screen and (max-width:900px){
  width: 100%;
  height: 40px;
  font-size: 16px;
}

  }

  @media screen and (max-width:900px){
    margin: 0;
  width: 100%;
  height: 40px;
}
`
const Submit= styled.button`
  width: 124px;
height: 50px;
font-size: 23px;
border-radius: 5px;
outline: none;
border: none;
cursor: pointer;
background: #1D1D1D;
color: #F8B133;

    @media screen and (max-width:900px){
      height: 40px;
      margin-top: 10px;
  width: 100%;
}

`


function Cta() {
  return (
    <Container>
        
        <CtaCon>
            <CtaMessage>
                <Main>With over thousands of <br/> subscribers and crypto <br/> influencers</Main>
                <Follow>Join our community of blockchain enthusiats and <br/> crypto traders to access the global market</Follow>
                <CtaForm>
                    <Input type='email' placeholder='Email address...' required/>
                    <Submit type='submit'>Join</Submit>
                </CtaForm>
            </CtaMessage>
            <CtaImage>
              <Image src={People}/>
            </CtaImage >

        </CtaCon>
    </Container>
  )
}

export default Cta