import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';
import bgImg from './assets/imgs/background.png';
import { Paper } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Hero />

      <About />
      <Project />
      <Contact />
      {/* <Container maxWidth="lg">the bottom</Container> */}
      <Footer />
    </>
  );
}

export default App;
