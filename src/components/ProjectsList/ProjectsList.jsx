import "./ProjectsList.css";
import Projects from "../Projects/Projects";
import {projects_img} from "../../data";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const ProjectsList = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-titles">My Projects</h1>
          <p className="pl-desc">These are a few projects I've completed in school and during my free time!
          blah blayh blasldk askljvoi2qn veionv
          </p>
        </div>
        <div className="pl-list">
          {projects_img.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProjectsList;
