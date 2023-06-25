import React, { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion';
import "./cursorStyle.css"

const CustomCursor = () => {

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }
    
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove)
  //   }
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 30,
  //     y: mousePosition.y - 30

  //   }
  // }

  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    });
  }, [])
 
  return (
    <div 
      className='app-cursor'
      ref={cursorRef}
    />
  )
}

export default CustomCursor
