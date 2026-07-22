import styles from './ContactStyles.module.css';
import Swal from 'sweetalert2';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    const endpoint = "https://formspree.io/f/mojglbjl";

    const alertBackground = theme === 'light' ? '#ffffff' : '#222222';
    const alertColor = theme === 'light' ? '#000000' : '#ffffff';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarte, te responderé a la brevedad.',
          confirmButtonColor: '#3085d6',
          background: alertBackground,
          color: alertColor,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
          confirmButtonColor: '#3085d6',
          background: alertBackground,
          color: alertColor,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: 'Por favor, revisa tu conexión a internet.',
        confirmButtonColor: '#3085d6',
        background: alertBackground,
        color: alertColor,
      });
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" className="srOnly">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Nombre" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="srOnly">Correo Electrónico</label>
          <input type="email" name="email" id="email" placeholder="Correo Electrónico" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="srOnly">Mensaje</label>
          <textarea name="message" id="message" placeholder="Mensaje" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;