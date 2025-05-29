
import '../styles/card.css'
import { useDescription } from "../hooks/useDescription";


const Card = ({ item , ref , inView}) => {

  const { handleDescription, handleLeave } = useDescription();


  return (
    <article
      id={item.id}
      ref={ref}
      className={`card-proyect ${inView ? 'visible' : ''}`}
      onMouseEnter={() => handleDescription(item.id)}
      onMouseLeave={() => handleLeave()}
    >
      <header className="header-card-proyect">
        <small
          className="type-app service"
          style={{
            background:
              item.type !== "microservice"
                ? item.type === "Front-end"
                  ? "rgba(0, 180, 216, 0.39)"
                  : "rgba(93, 95, 239, 0.54)"
                : "rgba(252, 162, 17, 0.38)",
          }}
        >
          {item.type}
        </small>
        <h2>{item.nombre}</h2>
      </header>
      <aside className="body-card">
        <div className="project-demo">
          <video  autoPlay={`${inView} ? autplay : false `} loop={`${inView} ? true : false `} muted >
            <source src={item.demo} type="video/mp4" />
          </video>
        </div>
        <p className="project-description">{item.descripcion}</p>
        <div className="project-tags">
          {item.tecnology.map((tags, i) => (
            <span key={i} className="tag">
              {tags}
            </span>
          ))}
        </div>
      </aside>
    </article>
  );
};

export default Card;