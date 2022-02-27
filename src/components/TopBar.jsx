import React from 'react'
import styled from 'styled-components'
import  {FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

const Container = styled.div`
background: #ffff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
/* position: sticky;
top: 0;
z-index: 999; */
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);



@media screen and (max-width:900px){
    padding: 10px;
    flex-direction: column;
    justify-content: center;
}
`
const Div1 = styled.div`
display: flex;
`
const SocialLink = styled.div`

    .icon{
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
}
`
const Div2 = styled.div`
display: flex;
align-items: center;
font-size: 15px;


@media screen and (max-width:900px){
    margin-top: 10px;
    flex-direction: column;
    font-size: 16px;
}
`

const Tet = styled.p`
margin: 0;
    margin-right: 10px;
    font-family: poppins;

    @media screen and (max-width:900px){
   margin: 0;
}
`

function TopBar() {
  return (
    <Container>
<Div1>
<SocialLink>
<FaFacebook className='icon'/>
</SocialLink> 

<SocialLink>
<FaTwitter  className='icon'/>
</SocialLink> 
<SocialLink>
<FaInstagramSquare className='icon'/> 
</SocialLink>  
<SocialLink>
<FaLinkedin className='icon'/> 
</SocialLink>  
</Div1>
<Div2>
<Tet>Contact Us: +234 (0) 907 000 0000</Tet>
<Tet>Mail Us: pr@mycryptotimes.tv</Tet>
</Div2>

    </Container>
  )
}

export default TopBar