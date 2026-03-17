import '../assets/styles/InicioBody.css'
import { CardProject } from "./CardProject"
import data from '../data/projects.json'
import { useEffect, useState } from 'react'

import css from '../../public/icons/css3-original.svg';
import html from '../../public/icons/html5-original.svg'
import js from '../../public/icons/javascript-original.svg'
import react from '../../public/icons/react-original.svg'
import typescript from '../../public/icons/typescript-original.svg'

import java from '../../public/icons/java-original.svg'
import nodejs from '../../public/icons/nodejs-original-wordmark.svg'
import spring from '../../public/icons/spring-original.svg'
import python from '../../public/icons/python-original.svg'

import mysql from '../../public/icons/mysql-original-wordmark.svg'
import oracle from '../../public/icons/oracle-original.svg'



export const InicioBody = () => {

    const [project, setProject] = useState<any>([])

    useEffect(() => {
        setProject(data)
    }, [])

    const skills = [
        { id: 1, icon: css, name: "Css", desc: "Maquetación responsiva y diseño de interfaces modernas utilizando Flexbox y CSS Grid.", dominio: "Intermedio" },
        { id: 2, icon: html, name: "Html", desc: "Estructuración semántica de aplicaciones web y optimización de componentes para React.", dominio: "Intermedio" },
        { id: 3, icon: js, name: "JavaScript", desc: "Desarrollo de lógica de programación avanzada, manipulación del DOM y consumo de APIs REST.", dominio: "Intermedio" },
        { id: 4, icon: react, name: "React", desc: "Creación de interfaces de usuario dinámicas y modulares utilizando Hooks y gestión de estado.", dominio: "Basico - Intermedio" },
        { id: 5, icon: typescript, name: "TypeScript", desc: "Implementación de tipado estático para mejorar la escalabilidad y robustez del código.", dominio: "Basico - Intermedio" },
        { id: 6, icon: java, name: "Java", desc: "Desarrollo de aplicaciones robustas, incluyendo sistemas de inventario de escritorio y lógica de backend.", dominio: "Intermedio" },
        { id: 7, icon: nodejs, name: "NodeJs", desc: "Configuración de entornos de ejecución para herramientas de desarrollo y backends escalables.", dominio: "Basico - Intermedio" },
        { id: 8, icon: spring, name: "Spring Boot", desc: "Creación de microservicios y APIs RESTful con integración de bases de datos relacionales.", dominio: "Basico" },
        { id: 9, icon: python, name: "Python", desc: "Manejo de sintaxis básica y scripts funcionales para tareas automatizadas.", dominio: "Basico" },
        { id: 10, icon: mysql, name: "MySql", desc: "Diseño de bases de datos relacionales, gestión de consultas SQL y persistencia de datos para aplicaciones e-commerce e inventarios.", dominio: "Intermedio" },
        { id: 11, icon: oracle, name: "Oracle", desc: "Administración de bases de datos en la nube y ejecución de consultas estructuradas para el manejo de información compleja.", dominio: "Basico - Intermedio" }
    ];


    return (
        <>
            <section className="projects-container">
                <div className='title-projects-container'>
                    <h3>My Projects</h3>
                </div>
                <hr />
                <div className="grid-container">
                    {project.map((p: any, index: number) => (
                        <CardProject key={index} project={p} />
                    ))}
                </div>
            </section>

            <section className="skills-container">
                <div className='title-skills-container'>
                    <h2>Skills</h2>
                </div>

                <div className='skills'>

                    {skills.map(skill => (
                        <div className='skill-card' key={skill.id}>
                            <div className='logo-skill-card'>
                                <img src={skill.icon} alt="icon-skill" />
                            </div>
                            <div className='info-skill-card'>
                                <h3>{skill.name}</h3>
                                <span>{`dominio: ${skill.dominio}`}</span>
                                <p>{skill.desc}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}