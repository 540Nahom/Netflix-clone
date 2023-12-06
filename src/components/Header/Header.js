import React, { useEffect, useState } from 'react'

// Resource
import Netflix_logo from "../../Resources/img/Netflix.png";
import avator from "../../Resources/img/avatar.png";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={`header ${show && "slide_balck"}`}>
      <a href='/'>
      <img 
        className='Netflix_logo'
        src={Netflix_logo}
        alt='Netflix logo'
          />
      </a>
      <img 
        className='avator'
        src={avator}
        alt='avator'
          />
    </header>
  )
}

export default Header;