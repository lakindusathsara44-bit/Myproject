import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, BookOpen, Calculator, Code2, Compass,
  ExternalLink, Github, Globe2, Layers3, Lightbulb, Mail, Menu,
  Sparkles, Terminal, Workflow, X
} from 'lucide-react'

const navigation = [
  { label: 'Overview', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#focus' },
  { label: 'About', href: '#about' },
]

const projects = [
  {
    number: '01',
    title: 'Tenses',
    category: 'LEARNING EXPERIENCE',
    description: 'An interactive space for learning English tenses through clear explanations, practice activities and progress feedback.',
    status: 'LIVE PROJECT',
    statusType: 'live',
    icon: BookOpen,
    href: 'https://lakindusathsara44-bit.github.io/Tenses/',
    linkLabel: 'Visit project',
  },
  {
    number: '02',
    title: 'Constantine',
    category: 'KNOWLEDGE PLATFORM',
    description: 'A digital learning project exploring Catholic and Orthodox traditions, references and educational content.',
    status: 'LIVE PROJECT',
    statusType: 'live',
    icon: Globe2,
    href: 'https://constantine.apokolips.xyz',
    linkLabel: 'Visit project',
  },
  {
    number: '03',
    title: 'SLIATE GPA Calculator',
    category: 'EDUCATION TOOL',
    description: 'A practical calculator concept designed around higher national diploma courses, modules and academic progress.',
    status: 'IN DEVELOPMENT',
    statusType: 'progress',
    icon: Calculator,
    href: 'https://github.com/lakindusathsara44-bit/GPAcalculator',
    linkLabel: 'View repository',
  },
  {
    number: '04',
    title: 'Website Builder',
    category: 'WEB TOOL',
    description: 'An experimental browser-based workspace for creating and editing simple web pages.',
    status: 'IN DEVELOPMENT',
    statusType: 'progress',
    icon: Terminal,
    href: 'https://github.com/lakindusathsara44-bit/webbuilder',
    linkLabel: 'View repository',
  },
]

const focusAreas = [
  {
    icon: Code2,
    number: '01',
    title: 'Web experiences',
    description: 'Building responsive websites and interfaces with a focus on clarity, usability and thoughtful details.',
    tags: ['React', 'Vite', 'JavaScript'],
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Learning tools',
    description: 'Turning study topics and everyday academic needs into approachable, useful digital tools.',
    tags: ['Education', 'Practice', 'Utility'],
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Ideas & experiments',
    description: 'Exploring new concepts, testing interactions and learning by making real things.',
    tags: ['UI/UX', 'Motion', 'Prototypes'],
  },
]

const steps = [
  { number: '01', title: 'Explore', description: 'Start with a question, a useful problem or a new idea worth exploring.', icon: Compass },
  { number: '02', title: 'Shape', description: 'Organise the concept into a clear experience with a purpose and direction.', icon: Layers3 },
  { number: '03', title: 'Build', description: 'Turn the plan into something people can open, use and improve.', icon: Workflow },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" id="home">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Myproject home">
            <span className="brand-symbol">M<span>/</span></span>
            <span className="brand-word">MYPROJECT<span className="brand-caption">DIGITAL WORKSPACE</span></span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            {navigation.map(item => (
              <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's connect <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="eyebrow"><span className="eyebrow-pulse" /> AN INDEPENDENT DIGITAL WORKSPACE</div>
            <h1>Curiosity becomes<br /><span className="text-gradient">something real.</span></h1>
            <p className="hero-lead">
              A place to explore ideas, build useful digital experiences and share projects shaped by technology and creativity.
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#about">Get to know me <ArrowRight size={16} /></a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-mark" />
              DESIGNED TO EXPLORE. BUILT TO KEEP GROWING.
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            aria-label="Abstract preview of the Myproject digital workspace"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cross cross-left">+</div>
            <div className="art-cross cross-right">+</div>
            <div className="workspace-card">
              <div className="workspace-topbar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>MYPROJECT / WORKSPACE</span>
                <span className="workspace-menu">•••</span>
              </div>
              <div className="workspace-body">
                <div className="workspace-heading">
                  <div>
                    <span className="workspace-overline">PERSONAL DIGITAL SPACE</span>
                    <strong>Make room<br />for ideas.</strong>
                  </div>
                  <div className="workspace-emblem"><Sparkles size={25} /></div>
                </div>
                <div className="workspace-divider" />
                <div className="workspace-items">
                  <div className="workspace-item">
                    <span className="workspace-item-icon"><Code2 size={15} /></span>
                    <span><b>Web experiences</b><small>Design & development</small></span>
                    <ArrowUpRight size={14} />
                  </div>
                  <div className="workspace-item">
                    <span className="workspace-item-icon purple"><Lightbulb size={15} /></span>
                    <span><b>Creative ideas</b><small>Experiments & concepts</small></span>
                    <ArrowUpRight size={14} />
                  </div>
                  <div className="workspace-item">
                    <span className="workspace-item-icon blue"><BookOpen size={15} /></span>
                    <span><b>Learning tools</b><small>Knowledge & utility</small></span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <div className="workspace-bottom"><span><i /> ALWAYS IN PROGRESS</span><span>EST. 2026</span></div>
              </div>
            </div>
            <div className="floating-note note-top"><span className="note-spark"><Sparkles size={14} /></span><span>THINK / CREATE / BUILD</span></div>
            <div className="floating-note note-bottom"><span className="note-code"><Terminal size={15} /></span><span>IDEAS INTO INTERFACES</span></div>
          </motion.div>
          <a className="hero-scroll" href="#projects"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="principles-strip" aria-label="Myproject principles">
          <div className="principles-inner">
            <span>INDEPENDENT BY NATURE</span><i />
            <span>CURIOUS BY DESIGN</span><i />
            <span>BUILT THROUGH LEARNING</span><i />
            <span>OPEN TO WHAT'S NEXT</span>
          </div>
        </section>

        <section className="projects-section section-container" id="projects">
          <div className="section-intro">
            <div>
              <div className="section-label"><span>01</span> / SELECTED PROJECTS</div>
              <h2>Ideas taking<br /><span className="text-muted">their own shape.</span></h2>
            </div>
            <div className="section-intro-copy">
              <p>A selection of digital projects, learning experiences and tools. Each one starts with an idea and grows through building.</p>
              <span className="intro-side-note">A WORK IN PROGRESS — ALWAYS.</span>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="project-card-top">
                    <span className="project-index">PROJECT / {project.number}</span>
                    <span className={project.statusType === 'live' ? 'project-status is-live' : 'project-status is-progress'}>
                      <i /> {project.status}
                    </span>
                  </div>
                  <div className="project-icon"><Icon size={23} strokeWidth={1.65} /></div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} <ArrowUpRight size={16} />
                  </a>
                </motion.article>
              )
            })}
          </div>
          <div className="section-endnote"><span /> MORE IDEAS WILL FIND THEIR WAY HERE <span /></div>
        </section>

        <section className="focus-section" id="focus">
          <div className="section-container">
            <div className="section-intro focus-intro">
              <div>
                <div className="section-label"><span>02</span> / AREAS OF FOCUS</div>
                <h2>Different interests.<br /><span className="text-muted">One creative process.</span></h2>
              </div>
              <div className="section-intro-copy">
                <p>The work moves across a few connected areas — from making websites to creating tools that make learning and everyday tasks easier.</p>
              </div>
            </div>
            <div className="focus-grid">
              {focusAreas.map(item => {
                const Icon = item.icon
                return (
                  <article className="focus-card" key={item.number}>
                    <div className="focus-card-head"><span>{item.number} / FOCUS</span><Icon size={21} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="focus-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="approach-section section-container">
          <div className="section-label"><span>03</span> / HOW THINGS TAKE SHAPE</div>
          <div className="approach-heading">
            <h2>From first thought<br />to <span className="text-gradient">finished form.</span></h2>
            <p>Good work is a process. Keep it curious, keep it clear, and keep improving with every iteration.</p>
          </div>
          <div className="steps-grid">
            {steps.map(step => {
              const Icon = step.icon
              return (
                <article className="step-card" key={step.number}>
                  <div className="step-top"><span>{step.number}</span><Icon size={20} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-rule" />
                </article>
              )
            })}
          </div>
        </section>

        <section className="about-section section-container" id="about">
          <div className="about-panel">
            <div className="about-copy">
              <div className="section-label"><span>04</span> / A LITTLE ABOUT ME</div>
              <h2>Built with curiosity.<br /><span className="text-muted">Driven by possibility.</span></h2>
              <p>
                I'm <strong>Lakindu Sathsara</strong> — a student and independent creator interested in technology, web development and building useful digital experiences.
              </p>
              <p>
                Myproject is a space to bring that work together: a place for active projects, new experiments and the lessons that come from making things.
              </p>
              <a className="inline-link" href="mailto:lakindusathsara65@gmail.com">Say hello <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-side">
              <div className="about-monogram">M<span>/</span></div>
              <div className="about-side-caption">PERSONAL DIGITAL WORKSPACE</div>
              <div className="about-side-line" />
              <div className="about-side-meta"><span>BASED IN</span><b>SRI LANKA</b></div>
              <div className="about-side-meta"><span>INTERESTED IN</span><b>TECH · DESIGN · LEARNING</b></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <div className="section-label"><span>05</span> / LET'S CONNECT</div>
            <div className="contact-content">
              <div>
                <h2>Have an idea<br />worth <span className="text-gradient">building?</span></h2>
                <p>Whether it's a project, a collaboration or simply a conversation about technology, I'd be glad to hear from you.</p>
              </div>
              <a className="button button-primary contact-button" href="mailto:lakindusathsara65@gmail.com">
                Start a conversation <Mail size={17} />
              </a>
            </div>
            <div className="contact-email">LAKINDUSATHSARA65@GMAIL.COM</div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-container">
        <a className="brand footer-brand" href="#home">
          <span className="brand-symbol">M<span>/</span></span>
          <span className="brand-word">MYPROJECT<span className="brand-caption">DIGITAL WORKSPACE</span></span>
        </a>
        <span className="footer-copy">© {new Date().getFullYear()} Myproject · Made with curiosity.</span>
        <a className="footer-github" href="https://github.com/lakindusathsara44-bit/Myproject" target="_blank" rel="noreferrer">
          <Github size={16} /> SOURCE CODE <ExternalLink size={13} />
        </a>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
      </footer>
    </div>
  )
}

export default App
