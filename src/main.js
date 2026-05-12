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
          <a href="https://github.com/robobooga" class="btn social-btn">GitHub</a>
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
          <a href="https://nick-tan.com/ourobor-os" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Ourobor-OS</h3>
              <p>Portable, compounding knowledge system designed to serve as an "External Brain" for LLM agents. Transforms project documentation into a structured, machine-readable wiki that grows alongside your codebase.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
          <a href="https://nick-tan.com/data-bouncer" target="_blank" class="project-card">
            <div class="project-info">
              <h3>Data Bouncer</h3>
              <p>Extension that converts and sanitizes webpages and articles into markdown formats for modern LLMs to process.</p>
            </div>
            <div class="project-link-icon">↗</div>
          </a>
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
          <a href="https://github.com/robobooga" class="btn social-btn">GitHub</a>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Nick Tan. All rights reserved.</p>
    </footer>
  </div>
`

// Terminal intro
;(function initTerminalIntro() {
  if (new URLSearchParams(window.location.search).get('skip-intro') === 'true') return

  const LINES = [
    { prompt: '$ ', text: 'whoami' },
    { prompt: '',   text: 'Nick' },
  ]
  const TYPE_SPEED = 90
  const LINE_PAUSE = 500
  const EXIT_DELAY = 900

  const overlay = document.createElement('div')
  overlay.className = 'terminal-overlay'
  overlay.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-titlebar">
        <span class="terminal-dot terminal-dot--red"></span>
        <span class="terminal-dot terminal-dot--yellow"></span>
        <span class="terminal-dot terminal-dot--green"></span>
        <span class="terminal-title">bash</span>
      </div>
      <div class="terminal-body"></div>
    </div>
  `
  document.body.prepend(overlay)

  const termBody = overlay.querySelector('.terminal-body')
  let cursorEl = null

  const cursorInterval = setInterval(() => {
    if (cursorEl) cursorEl.classList.toggle('terminal-cursor--hidden')
  }, 530)

  function startLine(lineIndex) {
    const line = LINES[lineIndex]
    const isOutput = line.prompt === ''
    const div = document.createElement('div')
    div.className = 'terminal-line' + (isOutput ? ' terminal-output' : '')
    if (line.prompt) {
      const promptEl = document.createElement('span')
      promptEl.className = 'terminal-prompt'
      promptEl.textContent = line.prompt
      div.appendChild(promptEl)
    }
    const textEl = document.createElement('span')
    if (isOutput) textEl.className = 'terminal-name'
    div.appendChild(textEl)
    cursorEl = document.createElement('span')
    cursorEl.className = 'terminal-cursor'
    cursorEl.textContent = '█'
    div.appendChild(cursorEl)
    termBody.appendChild(div)
    typeChars(lineIndex, 0, textEl)
  }

  function typeChars(lineIndex, charIndex, textEl) {
    const line = LINES[lineIndex]
    if (charIndex < line.text.length) {
      textEl.textContent = line.text.slice(0, charIndex + 1)
      setTimeout(() => typeChars(lineIndex, charIndex + 1, textEl), TYPE_SPEED)
      return
    }
    if (lineIndex < LINES.length - 1) {
      cursorEl.remove()
      cursorEl = null
      setTimeout(() => startLine(lineIndex + 1), LINE_PAUSE)
      return
    }
    setTimeout(() => {
      overlay.classList.add('terminal-exit')
      setTimeout(() => {
        clearInterval(cursorInterval)
        overlay.remove()
      }, 600)
    }, EXIT_DELAY)
  }

  startLine(0)
}())

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
