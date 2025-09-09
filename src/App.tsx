import './App.css'
import Home from './components/Home'
import NavBar from './components/Navbar'

export default function App() {

  return (
    <div>
      <div className="p-5 lg:px-[15%] ">
        <NavBar />
      </div>
      <Home />
    </div>
  )
}
