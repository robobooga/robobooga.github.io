import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <nav>
        <div class="logo">nt.</div>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#talk">Talk</a></li>
          <li><a href="#ventures">Ventures</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="status-badge">
          <span class="status-dot"></span>
          Available for new projects
        </div>
        <h1>Hey, I'm Nick. I build businesses and solve problems with code.</h1>
        <p class="subtitle">
          Entrepreneur and developer. Leading
          <a href="https://thatpetsupplystore.com" target="_blank" style="color: var(--accent-color); text-decoration: underline;">That Pet Supply Store</a>,
          <a href="https://soi.com.sg" target="_blank" style="color: var(--accent-color); text-decoration: underline;">Spot-On Inspectorate</a>, and 
          <a href="https://shopee.sg/robobooga" target="_blank" style="color: var(--accent-color); text-decoration: underline;">The Shuffle Spot</a>.
        </p>
        <div class="contact-links">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a href="https://linkedin.com/in/nicktanxs" class="btn social-btn">LinkedIn</a>
        </div>
      </section>

      <section id="expertise">
        <h2 class="section-title">What I do</h2>
        <div class="stack-grid">
          <div class="stack-category">
            <h4>📦 Operations</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Managing suppliers, logistics, and retail scaling across multiple platforms with a focus on efficiency.
            </p>
          </div>
          <div class="stack-category">
            <h4>📈 Strategy</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Managing complex projects through operational excellence and strategic planning.
            </p>
          </div>
          <div class="stack-category">
            <h4>⚙️ Systems</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Building high-performance systems in C++ and architecting robust software for large-scale environments.
            </p>
          </div>
          <div class="stack-category">
            <h4>🚀 Product</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              Translating real-world operational pain points into digital tools that solve actual bottlenecks.
            </p>
          </div>
        </div>
      </section>

      <section id="talk">
        <h2 class="section-title">Talk to me about</h2>
        <div class="stack-list" style="margin-top: -8px;">
          <!-- Tech & Systems -->
          <span class="stack-item">🤖 Artificial Intelligence</span>
          <span class="stack-item">🛡️ Cybersecurity</span>
          <span class="stack-item">🌐 Network optimization</span>

          <!-- Business & Growth -->
          <span class="stack-item">📈 E-commerce scaling</span>
          <span class="stack-item">🏢 Entrepreneurship</span>
          <span class="stack-item">🚚 Retail logistics</span>

          <!-- Hobbies & Interests -->
          <span class="stack-item">🎱 Cue Sports</span>
          <span class="stack-item">🎮 Gaming</span>
          <span class="stack-item">💰 Personal Finance</span>
          <span class="stack-item">🃏 Sleight of Hand & Playing Cards</span>
        </div>
      </section>

      <section id="ventures">
        <h2 class="section-title">Ventures</h2>
        <div class="projects-list">
          <a href="https://thatpetsupplystore.com" target="_blank" class="project-card">
            <div class="project-info">
              <h3>That Pet Supply Store</h3>
              <p>Essentials for your furry companions.</p>
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

      <section id="projects">
        <h2 class="section-title">Current Projects</h2>
        <div class="projects-list">
          <a href="https://trykrema.netlify.app" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Krema (Currently building)</h3>
              <p>Organizational intelligence platform that transforms KPIs and 1-1 meeting notes into structured team alignment data and actionable insights.</p>
              <p class="project-tech">Built with Next.js 16, TypeScript, Postgres/Supabase, Prisma ORM, and Tailwind CSS.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
          <a href="https://tryscarab.netlify.app" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Scarab (On-hold)</h3>
              <p>Conversational project ledger that transforms chaotic chat history into structured, verifiable decision logs and automated task tracking.</p>
              <p class="project-tech">Built with TypeScript, Node.js, Grammy, Redis, Postgres, and LangChain orchestration.</p>
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
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelector('.nav-links')
    const menuToggle = document.querySelector('.mobile-menu-toggle')
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active')
      menuToggle.classList.remove('active')
    }
  })
})

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const navLinks = document.querySelector('.nav-links')

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active')
  navLinks.classList.toggle('active')
})
