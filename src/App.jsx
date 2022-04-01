import Toggle from "./components/Toggle/Toggle";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Contact from "./components/Contact/Contact.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";
import { BrowserRouter, Route } from "react-router-dom";

//Pages
import DrStrangePage from "./DrStrange";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    document.title = "Jody Prinsloo's Portfolio"
  }, [])
  
  return <BrowserRouter>
      <div style={{backgroundColor: darkMode ? "#202020" : "#ECF0F3", color: darkMode && "white"}}>
        <Toggle />
        <Intro/>
        <ProjectsList />
        <About/>
        <Contact />
      </div>
    </BrowserRouter>
};

export default App;