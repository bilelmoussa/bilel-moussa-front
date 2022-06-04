import React, { useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom"
import ReactGA from "react-ga4";

import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Projects from './routes/Projects'
import Project from './routes/Project'
import ProjectsDash from './routes/ProjectsDash'
import Skills from './routes/Skills'
import NotFoundPage from './routes/NotFoundPage'

ReactGA.initialize(`${process.env.GA_MEASUREMENT_ID}`)

function App() {
  let location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Projects />} >
          <Route index element={<ProjectsDash />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
