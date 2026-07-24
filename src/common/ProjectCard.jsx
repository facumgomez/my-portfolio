function ProjectCard({ src, h3, p, githubLink, demoLink, styles }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrapper}>
        <img src={src} alt={`${h3} preview`} className={styles.projectImage} />
      </div>

      <div className={styles.projectContent}>
        <h3>{h3}</h3>
        <p>{p}</p>

        <div className={styles.projectLinks}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            Repo
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
