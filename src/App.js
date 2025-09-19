import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MaEducation from './components/maEducation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MaEducation />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
