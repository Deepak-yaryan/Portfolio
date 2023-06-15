import React,{ useState } from 'react'

const Contact = ({ScrollReveal}) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")

    React.useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal('.heading', {origin: 'top', mobile: false})
        sr.reveal('.content', {origin: 'bottom', mobile: false})
        return () => {
            sr.destroy();
          }
    },[])

    return (
        <div name="contact" className='w-full h-screen'>
            <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='heading'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me -</p>
                </div>

                <div className='content'>
                    <form action="https://getform.io/f/14c22017-a01a-4a7e-8415-b64faaad4ec2" method="POST" className='flex flex-col justify-center items-center'>

                        <div className="p-2 lg:w-1/3 md:w-1/2">
                            <div>
                                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                                <input onChange={(e)=> {if(e.target.name === "name"){ setname(e.target.value) }}} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 lg:w-1/3 md:w-1/2">
                            <div>
                                <label htmlFor="email" className="leading-7 text-sm">Email</label>
                                <input onChange={(e)=> {if(e.target.name === "email"){ setemail(e.target.value) }}} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 lg:w-1/3 md:w-1/2">
                            <div>
                                <label htmlFor="message" className="leading-7 text-sm">Message</label>
                                <textarea onChange={(e)=> {if(e.target.name === "message"){ setmessage(e.target.value) }}} value={message} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>

                            <button type='submit' onClick={()=> {setname("");setemail("");setmessage("");}} className='flex mt-4 mr-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 border-0 py-1 px-2 focus:outline-none hover:scale-110 duration-300 rounded text-lg'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact