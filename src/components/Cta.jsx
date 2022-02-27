import React from 'react'
import styled from 'styled-components'
import People from '../assets/people.png'


const Container = styled.div`
padding: 20px 40px;

@media screen and (max-width:900px){
    padding: 10px;

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
font-size: 40px;
line-height: 49px;
letter-spacing: -0.015em;
font-family: poppins;
font-weight: 500;
`


const Follow = styled.div`
font-size: 30px;

`
const CtaImage = styled.div` `
const Image = styled.img` 
width: 500px;

@media screen and (max-width:900px){
  width: 300px;
}`


function Cta() {
  return (
    <Container>
        
        <CtaCon>
            <CtaMessage>
                <Main>With over thousands of <br/> subscribers and crypto <br/> influencers</Main>
                <Follow>Join our community of blockchain enthusiats and <br/> crypto traders to access the global market</Follow>
            </CtaMessage>
            <CtaImage>
              <Image src={People}/>
            </CtaImage >

        </CtaCon>
    </Container>
  )
}

export default Cta