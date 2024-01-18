import './App.css'
import Experience from './components/Experience'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App bg-[#161513]">
      <Header />
      <Home />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App

// TODO LIST:
// - Add social media icons/links
// - Add menu button for mobile
// - Add resume file to /public
