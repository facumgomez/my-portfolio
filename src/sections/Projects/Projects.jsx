import styles from './ProjectsStyles.module.css';
import fitpoint from '../../assets/fitpoint.png';
import homedeco from '../../assets/homedeco.png';
import climahoy from '../../assets/climahoy.png';
import tateti from '../../assets/tateti.png';
import sorteoplus from '../../assets/sorteoplus.png';
import memotest from '../../assets/memotest.png';
import encriptador from '../../assets/encriptador.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    { id: 1, src: fitpoint, link: "https://github.com/facumgomez/js-ecommerce.git", h3: "FitPoint Equipment", p: "Tienda Web" },
    { id: 2, src: homedeco, link: "https://github.com/facumgomez/reactjs-ecommerce.git", h3: "Home Deco", p: "E-commerce" },
    { id: 3, src: climahoy, link: "https://github.com/facumgomez/app-clima.git", h3: "ClimaHoy", p: "App del Clima" },
    { id: 4, src: tateti, link: "https://github.com/facumgomez/ta-te-ti.git", h3: "TA-TE-TI", p: "Juego" },
    { id: 5, src: sorteoplus, link: "https://github.com/facumgomez/sorteo-plus.git", h3: "Sorteo Plus", p: "App de Sorteos" },
    { id: 6, src: memotest, link: "https://github.com/facumgomez/app-memotest.git", h3: "MemoTest Food", p: "Juego de Memoria" },
    { id: 7, src: encriptador, link: "https://github.com/facumgomez/encriptador-texto.git", h3: "Encriptador Texto", p: "App Encriptadora" }
  ];
return (
  <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {/* Renderizado dinámico usando .map() */}
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id} // En React siempre que mapeamos necesitamos una prop 'key' única
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;