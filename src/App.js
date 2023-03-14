import './App.css';
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Particle from './components/utils/Particle';

function App() {


  return (
    <div className="App">
      <Particle/>
      <Topbar/>
      <Navbar/>
      <div className="sections">
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
