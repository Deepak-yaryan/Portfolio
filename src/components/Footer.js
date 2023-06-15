import React from 'react'
import { SiGmail } from 'react-icons/si'
import { MdCall } from 'react-icons/md'

const Footer = () => {
    return (
    <>
        <div className='flex md:flex-row flex-col justify-around items-center pt-6 pb-2'>

            <a className='flex' href='https://www.gmail.com'>
                <SiGmail size={30} /> <span className='pl-4'>deepakyaryan898@gmail.com</span>
            </a>
            <p className='flex cursor-pointer'>
                <MdCall size={30} /> <span className='pl-4'>+91 8447891511</span>
            </p>
        </div >
        <div  className='text-center pb-2'>
        Designed & Built by Deepak Kumar © 2023
        </div>
    </>
    )
}

export default Footer