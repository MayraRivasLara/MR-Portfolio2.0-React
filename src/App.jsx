import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import ContactMe from './components/contact/contact-me';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsGallery from './components/projectsGallery/projectsGallery';

function App() {
  //home page....../home

  //about page....../about

  //project page....../projects

  //contact me page ......./contact
  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/projects-gallery" element={ <ProjectsGallery/> } />
          <Route path="/contact"element={ <ContactMe/> } />

        </Routes>

      </MainLayout>

    
    </BrowserRouter>
  );
}

export default App;


