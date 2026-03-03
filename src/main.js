import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="container">
      <nav>
        <div class="logo">NT</div>
        <button class="mobile-menu-btn" id="menuBtn">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home" class="hero">
    <div class="container">
      <h1>Nick Tan</h1>
      <p class="subtitle">Developer • Designer • Creator</p>
      <p>Building digital experiences and bringing ideas to life through code.</p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p>
          Hello! I'm Nick Tan, a passionate developer with a love for creating
          elegant solutions to complex problems. I specialize in building web
          applications and digital experiences that make a difference.
        </p>
        <p style="margin-top: 24px;">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, and continuously learning to
          stay at the forefront of the ever-evolving tech landscape.
        </p>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Project One</h3>
          <p>A comprehensive web application that helps users manage their daily tasks with an intuitive interface and powerful features.</p>
          <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
          </div>
        </div>
        <div class="project-card">
          <h3>Project Two</h3>
          <p>An innovative mobile-first platform designed to connect people and foster meaningful interactions in local communities.</p>
          <div class="project-tags">
            <span class="tag">Vue.js</span>
            <span class="tag">Firebase</span>
            <span class="tag">PWA</span>
          </div>
        </div>
        <div class="project-card">
          <h3>Project Three</h3>
          <p>A data visualization dashboard that transforms complex datasets into actionable insights with beautiful, interactive charts.</p>
          <div class="project-tags">
            <span class="tag">D3.js</span>
            <span class="tag">Python</span>
            <span class="tag">PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul class="skill-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React & Vue.js</li>
            <li>Responsive Design</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul class="skill-list">
            <li>Node.js & Express</li>
            <li>Python & Django</li>
            <li>RESTful APIs</li>
            <li>Database Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools & Other</h3>
          <ul class="skill-list">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <p>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <a href="mailto:hello@nicktan.com" class="btn btn-primary">Send Email</a>
        <div class="social-links">
          <a href="https://github.com/nicktan" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/nicktan" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/nicktan" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2026 Nick Tan. All rights reserved.</p>
    </div>
  </footer>
`

function toggleMenu() {
  const navLinks = document.getElementById('navLinks')
  navLinks.classList.toggle('active')
}

document.getElementById('menuBtn').addEventListener('click', toggleMenu)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      const navLinks = document.getElementById('navLinks')
      navLinks.classList.remove('active')
    }
  })
})
