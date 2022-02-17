import Toggle from "./components/Toggle/Toggle";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Contact from "./components/Contact/Contact.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    document.title = "Jody's Portfolio"
  }, [])
  
  return <div style={{backgroundColor: darkMode ? "#202020" : "#ECF0F3", 
                      color: darkMode && "white"}}>
    <Toggle />
    <Intro/>
    <About/>
    <ProjectsList/>
    <Contact />
    </div>;
};

export default App;