// import React from 'react'
// import {useState, useEffect} from 'react'
// import styled from 'styled-components'
// import {FaArrowUp} from 'react-icons/fa'
 
// const Container = styled.div`
// position: fixed;
// bottom: 260px;
// right: 20px;



// `

// const Button = styled.button`
// outline: none;
// border: none;
// border-radius: 50%;
// height: 40px;
// width: 40px;
// background: #F8B133;

// .icon{
//     height: 30px;
//     width: 20px;
//     color: #ffff;
// }
// `

// function ScrollToTop() {

// const [isVisible, setIsVisible] = useState(false)

// const ToggleVisibility = () =>{
//     if(window.pageYOffset > 300){
//         setIsVisible(true);
//     }else {
//         setIsVisible(false);
//     }
// }

//  const scrollToTop = () =>{
//      window.scrollTo({
//          top: 0,
//          behavior: 'smooth',
//      });
//  }

//  useEffect(() =>{
//      window.addEventListener('scroll', ToggleVisibility);
//      return () =>{
//          window.removeEventListener('scroll', ToggleVisibility)
//      }
//  }, []);

//   return (
//     <Container>
//         <Button type='button' onClick={scrollToTop}>
//             <FaArrowUp aria-hidden='true' className='icon'/>
//         </Button>
//     </Container>
//   )
// }

// export default ScrollToTop