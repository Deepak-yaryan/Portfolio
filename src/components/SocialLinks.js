import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"
// import { MdMailOutline } from 'react-icons/md'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={25}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/deepak-kumar-8b7b6223a',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={25}/>
                </>
            ),
            href: 'https://github.com/Deepak-yaryan',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={25}/>
                </>
            ),
            href: 'mailto:deepakyaryan898@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={25}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]
    return (
        <div className='lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between item-center md:w-36 w-32 md:h-12 h-9 px-0.5 md:px-3 ml-[-100px] md:hover:ml-[-10px]  hover:ml-[-3px] hover:rounded-md duration-300 bg-gradient-to-b from-gray-500 to-gray-800 ${style} border border-cyan-500`}>
                    <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank" rel="noreferrer">
                        {child}
                    </a>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks