import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <nav>
        <div class="logo">nt.</div>
        <ul class="nav-links">
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#talk">Talk</a></li>
          <li><a href="#ventures">Ventures</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="status-badge">
          <span class="status-dot"></span>
          Available for new projects & ventures
        </div>
        <h1>Building businesses and digital solutions.</h1>
        <p class="subtitle">
          Nick Tan — Entrepreneur and developer. 
          Leading <a href="https://thatpetsupplystore.com" target="_blank" style="color: var(--accent-color); text-decoration: underline;">That Pet Supply Store</a>, 
          <a href="https://soi.com.sg" target="_blank" style="color: var(--accent-color); text-decoration: underline;">Spot-On Inspectorate</a>, and 
          <a href="https://shopee.sg/robobooga" target="_blank" style="color: var(--accent-color); text-decoration: underline;">The Shuffle Spot</a>.
        </p>
        <div class="contact-links">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a href="https://linkedin.com/in/nicktanxs" target="_blank" class="btn social-btn">LinkedIn</a>
        </div>
      </section>

      <section id="expertise">
        <h2 class="section-title">Expertise</h2>
        <div class="stack-grid">
          <div class="stack-category">
            <h4>Operations</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              End-to-end supplier and customer management, streamlining logistics, and scaling retail operations across multiple platforms.
            </p>
          </div>
          <div class="stack-category">
            <h4>Strategy</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Leading multi-disciplinary teams and managing complex consultancy projects with a focus on operational excellence.
            </p>
          </div>
          <div class="stack-category">
            <h4>Systems</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              High-performance development in C++ and architecting robust systems within large-scale corporate environments.
            </p>
          </div>
          <div class="stack-category">
            <h4>Product</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Translating real-world operational pain points into digital tools to solve network and project bottlenecks.
            </p>
          </div>
        </div>
      </section>

      <section id="talk">
        <h2 class="section-title">Talk to me about</h2>
        <div class="stack-list" style="margin-top: -8px;">
          <!-- Tech & Systems -->
          <span class="stack-item">Artificial Intelligence</span>
          <span class="stack-item">High-performance C++</span>
          <span class="stack-item">Network optimization</span>
          <span class="stack-item">Productivity systems</span>

          <!-- Business & Growth -->
          <span class="stack-item">Entrepreneurship</span>
          <span class="stack-item">E-commerce scaling</span>
          <span class="stack-item">Retail logistics</span>

          <!-- Hobbies & Interests -->
          <span class="stack-item">Sleight of Hand & Magic</span>
          <span class="stack-item">Playing Cards</span>
          <span class="stack-item">Mahjong</span>
          <span class="stack-item">Cue Sports</span>
          <span class="stack-item">Watches</span>
        </div>
      </section>

      <section id="ventures">
        <h2 class="section-title">Ventures</h2>
        <div class="projects-list">
          <a href="https://thatpetsupplystore.com" target="_blank" class="project-card">
            <div class="project-info">
              <h3>That Pet Supply Store</h3>
              <p>Curated essentials for your furry companions.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
          <a href="https://soi.com.sg" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Spot-On Inspectorate</h3>
              <p>Professional building inspection and consultancy services.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
          <a href="https://shopee.sg/robobooga" target="_blank" class="project-card">
            <div class="project-info">
              <h3>The Shuffle Spot</h3>
              <p>Premium playing cards and hobby supplies.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
        </div>
      </section>

      <section id="work">
        <h2 class="section-title">Selected Projects</h2>
        <div class="projects-list">
          <a href="https://tryscarab.netlify.app" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Scarab</h3>
              <p>A streamlined project management application for modern teams.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
          <a href="https://nolag-tool.netlify.app" target="_blank" class="project-card">
            <div class="project-info">
              <h3>NoLag Tool</h3>
              <p>HDB network management and optimization tool.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
        </div>
      </section>

      <section id="contact">
        <h2 class="section-title">Connect</h2>
        <p style="margin-bottom: 24px; color: var(--text-secondary);">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
        <div class="contact-links">
          <a href="mailto:nick.tan.xs@gmail.com" class="btn btn-primary">Email Me</a>
          <a href="https://linkedin.com/in/nicktanxs" class="btn social-btn">LinkedIn</a>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Nick Tan. All rights reserved.</p>
    </footer>
  </div>
`

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})
