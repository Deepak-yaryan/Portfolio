import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import img from '../assets/img.jpg'
import Typed from 'typed.js'

const Home = ({ScrollReveal}) => {
  const el = React.useRef(null);

  React.useEffect(()=>{
    const typed = new Typed(el.current,{
      strings: ['Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    const sr = ScrollReveal()
    sr.reveal('.left', {origin: 'top', mobile: false})
    sr.reveal('.right', {origin: 'bottom', mobile: false})
    sr.reveal('.left h1,h2,h2, .right button', {origin: 'left', mobile: false})
    sr.reveal('.left p', {origin: 'right', mobile: false})
    return () => {
      typed.destroy();
      sr.destroy();
    }
  }, [ScrollReveal]);


  return (
      <div name="home" className='min-h-screen w-full'>
        <div className='md:space-x-48 md:pt-56 pt-20 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row'>
          <div className='left flex flex-col justify-center h-full'>
            <h3 className='text-xl font-bold py-2'>Hello, It's Me</h3>
            <h1 className='text-4xl md:text-5xl font-bold'>Deepak Kumar</h1>
            <h2 className='text-lg font-bold py-2'>And I'm a  <span ref={el} className='text-white w-fit py-1 px-1 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'></span></h2>
            <p className='py-4 max-w-md'>Passionate Full Stack Web Developer with 1300+ hours of coding experience in backend and frontend in the MERN Stack and Next.js . Ability to work in team environment, emphasizing team goals.</p>

            <div>
              <a href="/resume.pdf">
              <button  download={true} target="_blank" rel="noreferrer" className='group text-white w-fit px-6 py-3 mt-2 mb-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Download CV
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </button>
              </a>
            </div>

          </div>

          <div className='right md:w-1/2 animate-pulse' >
            <img className='rounded-2xl mx-auto w-2/3 md-w-full shadow-lg shadow-cyan-500' src={img} alt="my profile" />
          </div>

        </div>
      </div>
  )
}

export default Home