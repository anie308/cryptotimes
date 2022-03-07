import React from 'react'
import styled from 'styled-components'
import LogoPic from '../assets/cryptologo.png'

const Container = styled.div`
padding: 20px 30px;
margin: 0;
background: #1D1D1D;


    @media screen and (max-width: 900px){
        padding: 15px;
        position: sticky;
        top: 0;
        z-index: 999;
    }
`
const LogoCon = styled.div`
display: flex;
align-items: center;
    
`
const Logo = styled.img`
    

    @media screen and (max-width: 900px){
        height: 30px;
    }
`
const LogoText= styled.div`
font-family: Klavika;
display: flex;
color: white;
font-size: 20px;
padding-left: 5px;
    
`
const Span = styled.div`
    color: #F8B133;
`


function Navbar() {
  return (
    <Container>
        <LogoCon>
            <Logo src={LogoPic}/>
            <LogoText>
                Cryptotimes
                <Span>tv.</Span>
            </LogoText>
        </LogoCon>
    </Container>
  )
}

export default Navbar