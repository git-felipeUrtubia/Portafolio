
import '../assets/styles/CardProject.css'
import { FaGithub } from 'react-icons/fa6'
import { ExternalLink } from 'lucide-react';



export const CardProject = ({ project }: any) => {

    return (
        <article className="card-project-container">
            <div className="image-project">
                <img src={project.image} alt="img" />
            </div>

            <div className="card-project-info">
                <h3>{project.nombre}</h3>

                <p>{project.descripcion}</p>
            </div>

            <div className='link-container'>
                <span className='link-content'>
                    <FaGithub className='icon-github'/>
                    <a href={project.link} target='_blank'>Code</a>
                    <ExternalLink className='icon-share'/>
                </span>
            </div>
        </article>
    )
}