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
return (
  <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitpoint}
          link="https://github.com/facumgomez/js-ecommerce.git"
          h3="FitPoint Equipment"
          p="Web Store"
        />
        <ProjectCard
          src={homedeco}
          link="https://github.com/facumgomez/reactjs-ecommerce.git"
          h3="Home Deco"
          p="Ecommerce"
        />
        <ProjectCard
          src={climahoy}
          link="https://github.com/facumgomez/app-clima.git"
          h3="ClimaHoy"
          p="Climate App"
        />
        <ProjectCard
          src={tateti}
          link="https://github.com/facumgomez/ta-te-ti.git"
          h3="TA-TE-TI"
          p="Game App"
        />
        <ProjectCard
          src={sorteoplus}
          link="https://github.com/facumgomez/sorteo-plus.git"
          h3="Sorteo Plus"
          p="Lottery App"
        />
        <ProjectCard
          src={memotest}
          link="https://github.com/facumgomez/app-memotest.git"
          h3="MemoTest Food"
          p="Game App"
        />
        <ProjectCard
          src={encriptador}
          link="https://github.com/facumgomez/encriptador-texto.git"
          h3="Encriptador Texto"
          p="Encriptador App"
        />
      </div>
    </section>
  );
}

export default Projects;