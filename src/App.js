import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Skill from "./Skill";
import './App.css';
import Projects from "./Projects";
import Contact from "./Contact";


function App() {
  return (
    <div id='body'>
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
