export default function Footer () {
    return(
        <>
        <div className="w-full h-4 bg-[#1b1b1c] border-1 border-b-[#A4A4A4]"></div>
        <div className="bg-[#1b1b1c] w-full h-[40vh] flex flex-row gap-4">
         <aside className="w-100 h-40 flex flex-col gap-2 mt-4 ml-4">
            <h2 className=" text-white font-(PP Neue Montreal Normal) text-lg ">Navigate</h2>
            <ul className="w-full h-full flex flex-col gap-1 items-start">
                <li className="text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white "> <a href="#home">Home</a></li>
                <li className="text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white "> <a href="#RoadMap">RoadMap</a> </li>
                <li className="text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white "><a href="#Technologies">Technologies</a></li>
                <li className=" text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white"><a href="#projects">Projects</a></li>
                <li className=" text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white"><a href="/Curriculum">Cv</a></li>
            </ul>
         </aside>
         <aside className="w-100 h-40 flex flex-col gap-2 mt-4">
          <h2 className=" text-white font-(PP Neue Montreal Normal) text-lg ">Socials</h2>
            <ul className="w-full h-full flex flex-col gap-1 items-start">
                <li className="text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white ">Instagram</li>
                <li className=" text-[#A4A4A4] font-(PP Neue Montreal Normal) text-md  hover:text-white">LinkedIn</li>
            </ul>
         </aside>
        </div>
        <div className="w-full pb-6 pl-4 pr-4 sm:pl-7 sm:pr-7 bg-[#1b1b1c] flex flex-row  justify-between">
            <h2 className=" text-[#A4A4A4] text-sm sm:text-lg ">@Mateo Lozano 2025</h2>
            <h2 className="flex items-center"><a className=" text-[#A4A4A4] sm:text-lg text-sm   " href="/#about-me"> Back to top </a></h2>
            <h2 className="flex items-center"> <a className="text-[#A4A4A4] sm:text-lg text-sm " href="/Contact-Mateo">Contact Mateo</a></h2>
        </div>
        </>
    )
}