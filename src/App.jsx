import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  //home page....../home

  //about page....../about

  //project page....../project
  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/project" element={ <Project/> } />

        </Routes>

      </MainLayout>

    
    </BrowserRouter>
  );
}

export default App;


