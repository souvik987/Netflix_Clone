import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

  return (
    <div className={`fixed top-0 flex justify-between w-full h-[65px] z-1 ease-in transition-all duration-[0.5s] ${show && "bg-black"}`}>
      <img 
      className='w-[110px] object-contain fixed left-4'
      src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png" 
      alt="Netflix Logo" />

      <img
      className='w-[35px] object-contain fixed right-5 pt-2'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
      alt="Netflix Logo" />
    </div>
  )
}

export default Navbar
