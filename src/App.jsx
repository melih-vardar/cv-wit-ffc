import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ModeSwitch from './components/ModeSwitch'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className="flex flex-col items-center bg-[#FFFFFF] text-black dark:bg-[#252128] dark:text-[#FFFFFF]">
      <div className="w-full sm:w-3/5 px-4 sm:px-0 flex flex-col items-center">
        <ModeSwitch />
        <Header />
        <Hero />
        <div className="flex flex-col gap-10">
          <Skills />
          <Profile />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
