import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
// import Contact from './Contact';



const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    const [isOpen, setisOpen] = React.useState(false);
    
    function handleClick() {
        setisOpen(!isOpen);
    }

    
    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      const handleThemeChange = () => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
      };
      window.addEventListener('scroll', scrollHandler);
      const observer = new MutationObserver(handleThemeChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => {
        window.removeEventListener('scroll', scrollHandler);
        observer.disconnect();
    };
},[]);

      
      
      
    return (
        <nav  className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
            top
              ? "bg-transparent"
              : isDarkMode
              ? "bg-gray-800 shadow-gray-900"
              : "bg-[#f9eff] shadow-lg"
          }`} >
            <div className="flex flex-row py-2">
                <div className="flex flex-row md:px-12 md:ml-12 md:mr-0  items-center text-center font-semibold w-full lg:w-full">
                    <HashLink smooth to="/#hero"><h1 className="font-bold text-2xl font-mono text-[#b54a73]">Hilina Mulugeta</h1></HashLink>
                    
                </div>
                <div className="group flex flex-col items-center lg:justify-center w-full lg:w-full">
                    <button className="p-2 rounded-lg lg:hidden text-[#eda2bf]" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-5 lg:inline-block p-5'>
                        <NavLinks />
                        {/* <ThemeToggler /> */}
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-5'>
                            <NavLinks />
                            {/* <ThemeToggler /> */}
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    );
};
    



export default NavBar;
