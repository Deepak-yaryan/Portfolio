import React from 'react'
import coding from '../assets/coding.json'
import Lottie from 'lottie-react'

const About = ({ ScrollReveal }) => {
    React.useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.heading', { origin: 'top', mobile: false })
        sr.reveal('.content p', { origin: 'bottom', mobile: false })
        return () => {
            sr.destroy();
        }
    }, [])
    return (
        <div name="about" className='pt-16 w-full min-h-screen'>
            <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='heading pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
                </div>
                <div className='md:flex justify-between md:px-28'>
                    <div className='text-center lg:w-1/3 w-72 mx-auto'>
                        <Lottie loop={true} animationData={coding} />
                    </div>
                    <div className='md:pt-36 pt-8 content lg:w-1/2 text-xs'>
                        <p className='text-xl mt-6'>
                            Hello, I am Deepak kumar. Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.
                        </p>

                        <br />

                        <p className='text-xl'><span className='text-cyan-500 font-semibold'>Full Stack Developer </span>with hand on exprience in building React as well as Next Apps. Works efficently both in frontend as well as backend and is proficient in Data Structure and Algorithm with good problem solving skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About