import React from 'react'
import Bit from '../assets/bitcoin.png'
import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
  min-height: 100vh;
background: url(${Bit}) no-repeat;
background-position: -82% 42%;

`

function CtaWrapper({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default CtaWrapper