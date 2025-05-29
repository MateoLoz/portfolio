import { proyects } from "../const/proyects.js"
import { useInView } from "react-intersection-observer";
import Card from "./Card.jsx";
import '../styles/card.css'

export default function  MappedProjects  () {

    return(
        <>
        <aside className='projects-conatiner'>
           {proyects.map(item => {
           const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
           return <Card key={item.id} item={item} ref={ref} inView={inView} />;
           })}
    </aside>
    </>
    )
}