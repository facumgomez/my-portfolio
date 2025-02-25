import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import Swal from 'sweetalert2';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;

  const copyEmailToClipboard = () => {
    const email = "gomezmfacundo@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Correo copiado!',
        text: `El correo ${email} ha sido copiado al portapapeles.`,
        confirmButtonColor: '#3085d6',
      });
    }).catch(err => {
      console.error("Error al copiar el correo: ", err);
    });
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Facundo Gómez"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Facundo
          <br />
          Gómez
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://linkedin.com/in/facundo-m-gomez" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/facumgomez" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a>
            <img src={emailIcon} alt="Email icon" onClick={copyEmailToClipboard} 
            style={{ cursor: 'pointer' }} />
          </a>
        </span>
        <p className={styles.description}>
          WEB
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;