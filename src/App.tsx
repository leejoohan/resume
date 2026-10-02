import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesColumnIncreasing, ChevronDown, Cloud, CodeXml, Mail, Phone, UsersRound } from 'lucide-react'
import { siAmazonwebservices, siNodedotjs, siReact, siTypescript } from 'simple-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { education, experiences, impacts, profile, skillGroups } from '@/data/resume'
import profilePhoto from '../assets/images/profile-portrait.png'

const navigation = [
  { id: 'overview', label: 'Overview' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const capabilities = [
  { label: 'Cloud & Architecture', icon: Cloud },
  { label: 'AI & Intelligent Automation', icon: BrainCircuit },
  { label: 'Software Engineering', icon: CodeXml },
  { label: 'Business Development', icon: ChartNoAxesColumnIncreasing },
  { label: 'Team Leadership', icon: UsersRound },
]
const keySkills = [
  { label: 'AWS', icon: siAmazonwebservices },
  { label: 'TypeScript', icon: siTypescript },
  { label: 'React', icon: siReact },
  { label: 'Node.js', icon: siNodedotjs },
]

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.slice(1)
      setActiveSection(navigation.some((item) => item.id === id) ? id : 'overview')
    }
    const syncPageTop = () => {
      if (window.scrollY === 0) setActiveSection('overview')
    }
    syncHash()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('scroll', syncPageTop, { passive: true })
    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('scroll', syncPageTop)
    }
  }, [])

  return (
    <div className="page-shell">
      <a className="skip-link" href="#experience">Skip to experience</a>
      <header id="overview" className="hero">
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}
              className={activeSection === id ? 'active' : ''} onClick={() => setActiveSection(id)}>{label}</a>
          ))}
        </nav>
        <h1 className="masthead">{profile.name}</h1>
        <div className="intro-grid">
          <div className="intro-statement">
            <h2>{profile.headline}</h2>
            <p>{profile.tagline}</p>
          </div>
          <div className="intro-profile">
            <p className="profile-summary">{profile.summary}</p>
            <p className="current-role">{profile.currentRole}</p>
            <p className="current-company">{profile.currentCompany} <span aria-hidden="true">·</span> {profile.currentPeriod}</p>
            <div className="hero-actions">
              <Button asChild className="primary-action"><a href="#experience" onClick={() => setActiveSection('experience')}>View experience <ArrowRight aria-hidden="true" /></a></Button>
              <Button variant="outline" asChild><a href="#contact" onClick={() => setActiveSection('contact')}>Get in touch <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="career-grid">
          <section id="experience" className="experience-section" aria-labelledby="experience-title">
            <h2 id="experience-title" className="section-title">Experience journey</h2>
            <ol className="timeline">
              {experiences.map((experience, index) => (
                <li className="timeline-row" key={experience.id}>
                  <div className="timeline-date">{index < 4 ? <>{experience.period.split("–")[0]}–<br />{experience.period.split("–")[1]}</> : experience.period}</div>
                  <span className="timeline-marker" aria-hidden="true" />
                  <details className="role-details">
                    <summary aria-label={`Details: ${experience.role} at ${experience.company}`}>
                      <h3 className="role-heading"><span className="role-title">{experience.role}</span><ChevronDown className="disclosure-icon" aria-hidden="true" /></h3>
                      <span className="role-company">{experience.company}</span>
                      <span className="role-summary">{experience.summary}</span>
                    </summary>
                    <div className="role-body">
                      <ul className="achievement-list">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                      {experience.technologies.length > 0 && <div className="technology-list" aria-label="Technologies">{experience.technologies.map((technology) => <Badge variant="outline" key={technology}>{technology}</Badge>)}</div>}
                    </div>
                  </details>
                </li>
              ))}
            </ol>
          </section>

          <aside className="career-sidebar" aria-label="Career highlights and capabilities">
            <section id="impact" aria-labelledby="impact-title">
              <h2 id="impact-title" className="section-title">Selected career impact</h2>
              <div className="impact-list">{impacts.map((impact) => (
                <div className="impact-item" key={impact.value}>
                  <p className="impact-value">{impact.value}</p>
                  <p className="impact-label">{impact.label}</p>
                  <p className="impact-context">{impact.context}</p>
                </div>
              ))}</div>
            </section>
            <section className="capabilities-section" aria-labelledby="capabilities-title">
              <h2 id="capabilities-title" className="section-title">Core capabilities</h2>
              <ul className="capability-list">{capabilities.map(({ label, icon: Icon }) => (
                <li key={label}><Icon aria-hidden="true" strokeWidth={1.8} /><span>{label}</span></li>
              ))}</ul>
            </section>
            <section className="skills-section" aria-labelledby="skills-title">
              <h2 id="skills-title" className="section-title">Key technical skills</h2>
              <ul className="key-skills">{keySkills.map(({ label, icon }) => (
                <li key={label}><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d={icon.path} /></svg><span>{label}</span></li>
              ))}</ul>
              <details className="all-skills">
                <summary>Explore the full toolkit <ChevronDown aria-hidden="true" /></summary>
                <div className="skill-groups">{skillGroups.map((group) => (
                  <div className="skill-group" key={group.label}><h3>{group.label}</h3><div className="technology-list">{group.skills.map((skill) => <Badge variant="outline" key={skill}>{skill}</Badge>)}</div></div>
                ))}</div>
              </details>
            </section>
          </aside>
        </div>

        <section className="education-section" aria-labelledby="education-title">
          <h2 id="education-title" className="section-title">Education</h2>
          <div className="education-grid">{education.map((item) => (
            <article key={item.degree} className="education-item"><p className="education-date">{item.period}</p><h3>{item.degree}</h3><p>{item.institution}</p></article>
          ))}</div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <img className="contact-portrait" src={profilePhoto} alt="Lee Joo Han" width="88" height="88" loading="lazy" decoding="async" />
            <h2 id="contact-title">Let’s connect.<ArrowUpRight aria-hidden="true" /></h2>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
            <a href={profile.phoneHref}><Phone aria-hidden="true" /><span>{profile.phone}</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <footer><span>{profile.name}</span><a href="#overview">Back to top <ArrowDown aria-hidden="true" /></a></footer>
    </div>
  )
}

export default App
