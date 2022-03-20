import "./ProjectsList.css";
import Projects from "../Projects/Projects";
import {projects_img} from "../../data";
import { useContext } from "react";
import { ThemeContext } from "../../context";

//UI Image Imports
import BBMockup from "../../img/Buzzy-Bee-Mockups.png";
import ScoutMockup from "../../img/Scout.png";
import CraigslistMockup from "../../img/Craigslist-Mockup.png";

//Graphic Design Image Imports
import DrStrange from "../../img/Dr-Strange-Dribbble.png";
import LeadTheWay from "../../img/Lead-The-Way-Dribbble.png";
import Gihun from "../../img/Gi-Hun-Dribbble.png";

const ProjectsList = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>My Projects</h1>
          <p className="pl-desc">These are a few projects I've completed in school and during my free time! If you want to find out more about each indiviual project, feel free to click the image or to shoot me an email down in the contact section!
          </p>
        </div>
        <div className="pl-list">
          {projects_img.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
        {/* UI UX Section */}
        <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>UI/UX Work</h1>
          <div className="uiux">
              <Projects img={BBMockup} link="https://dribbble.com/shots/17443792-Mobile-Application-UI-UX-Design-Buzzy-Bee"/>
              <Projects img={ScoutMockup}/>
              <Projects img={CraigslistMockup} link="https://dribbble.com/shots/17443718-UI-UX-Craigslist-Redesign-Web-Mobile"/>
          </div>
        {/* Graphic Design Section */}
        <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>Graphic Design Work</h1>
          <div className="uiux">
              <Projects img={DrStrange} link="https://dribbble.com/shots/17443737-Photo-Manipulation-Dr-Strange"/>
              <Projects img={LeadTheWay} link="https://dribbble.com/shots/17443745-Photo-Manipulation-Unknown-Territory"/>
              <Projects img={Gihun} link="https://dribbble.com/shots/17443731-Digital-Art-Squid-Game-Drawing"/>
          </div>
    </div>
  )
}

export default ProjectsList;
