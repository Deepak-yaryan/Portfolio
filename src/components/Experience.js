import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import nodejs from '../assets/nodejs.svg'
import mongo from '../assets/mongo.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.svg'
import postman from '../assets/postman.svg'
import github from '../assets/github.svg'
import mongoose from '../assets/mongoose.png'
import jwt from '../assets/jwt.svg'
import json from '../assets/json.svg'
import npm from '../assets/npm.svg'
import yarn from '../assets/yarn.svg'
import netlify from '../assets/netlify.svg'
import git from '../assets/git.svg'
import express from '../assets/express.svg'
import sComponents from '../assets/sComponents.svg'
import reactRouter from '../assets/reactRouter.svg'
import bootstrap from '../assets/bootstrap.svg'

const Experience = ({ ScrollReveal }) => {
    const frontend = [
        {
            id: 1,
            src: html,
            name: "HTML5",
            style: "shadow-orange-500",
            hstyle: "mt-4",
        },
        {
            id: 2,
            src: css,
            name: "CSS3",
            style: "shadow-blue-500",
            hstyle: "mt-4",
        },
        {
            id: 3,
            src: javascript,
            name: "Javascript",
            style: "shadow-yellow-500",
            hstyle: "mt-4",
        },
        {
            id: 4,
            src: react,
            name: "React",
            style: "shadow-sky-500",
            hstyle: "mt-6",
        },
        {
            id: 5,
            src: redux,
            name: "Redux",
            style: "shadow-purple-500",
            hstyle: "mt-4",
        },
        {
            id: 6,
            src: sComponents,
            name: "Styled Components",
            style: "shadow-slate-300",
            hstyle: "mt-4",
            imgstyle: "bg-white p-1 rounded-lg"
        },
        {
            id: 7,
            src: reactRouter,
            name: "React Router Dom",
            style: "shadow-red-900",
            hstyle: "mt-12",
        },
        {
            id: 8,
            src: nextjs,
            name: "Nextjs",
            style: "shadow-slate-400",
            hstyle: "mt-4",
        },
        {
            id: 9,
            src: tailwind,
            name: "Tailwind",
            style: "shadow-sky-300",
            hstyle: "mt-12",
        },
        {
            id: 10,
            src: bootstrap,
            name: "Bootstrap",
            style: "shadow-purple-800",
            hstyle: "mt-4",
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

    const backend = [
        {
            id: 1,
            src: nodejs,
            name: "Node Js",
            style: "shadow-green-500",
            hstyle: "mt-12",
        },
        {
            id: 2,
            src: mongoose,
            name: "Mongoose",
            style: "shadow-red-800",
            hstyle: "mt-4",
        },
        {
            id: 3,
            src: express,
            name: "Express",
            style: "shadow-slate-300",
            hstyle: "mt-4",
            imgstyle: "bg-white p-1 rounded-lg"
        },
        {
            id: 4,
            src: mongo,
            name: "Mongo Db",
            style: "shadow-green-500",
            hstyle: "mt-4",
        },
        {
            id: 5,
            src: jwt,
            name: "JWT Auth",
            style: "shadow-violet-400",
            hstyle: "mt-4",
        },
        {
            id: 6,
            src: json,
            name: "JSON Server",
            style: "shadow-slate-400",
            hstyle: "mt-4",
            imgstyle: "bg-white p-1 rounded-lg"
        },
    ]

    const tools = [
        {
            id: 1,
            src: git,
            name: "Git",
            style: "shadow-orange-800",
            hstyle: "mt-4",
        },
        {
            id: 2,
            src: github,
            name: "Github",
            style: "shadow-gray-500",
            hstyle: "mt-4",
        },
        {
            id: 3,
            src: postman,
            name: "Postman",
            style: "shadow-orange-400",
            hstyle: "mt-4",
        },
        {
            id: 4,
            src: yarn,
            name: "YARN",
            style: "shadow-blue-500",
            hstyle: "mt-4",
        },
        {
            id: 5,
            src: npm,
            name: "NPM",
            style: "shadow-orange-300",
            hstyle: "mt-16",
        },
        {
            id: 6,
            src: netlify,
            name: "Netlify",
            style: "shadow-green-800",
            hstyle: "mt-4",
        },
    ]
    return (
        <div name="experience" className='pt-16 w-full min-h-screen'>
            <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 heading'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with -</p>
                </div>
                <h1 className='text-2xl font-semibold'>
                    Frontend
                </h1>
                <div className='content text-sky w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center px-2 py-8 sm:px-0'>
                    {
                        frontend.map(({ id, src, name, style, hstyle, imgstyle }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className={`w-20 mx-auto ${imgstyle}`} src={src} alt="" />
                                <p className={`${hstyle}`}>{name}</p>
                            </div>
                        ))
                    }
                </div>
                <h1 className='text-2xl font-semibold'>
                    Backend
                </h1>
                <div className='content text-sky w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center px-2 py-8 sm:px-0'>
                    {
                        backend.map(({ id, src, name, style, hstyle, imgstyle }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className={`w-20 mx-auto ${imgstyle}`} src={src} alt="" />
                                <p className={`${hstyle}`}>{name}</p>
                            </div>
                        ))
                    }
                </div>

                <h1 className='text-2xl font-semibold'>
                    Tools
                </h1>
                <div className='content text-sky w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center px-2 py-8 sm:px-0'>
                    {
                        tools.map(({ id, src, name, style, hstyle }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-20 mx-auto' src={src} alt="" />
                                <p className={`${hstyle}`}>{name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Experience