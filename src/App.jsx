import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';   
import Projects from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects /> 
      <section className="resume-section text-center">
  <a href="/resume.pdf" download className="btn btn-lg btn-dark">
    Download Resume
  </a>
</section>

      <Footer />
    </div>
  );
}

export default App;
