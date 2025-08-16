import React from 'react'
import Navbar from './componets/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Project from './sections/Projects.jsx'
import ProjectDetails from './sections/ProjectDetails.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
  return (
    <div className='px-5 scroll-smooth'>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="project-details"><ProjectDetails /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default App
