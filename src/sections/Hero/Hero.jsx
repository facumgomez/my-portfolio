import { useState, useEffect } from 'react';
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
import { motion, useMotionValue, useTransform } from 'framer-motion'; 
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const [typedText, setTypedText] = useState('');
  const fullText = "DESARROLLADOR FRONTEND";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;

  const copyEmailToClipboard = () => {
    const email = "gomezmfacundo@gmail.com";
    const alertBackground = theme === 'light' ? '#ffffff' : '#222222';
    const alertColor = theme === 'light' ? '#000000' : '#ffffff';

    navigator.clipboard.writeText(email).then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Correo copiado!',
        text: `El correo ${email} ha sido copiado al portapapeles.`,
        confirmButtonColor: '#3085d6',
        background: alertBackground,
        color: alertColor,
      });
    }).catch(err => {
      console.error("Error al copiar el correo: ", err);
    });
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Facundo Gómez"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            perspective: 1000,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <motion.div 
        className={styles.info}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Facundo
          <br />
          Gómez
        </h1>
        
        <h2 className={styles.typingEffect}>
          {typedText}
          <span className={styles.cursor}>|</span>
        </h2>
        
        <span>
          <a href="https://linkedin.com/in/facundo-m-gomez" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/facumgomez" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a>
            <img src={emailIcon} alt="Email icon" onClick={copyEmailToClipboard} 
            style={{ cursor: 'pointer' }} />
          </a>
        </span>
        <a href={CV} download>
          <button className="hover">Descargar CV</button>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;