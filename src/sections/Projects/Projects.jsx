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
    { id: 1, src: appcata, link: "https://github.com/facumgomez/registro-faltas", h3: "Asistencia Cata", p: "App de Asistencia" },
    { id: 2, src: fitpoint, link: "https://github.com/facumgomez/js-ecommerce.git", h3: "FitPoint Equipment", p: "Tienda Web" },
    { id: 3, src: homedeco, link: "https://github.com/facumgomez/reactjs-ecommerce.git", h3: "Home Deco", p: "E-commerce" },
    { id: 4, src: climahoy, link: "https://github.com/facumgomez/app-clima.git", h3: "ClimaHoy", p: "App del Clima" },
    { id: 5, src: tateti, link: "https://github.com/facumgomez/ta-te-ti.git", h3: "TA-TE-TI", p: "Juego" },
    { id: 6, src: sorteoplus, link: "https://github.com/facumgomez/sorteo-plus.git", h3: "Sorteo Plus", p: "App de Sorteos" },
    { id: 7, src: memotest, link: "https://github.com/facumgomez/app-memotest.git", h3: "MemoTest Food", p: "Juego de Memoria" },
    { id: 8, src: encriptador, link: "https://github.com/facumgomez/encriptador-texto.git", h3: "Encriptador Texto", p: "App Encriptadora" }
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectCard
              src={project.src}
              link={project.link}
              h3={project.h3}
              p={project.p}
              alt={`Logo del proyecto ${project.h3}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;