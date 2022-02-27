import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
padding: 20px 40px;
`
const CtaCon = styled.div` `
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


function Cta() {
  return (
    <Container>
        
        <CtaCon>
            <CtaMessage>
                <Main>With over thousands of <br/> subscribers and crypto <br/> influencers</Main>
                <Follow>Join our community of blockchain enthusiats and <br/> crypto traders to access the global market</Follow>
            </CtaMessage>
            <CtaImage></CtaImage>

        </CtaCon>
    </Container>
  )
}

export default Cta