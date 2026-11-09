import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Code2, Github, Globe2, Layers3,
  Mail, Menu, Sparkles, X, Zap
} from 'lucide-react'

const projects = [
  { number: '01', name: 'Digital experiences', type: 'WEB DEVELOPMENT', description: 'Modern websites and interfaces built to make ideas useful, clear and memorable.', icon: Globe2, status: 'IN PROGRESS' },
  { number: '02', name: 'Creative experiments', type: 'EXPERIMENTS', description: 'Small explorations in interaction, motion, design systems and emerging technology.', icon: Sparkles, status: 'EXPLORING' },
  { number: '03', name: 'Tools & utilities', type: 'PRODUCTIVITY', description: 'Practical tools that simplify everyday tasks and turn recurring problems into solutions.', icon: Layers3, status: 'PLANNING' },
]

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Myproject home">
          <span className="brand-mark">M<span>.</span></span>
          <span>MYPROJECT<span className="brand-sub"> / DIGITAL SPACE</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map(link => <a key={link.label} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="eyebrow"><span className="live-dot" /> INDEPENDENT DIGITAL SPACE <span className="eyebrow-line" /></div>
            <h1>Ideas are only<br />the <span className="gradient-text">beginning.</span></h1>
            <p className="hero-description">A space to explore, create and build. Discover projects, experiments and digital experiences shaped by curiosity.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button-quiet" href="#about">Discover more <ArrowDown size={16} /></a>
            </div>
            <div className="hero-meta"><span>DESIGN</span><i /> <span>DEVELOPMENT</span><i /> <span>EXPLORATION</span></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-core"><span className="core-symbol">M<span>.</span></span><span className="core-caption">MAKE IT REAL</span></div>
            <div className="float-card float-card-top"><Zap size={15} /> <span>BUILT WITH PURPOSE</span></div>
            <div className="float-card float-card-bottom"><Code2 size={16} /> <span>ALWAYS LEARNING</span></div>
            <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-kicker">01 / ABOUT THIS SPACE</div>
          <div className="intro-content">
            <h2>Not just a website.<br /><span>A place for what comes next.</span></h2>
            <div className="intro-text">
              <p>Myproject is an independent digital space by <strong>Lakindu Sathsara</strong> — bringing ideas, technology and creativity together.</p>
              <p>It grows through experiments, useful projects and the process of learning by building. This is where concepts take their first steps.</p>
              <a className="text-link" href="#contact">Have an idea? Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="stat-strip">
            <div><strong>01<span>+</span></strong><small>CREATIVE MINDSET</small></div>
            <div><strong>∞</strong><small>ROOM TO EXPLORE</small></div>
            <div><strong>100<span>%</span></strong><small>BUILT WITH CURIOSITY</small></div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things in <span className="gradient-text">motion.</span></h2></div>
            <p>A growing collection of work, ideas<br className="desktop-only" /> and experiments.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon
              return <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: index * .1 }}>
                <div className="project-number">{project.number}</div>
                <div className="project-icon"><Icon size={22} strokeWidth={1.6} /></div>
                <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div>
                <div className="project-end"><span className="status"><i />{project.status}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
              </motion.article>
            })}
          </div>
          <div className="projects-note"><span className="note-line" /> MORE PROJECTS WILL APPEAR HERE AS THEY TAKE SHAPE <span className="note-line" /></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <div className="section-kicker">03 / START A CONVERSATION</div>
            <h2>Have something<br /><span className="gradient-text">in mind?</span></h2>
            <p>Ideas grow when they're shared. Let's connect and see what we can create.</p>
            <a className="button-primary" href="mailto:lakindusathsara65@gmail.com">Get in touch <Mail size={17} /></a>
            <div className="contact-decoration">M.</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">M<span>.</span></span><span>MYPROJECT</span></a>
        <span className="footer-copy">© {new Date().getFullYear()} Myproject. Made with curiosity.</span>
        <a className="github-link" href="https://github.com/lakindusathsara44-bit/Myproject" target="_blank" rel="noreferrer"><Github size={16} /> SOURCE CODE <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  )
}

export default App