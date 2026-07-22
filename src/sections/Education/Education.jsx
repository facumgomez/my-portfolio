import styles from './EducationStyles.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Educación</h1>
      <div className={styles.content}>
        <h3>Licenciatura en Informática</h3>
        <p>Universidad Nacional de Hurlingham (UNAHUR)</p>
      </div>
    </section>
  );
}

export default Education;