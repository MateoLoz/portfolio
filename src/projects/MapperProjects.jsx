import './style/mapperprojects.css'
import { proyects } from '../const/proyects'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'


export default function MapperProjects() {

  const {ref, inView} = useInView({
    threshold:0.5
  })

  return (
    <div id='projects' className="projects-Mapper-container pl-3 pr-3 pb-25">
      <header ref={ref} className='header-projects'>
        <div className='w-full h-full  pt-2 grid grid-cols-12'>
          <div className='w-full h-full col-span-12 s:col-span-10 mb-10 s:mb-0 relative'>
            <label className='projects-tag'>(Projects)</label>
            <div style={{ width: '100%', height: '100%',  display: 'block' }}>
              <div className='overflow-hidden'>
                <div className='block  start translate-none rotate-none overflow-hidden'>
                  <span className={`name-text ${inView ? 'visi' : ''}`}>Mateo Lozano's,</span>
                </div>
              </div>
             <div className='overflow-hidden'>
                <div className='block  start translate-none rotate-none overflow-hidden'>
                  <span className={`name-text2 ${inView ? 'visi' : ''}`}>Selected web development projects.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
       <div  className='mapped-items'>
        {proyects.map(items => {
          const {ref, inView} = useInView({threshold:0.5});
          return <ProjectCard items={items} key={items.id} ref={ref} inView={inView} />
        })}
       </div>
    </div>
  )
}
