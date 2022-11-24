import { Box } from '@mui/material';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <Box sx={{ minWidth: '375px', width: '100%', overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
