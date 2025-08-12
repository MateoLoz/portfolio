import { useState } from "react"
import { useLoading } from "../hooks/useLoading"
import NavegationBar from "../Navbar/NavegationBar"
import InfinitySlider from "../slider/InfinitySlider"
import LoadPage from "./LoadPage"

export default function ContactMateoPage () {
    const [send,setSend] = useState('Send')
    const handleValue = (e) => {
        e.preventDefault()
        setSend(()=> 'loading...')
        setTimeout(() => {
             setSend(()=> 'msj Sended!')
        }, 1000);
     
    }
    const { loading } = useLoading()
    return(
    <>
    {loading == true 
    ? <LoadPage/> 
    : <div>
    <NavegationBar/>
    <InfinitySlider nombre={'Contact Mateo!'}/>
    <section className="w-full pt-4 pl-10 pr-10 xl:pl-20 xl:pr-20">
        <form className="w-full h-full flex flex-col md:flex-row gap-4" action="">
            <div className="flex flex-col gap-4 h-full w-full xl:w-1/2 items-center xl:items-center">
            <label className="self-start pl-6 text-[#1b1b1c]" htmlFor="mail">Email</label>
            <input className="p-2 w-full md:1/3 rounded-md bg-[#f2f2f2]  border-1 border-[#1b1b1c] focus-none outline-none" id="mail" type="text" placeholder="example@gmail.com"/>
            <label className="self-start pl-6 text-[#1b1b1c]" htmlFor="subject">Subject</label>
            <input className="p-2 w-full md:1/3 rounded-md bg-[#f2f2f2] border-1 border-[#1b1b1c] focus-none outline-none" id="subject" type="text" placeholder="Subject"/>
            </div>
             <div className="flex flex-col gap-2 h-full w-full xl:w-1/2 items-center xl:items-center">
             <label className=" self-start pl-6 text-[#1b1b1c]" htmlFor="message">Message</label>
            <textarea className="w-full xl:w-full h-40 rounded-md border-1 border-[#1b1b1c] focus-none resize-none outline-none p-4" name="message" id="message" placeholder="Hi Mateo, Let's schedule a meeting! "></textarea>
            <input className="self-center w-2/4 md:w-4/4 h-10 bg-[#1b1b1c] rounded-md text-white" type="submit" value={send} onClick={(e)=> handleValue(e)} />
             </div>
        </form>
    </section>
    </div> 
    }
    </>
    )
}