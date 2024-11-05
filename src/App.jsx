import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Hero from './components/Hero'
import ModeSwitch from './components/ModeSwitch'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex justify-center ${theme === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className="w-3/5 flex flex-col items-center">
        <ModeSwitch />
        <Header />
        <Hero />
        <div className="flex flex-col gap-10">
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
