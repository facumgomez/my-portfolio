import styles from './ProjectsStyles.module.css';
import fitpoint from '../../assets/fitpoint.png';
import homedeco from '../../assets/homedeco.png';
import climahoy from '../../assets/climahoy.png';
import tateti from '../../assets/tateti.png';
import sorteoplus from '../../assets/sorteoplus.png';
import memotest from '../../assets/memotest.png';
import encriptador from '../../assets/encriptador.png';
import appcata from '../../assets/appcata.png';
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    { id: 1, src: appcata, githubLink: "https://github.com/facumgomez/registro-faltas", demoLink: "", h3: "Asistencia Cata", p: "App de Asistencia desarrollada para gestión y control." },
    { id: 2, src: fitpoint, githubLink: "https://github.com/facumgomez/js-ecommerce.git", demoLink: "", h3: "FitPoint Equipment", p: "Tienda web e-commerce orientada a productos de fitness." },
    { id: 3, src: homedeco, githubLink: "https://github.com/facumgomez/reactjs-ecommerce.git", demoLink: "", h3: "Home Deco", p: "E-commerce minimalista y moderno para decoración del hogar." },
    { id: 4, src: climahoy, githubLink: "https://github.com/facumgomez/app-clima.git", demoLink: "", h3: "ClimaHoy", p: "Aplicación del clima en tiempo real conectada a una API." },
    { id: 5, src: tateti, githubLink: "https://github.com/facumgomez/ta-te-ti.git", demoLink: "", h3: "TA-TE-TI", p: "Clásico juego interactivo desarrollado con lógica de programación." },
    { id: 6, src: sorteoplus, githubLink: "https://github.com/facumgomez/sorteo-plus.git", demoLink: "", h3: "Sorteo Plus", p: "Herramienta web rápida y dinámica para realizar sorteos." },
    { id: 7, src: memotest, githubLink: "https://github.com/facumgomez/app-memotest.git", demoLink: "", h3: "MemoTest Food", p: "Juego de memoria visual con temática gastronómica." },
    { id: 8, src: encriptador, githubLink: "https://github.com/facumgomez/encriptador-texto.git", demoLink: "", h3: "Encriptador Texto", p: "App interactiva para encriptar y desencriptar mensajes." }
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
              styles={styles} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;