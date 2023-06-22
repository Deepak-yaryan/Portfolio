import React from 'react'
import ionotes from '../assets/ionotes.JPG'
import newspanda from '../assets/newspanda.JPG'
import bigimart from '../assets/bigimart.JPG'
import textuttils from '../assets/textuttils.JPG'
import iochat from '../assets/iochat.JPG'
import pdfimerger from '../assets/pdfimerger.JPG'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Portfolio = ({ ScrollReveal }) => {
    const portfolio = [
        {
            id: 1,
            src: ionotes,
            name: "ioNotes",
            demo: "https://ionotes.netlify.app/",
            code: "https://github.com/Deepak-yaryan/iNotes"
        },
        {
            id: 2,
            src: newspanda,
            name: "NewsPanda",
            demo: "https://pandanews.netlify.app/",
            code: "https://github.com/Deepak-yaryan/NewsPanda"
        },
        {
            id: 3,
            src: bigimart,
            name: "Bigg iMart",
            demo: "https://biggimart.netlify.app/",
            code: "https://github.com/Deepak-yaryan/BigMart"
        },
        {
            id: 4,
            src: textuttils,
            name: "TextUttils",
            demo: "https://textuttils.netlify.app/",
            code: "https://github.com/Deepak-yaryan/TextUtils"
        },
        {
            id: 5,
            src: iochat,
            name: "ioChat",
            demo: "https://iochatt.netlify.app/",
            code: "https://github.com/Deepak-yaryan/ioChat"
        },
        {
            id: 6,
            src: pdfimerger,
            name: "PDF iMerger",
            demo: "https://pdfimerger.onrender.com/",
            code: "https://github.com/Deepak-yaryan/PDFiMerger"
        },

    ]
    React.useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.heading', { origin: 'top', mobile: false })
        sr.reveal('.content', { origin: 'bottom', mobile: false })
        return () => {
            sr.destroy();
        }
    }, [ScrollReveal])

    return (
        <div name="portfolio" className='pt-20 w-full min-h-screen'>
            <div className='max-w-screen mx-auto flex flex-col justify-center w-full h-full'>
                <div className='heading pb-8 p-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here -</p>
                </div>

                <div className='content grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-12 sm:px-0 cursor-pointer'>
                    {
                        portfolio.map(({ id, src, demo, code, name }) => (
                            <div>
                                <div className='flex flex-col'>
                                    <div className='text-center m-auto hover:scale-110 duration-200 px-1 mb-1.5 shadow-md shadow-cyan-500 rounded-sm'>{name}</div>
                                </div>
                                <div key={id} className='shadow-lg shadow-cyan-600 rounded-lg flex relative overflow-hidden'>
                                    <img className='rounded-md hover:scale-105 duration-200' src={src} alt="" />
                                    <div className='absolute bottom-0 left-0 w-full h-full hover:bg-gradient-to-b from-black  flex flex-col justify-end items-center md:translate-y-36 hover:translate-y-0 duration-200'>
                                        <div className='fixed top-0 right-0'>
                                            <AiOutlineArrowUp size={1} />
                                        </div>
                                        <div className='text-white md:mb-4 -mb-1'>
                                            <a href={demo}><button className='bg-gradient-to-b from-cyan-200 to-cyan-600 md:text-lg text-sm mr-5 px-1 rounded-md border border-white hover:scale-110 duration-200'>Demo</button></a>
                                            <a href={code}><button className='bg-gradient-to-b from-cyan-200 to-cyan-600 md:text-lg text-sm ml-5 px-1 rounded-md border border-white hover:scale-110 duration-200'>Code</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio