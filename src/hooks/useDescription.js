import { useRef } from "react"

export function useDescription () {

const parentRef = useRef()

        const handleDescription = (id) => {
          let parent = document.getElementById(id)
           parentRef.current = parent
          let hijo = parent.querySelector('p')
          hijo.style.opacity = 1;
          hijo.style.height = '70px'
         }
    
         const handleLeave = () => {
          let hijo = parentRef.current.querySelector('p')
          hijo.style.opacity = 0;
          hijo.style.height = '20px';
         }







    return {handleDescription , handleLeave}
}