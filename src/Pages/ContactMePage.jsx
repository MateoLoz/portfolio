import LoadPage from './LoadPage'
import { useLoading } from '../hooks/useLoading'

export default function ContactMePage () {
    const {loading} = useLoading()
    return(
        <>
        {loading == true 
        ? <LoadPage/> 
        : <div>
            Hola
        </div> }
        </>
    )
}