import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Educations, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeate bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Educations />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
