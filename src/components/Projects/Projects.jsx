import "./Projects.css"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Link } from "react-router-dom";
import DrStrangePage from "../../DrStrange";

const Projects = ({img, link, id}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p">
        <div className="p-browser" style={{backgroundColor: darkMode ? "#DEE1E3" : "#313030",
      borderColor: darkMode ? "#DEE1E3" : "#313030"
      }}>
          <div className="p-circle-r"></div>
          <div className="p-circle-y"></div>
          <div className="p-circle-g"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={img} className="p-img"/>
        </a>
    </div>
  )
}

export default Projects
