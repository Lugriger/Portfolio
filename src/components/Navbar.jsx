import { MdLightMode, MdDarkMode } from "react-icons/md";

import Hamburger from 'hamburger-react'
import { useEffect, useState } from 'react';




function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);


    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <>
            <nav className="fixed bg-bgCol top-0 left-0 w-full h-16 bg-Col shadow-sm shadow-txCol text-txCol flex justify-between items-center px-7 z-50 font-bebas text-3xl" id='navbar'> 
                <ul className='max-sm:hidden flex flex-row gap-2'>
                    <li ><button onClick={() => setDarkMode(!darkMode)} className="text-textCol hover:text-hoverTxt transition-all duration-500 cursor-pointer  px-2 hover:animate-pulse">{darkMode ? <MdLightMode size={24}/> : <MdDarkMode size={24}/>}</button></li>
                    <li className='hover:text-hoverTxt  hover:animate-pulse'><a href="#">Home</a></li>
                </ul>
                <ul className='flex flex-row gap-10 max-sm:hidden ' >
                    <li className="hover:text-hoverTxt hover:animate-pulse "><a href="#about">About</a></li>
                    <li className='hover:text-hoverTxt hover:animate-pulse'><a href="#skills">Skills</a></li>
                    <li className='hover:text-hoverTxt hover:animate-pulse '><a href="#projects">Projects</a></li>
                </ul>
                <ul className='max-sm:hidden '>
                    <li className='hover:text-hoverTxt hover:animate-pulse'><a href="#contact">Contact</a></li>
                </ul> 
                <div className='fixed right-2 top-2 sm:hidden transition-all duration-200 hover:hoverTxt  hover:animate-pulse'>
                    <Hamburger  toggled={isOpen} toggle={setIsOpen}/>

                </div>
                
                    {
                        isOpen && 
                        <ul className='flex  flex-col bg-bgCol backdrop-blur-lg w-80 min-h-screen fixed right-0 top-17 '>
                            <li className="text-right py-6 px-2" >
                                <button onClick={() => setDarkMode(!darkMode)} className="text-textCol pr-6 hover:text-hoverTxt transition-all duration-500 cursor-pointer  px-2 hover:animate-pulse">
                                     {darkMode ? <MdLightMode /> : <MdDarkMode />}
                                </button>
                            </li>
                    
                            <li className='text-right py-6 px-2 hover:bg-amber-400/20 hover:text-hoverTxt hover:animate-pulse active:text-amber-500 active:bg-amber-400/20 '>
                                <a href="#" onClick={() => setIsOpen(!isOpen)}>Home</a> 
                            </li>
                
                            <li className='text-right py-6 px-2 hover:bg-amber-400/20 hover:text-hoverTxt hover:animate-pulse active:text-amber-500 active:bg-amber-400/20 '>
                                <a href="#about" onClick={() => setIsOpen(!isOpen)}>About</a> 
                            </li>
                            <li className='text-right py-6 px-2 hover:bg-amber-400/20 hover:text-hoverTxt hover:animate-pulse active:text-amber-500 active:bg-amber-400/20 ' >
                                <a href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</a> 
                            </li>
                            <li className='text-right py-6 px-2 hover:bg-amber-400/20 hover:text-hoverTxt hover:animate-pulse active:text-amber-500 active:bg-amber-400/20 '>
                                <a href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</a> 
                            </li>
                            <li  className='text-right py-6 px-2 hover:bg-amber-400/20 hover:text-hoverTxt hover:animate-pulse active:text-amber-500 active:bg-amber-400/20 '>
                                <a href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</a> 
                            </li>
                        </ul>
                    
                    
                    }
                
            </nav>
        </>
    )
}

export default Navbar;