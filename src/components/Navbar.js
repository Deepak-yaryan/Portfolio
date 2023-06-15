import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdNightsStay, MdWbSunny } from 'react-icons/md'
import { Link } from 'react-scroll'

const Navbar = ({darkMode, setDarkMode}) => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "experience"
        },
        {
            id: 4,
            link: "portfolio"
        },
        {
            id: 5,
            link: "contact"
        },
    ];

    return (
        <header className='flex justify-between items-center w-full h-20 fixed z-10 px-4 dark:text-white dark:bg-gray-900 bg-white text-gray-900'>
            <div className='flex'>
                <h1 className='text-4xl ml-2'>PortFolio</h1>
                <div onClick={() => setDarkMode(!darkMode)} className='cursor-pointer ml-5 pt-2'>
                    { darkMode ? (<MdWbSunny size={30} />) : (<MdNightsStay size={30} />) }
                </div>
            </div>

            <ul className='md:flex hidden'>
                {links.map(({ id, link }) => (
                        <li key={id} className='px-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>


            <div onClick={() => setNav(!nav)} className='cursor-pointer fixed right-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav &&
                <ul className='z-10 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                            <li key={id} className='px-4 py-6 cursor-pointer capitalize text-4xl text-gray-500 hover:scale-105 duration-200'><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
                    ))}
                </ul>
            }

        </header>
    )
}

export default Navbar