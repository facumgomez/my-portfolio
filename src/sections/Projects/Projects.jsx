import styles from './ProjectsStyles.module.css';
import fitpoint from '../../assets/fitpoint.png';
import homedeco from '../../assets/homedeco.png';
import climahoy from '../../assets/climahoy.png';
import tateti from '../../assets/tateti.png';
import sorteoplus from '../../assets/sorteoplus.png';
import memotest from '../../assets/memotest.png';
import encriptador from '../../assets/encriptador.png';
import appcata from '../../assets/appcata.png';
import backend from '../../assets/backend.png'
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    { 
      id: 1, 
      src: appcata, 
      githubLink: "https://github.com/facumgomez/registro-faltas", 
      demoLink: "https://registro-faltas.vercel.app/", 
      h3: "Asistencia Cata", 
      p: "App de Asistencia desarrollada para gestión y control.",
      techStack: ["JavaScript", "Firebase", "CSS"]
    },
    { 
      id: 2, 
      src: fitpoint, 
      githubLink: "https://github.com/facumgomez/js-ecommerce.git", 
      demoLink: "https://fitpointequipment.vercel.app/", 
      h3: "FitPoint Equipment", 
      p: "Tienda web e-commerce orientada a productos de fitness.",
      techStack: ["JavaScript", "Bootstrap", "Tailwind", "Sass", "HTML", "CSS"]
    },
    { 
      id: 3, 
      src: homedeco, 
      githubLink: "https://github.com/facumgomez/reactjs-ecommerce.git", 
      demoLink: "https://homedecotienda.vercel.app/", 
      h3: "Home Deco", 
      p: "E-commerce minimalista y moderno para decoración del hogar.",
      techStack: ["React", "Firebase", "Bootstrap", "JavaScript", "CSS"]
    },
    { 
      id: 4, 
      src: climahoy, 
      githubLink: "https://github.com/facumgomez/app-clima.git", 
      demoLink: "https://climahoy.vercel.app/", 
      h3: "ClimaHoy", 
      p: "Aplicación del clima en tiempo real conectada a una API.",
      techStack: ["JavaScript", "HTML", "CSS"]
    },
    { 
      id: 5, 
      src: tateti, 
      githubLink: "https://github.com/facumgomez/ta-te-ti.git", 
      demoLink: "https://tatetiapp.vercel.app/", 
      h3: "TA-TE-TI", 
      p: "Clásico juego interactivo desarrollado con lógica de programación.",
      techStack: ["JavaScript", "HTML", "CSS"]
    },
    { 
      id: 6, 
      src: sorteoplus, 
      githubLink: "https://github.com/facumgomez/sorteo-plus.git", 
      demoLink: "https://sorteoplus.vercel.app/", 
      h3: "Sorteo Plus", 
      p: "Herramienta web rápida y dinámica para realizar sorteos.",
      techStack: ["JavaScript", "HTML", "CSS"]
    },
    { 
      id: 7, 
      src: memotest, 
      githubLink: "https://github.com/facumgomez/app-memotest.git", 
      demoLink: "https://memotesgame.vercel.app/", 
      h3: "MemoTest Food", 
      p: "Juego de memoria visual con temática gastronómica.",
      techStack: ["React", "JavaScript", "HTML", "CSS"]
    },
    { 
      id: 8, 
      src: encriptador, 
      githubLink: "https://github.com/facumgomez/encriptador-texto.git", 
      demoLink: "https://encriptadortext.vercel.app/", 
      h3: "Encriptador Texto", 
      p: "App interactiva para encriptar y desencriptar mensajes.",
      techStack: ["JavaScript", "HTML", "CSS"]
    },
    { 
      id: 9, 
      src: backend, 
      githubLink: "https://github.com/facumgomez/proyectobackend-facundomartingomez", 
      demoLink: "", 
      h3: "E-Commerce Backend API", 
      p: "API RESTful completa con autenticación, base de datos NoSQL, websockets y testing.",
      techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Swagger"] 
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ width: '100%' }}
          >
            <ProjectCard
              src={project.src}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              h3={project.h3}
              p={project.p}
              techStack={project.techStack}
              styles={styles} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;