import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'about', title: 'ACERCA DE MI' },
  { id: 'projects', title: 'PROYECTOS' },
];

const handleScrollTo = (id) => {
  const element = document.getElementById(id);
  const contentArea = document.querySelector('.content-area');

  if (element && contentArea) {
    const elementRect = element.getBoundingClientRect();
    const contentRect = contentArea.getBoundingClientRect();

    const newScrollTop = contentArea.scrollTop + elementRect.top - contentRect.top;

    contentArea.scrollTo({
      top: newScrollTop,
      behavior: 'smooth'
    });

    window.history.pushState(null, '', `#${id}`);
  }
};


//Barra de navegacion
const NavigationBar = ({ activeSection }) => {
  return (
    <nav className="navigation-bar">
      <div>
        <div className='presentation'>
          <h1 className="name">
            Moisés Abraham Sunza Vázquez
          </h1>
          <h2 className="subtitle">
            Estudiante de Ingeniería en Tecnologías de Software
          </h2>
          <p className="description">
            Estudiando para crear experiencias digitales accesibles y perfectas para la web.
          </p>
        </div>

        {/*Botones para dirigirse a un area del portafolio*/}
        <ul className="selector">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleScrollTo(section.id)}
                className={'btn-navigation-bar'}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

//Esquema de proyectos
const ProjectCard = ({ title, description, tags, url, imgSrc }) => (
  <a href={`${url}`} target="_blank" rel="noopener noreferrer">
    <div className='projectCard'>
      <div className="project-card-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="tag-style">
              {tag}
            </span>
          ))}
        </div>
        <div className='project-card-image'>
          <img src={`${imgSrc}`} className='imgProject' />
        </div>
      </div>
    </div>
  </a>
);


//Contenido
const ContentArea = () => {
  return (
    <main className="content-area">

      {/*Seccion ABOUT ME*/}
      <section id="about" className="sectionAbout">
        <h2 className="subtitle">ACERCA DE MI</h2>
        <p className="description">
          Soy un desarrollador apasionado 😁 por crear interfaces de usuario accesibles y perfectas en píxeles que combinan un diseño reflexivo con una ingeniería sólida 💻🔧. Mi trabajo favorito se encuentra en la intersección del diseño 🎨 y el desarrollo 👨‍💻.
        </p>
        <p className="description">
          Actualmente, soy estudiante ✍ en la Universidad Autónoma de Campeche, de la carrera Ingeniería en Tecnologías de Software 🖥, adquiriendo conocimientos para crear experiencias
          web.
        </p>
        <p className="description">
          Tengo mayor habilidad para el backend ⌨ de las páginas que el frontend 🖌, pero eso no quiere decir que no tenga conocimientos de ambos 👍.
        </p>
        <p className="description">
          Si deseas que agregue mas contenido acerca de tí solo dime algún tema en concreto y con gusto te 😳... espera esto no es lo que parece 😫.
        </p>
      </section>

      {/* Seccion PROJECTS */}
      <section id="projects" className="sectionProject">
        <h2 className="subtitle">PROYECTOS</h2>
        <h3 className="subtitle2">Mis Proyectos Escolares Destacados</h3>

        <ProjectCard
          title="Comercio Accesible"
          description="Maqueta HTML se un sitio de e-Commerce accesible para personas invidentes, compatible con tecnologias de lectores de pantallas."
          tags={['HTML']}
          url='https://moisessunza.github.io/E-commerce-accesible/'
          imgSrc='/assets/sitioAccesible.png'
        />
        <ProjectCard
          title="Red Social Responsiva"
          description="Maquetado de una red social ficticia llamada The Anti-Social Club, con estructura en HTML y estilos con CSS."
          tags={['HTML', 'CSS']}
          url='https://moisessunza.github.io/The-Anti-Social-Club/'
          imgSrc='/assets/redSocial.png'
        />
        <ProjectCard
          title="Glosario de HTML"
          description="Glosario dividido por funciones sobre las etiquetas más utilizadas al crear archivos HTML para la web, perfecto para estudiar antes de un examen."
          tags={['HTML ', 'CSS ']}
          url='https://moisessunza.github.io/CheatSheet_MoisesSunza/?authuser=0'
          imgSrc='/assets/glosario.png'
        />
        <ProjectCard
          title="Juego Con JavaScript"
          description="Pequeño juego sencillo llamado Chafa-Tale donde huimos de un enemigo, con musica de fondo y sliders para cambiar parametros de velocidad de los personajes."
          tags={['HTML ', 'CSS ', 'JavaScript ']}
          url='https://moisessunza.github.io/Chafa-tale/?authuser=0'
          imgSrc='/assets/chafatale.png'
        />
        <ProjectCard
          title="Formulario de Registro de Personal Escolar"
          description="Formulario con operaciones CRUD para el manejo de personas en una base de datos remota, donde administramos personal escolar como alumnos, maestros o administrativos."
          tags={['HTML ', 'CSS ', 'JavaScript ']}
          url='https://moisessunza.github.io/formCRUD_72954/'
          imgSrc='/assets/crud.png'
        />
        <ProjectCard
          title="TicTacToe en React"
          description="El clasico juego de TicTacToe o Gato recreado para navegador web y programado en React, y que cuenta con un historial de movimientos realizados."
          tags={['React ', 'HTML', 'CSS ', 'JavaScript']}
          url='https://moisessunza.github.io/tictactoe_react_72954/?authuser=0'
          imgSrc='/assets/gato.png'
        />
      </section>
    </main>
  );
};

const SocialNetworks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="social-network-container">
      
      {/* Menú Flotante */}
      <div className={`social-menu ${isOpen ? 'active' : ''}`}>
        <a href="https://github.com/MoisesSunza" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="mailto:al072954@uacam.mx" className="social-link">
          GMail
        </a>
      </div>

      <button onClick={toggleMenu} className="social-trigger-btn" aria-label="Abrir redes sociales">
        <img src='/logo.png' className='socialNet' alt="Logo Redes" />
      </button>
    </div>
  );
};

const CursorParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(94, 234, 212, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
      
      for (let i = 0; i < 2; i++) {
        particles.current.push(new Particle(mouse.current.x, mouse.current.y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update();
        particles.current[i].draw();
        
        if (particles.current[i].size <= 0.2) {
          particles.current.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="particle-canvas"
    />
  );
};

function App() {
  const [activeSection] = useState(SECTIONS[0].id);

  return (
    <>
      <div className='portfolio-wrapper'>
        <CursorParticles />
        <NavigationBar activeSection={activeSection} />
        <ContentArea />
        <SocialNetworks />
      </div>
    </>
  );
}

export default App;