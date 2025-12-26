import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';   
import Projects from './components/Project';
import Footer from './components/Footer';
import './App.css';
import resume from './assets/resume.pdf'; 
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Projects /> 
        <Technologies />
        <section className="resume-section text-center right">
  <a href={resume} download className="btn btn-lg btn-dark">
    Download Resume
  </a>
</section>
      </main>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
