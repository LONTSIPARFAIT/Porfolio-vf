import './App.css'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/Navbar'

export default function App() {

  return (
    <div>
      <div className="p-5 md:px-[15%] ">
        <NavBar />
      </div>
      <Home />
      <About />
    </div>
  )
}
