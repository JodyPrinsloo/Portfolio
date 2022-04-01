import "./ProjectsList.css";
import Projects from "../Projects/Projects";
import {projects_img} from "../../data";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import DrStrangePage from "../../DrStrange.jsx";
//UI Image Imports
import BBMockup from "../../img/Buzzy-Bee-Mockups.png";
import ScoutMockup from "../../img/Scout.png";
import CraigslistMockup from "../../img/Craigslist-Mockup.png";

//Graphic Design Image Imports
import DrStrange from "../../img/Dr-Strange-Dribbble.png";
import LeadTheWay from "../../img/Lead-The-Way-Dribbble.png";
import Gihun from "../../img/Gi-Hun-Dribbble.png";

//Other School and Freetime Projects
import TypographyPoster from "../../img/Poster-Mockup.png";
import BBLogo from "../../img/Buzzy-Bee-Logo.png";
import BBBusinessCard from "../../img/Business-Card-Mockup.png";
import CLLogo from "../../img/Craigslist-Logo.png";
import Kaneki from "../../img/JodyxKaneki-Dribbble.png";
import Minato from "../../img/JodyxMinato-Dribbble.png";
import Microphone from "../../img/Realistic-Illustrator-Drawing-Dribbble.png";
import SteadyLogo from "../../img/Steady-Logo.png";


const ProjectsList = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-main-title" style={{color: darkMode ? "#00FFD1" : "#006654"}}>My Projects</h1>
          <p className="pl-desc">These are a few projects I've completed in school and during my free time! If you want to find out more about each indiviual project, feel free to click the image or to shoot me an email down in the contact section!
          </p>
        </div>
        {/* UI UX Section */}
        <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>UI/UX Work</h1>
        <div className="br" style={{color: darkMode ? "#00FFD1" : "#006654"}}></div>
          <div className="pl-list">
              <Projects img={BBMockup} link="https://dribbble.com/shots/17443792-Mobile-Application-UI-UX-Design-Buzzy-Bee" title="Buzzy Bee - Mobile Application"/>
              <Projects img={ScoutMockup} link="" title="Scout - Anime Watchlist Website"/>
              <Projects img={CraigslistMockup} link="https://dribbble.com/shots/17443718-UI-UX-Craigslist-Redesign-Web-Mobile" title="Craigslist - Redesign"/>
          </div>
        {/* Graphic Design Section */}
        <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>Graphic Design Work</h1>
        <div className="br" style={{color: darkMode ? "#00FFD1" : "#006654"}}></div>
          <div className="pl-list">
              <Projects img={DrStrange} link="https://dribbble.com/shots/17443737-Photo-Manipulation-Dr-Strange" title="Dr. Strange - Photoshop Assignment"/>
              <Projects img={LeadTheWay} link="https://dribbble.com/shots/17443745-Photo-Manipulation-Unknown-Territory" title="Lead The Way - Freetime Photoshop Project"/>
              <Projects img={Gihun} link="https://dribbble.com/shots/17443731-Digital-Art-Squid-Game-Drawing" title="Gi Hun - Photoshop Assignment"/>
          </div>
        {/* Other School and Freetime Projects */}
        <h1 className="pl-titles" style={{color: darkMode ? "#00FFD1" : "#006654"}}>Other School and Freetime Projects</h1>
        <div className="br" style={{color: darkMode ? "#00FFD1" : "#006654"}}></div>
          <div className="pl-list">
              <Projects img={TypographyPoster} link="https://dribbble.com/shots/17443761-Typography-Poster-Layout-Assignment" title="The Proms - Typography Assignment"/>
              <Projects img={Microphone} link="https://dribbble.com/shots/17443749-Illustrator-Vector-Drawing-HyperX-Quadcast" title="HyperX Quadcast - Illustrator Assignment"/>
              <Projects img={BBBusinessCard} link="https://dribbble.com/shots/17443778-Business-Cards-Buzzy-Bee" title="Buzzy Bee - Business Cards"/>
              <Projects img={BBLogo} link="https://dribbble.com/shots/17443702-Logo-Buzzy-Bee" title="Buzzy Bee - Logo"/>
              <Projects img={SteadyLogo} link="https://dribbble.com/shots/17443694-Logo-Steady" title="Steady - Logo"/>
              <Projects img={CLLogo} link="https://dribbble.com/shots/17443705-Logo-Craigslist-Redesign" title="Craigslist - Logo"/>
              <Projects img={Kaneki} link="https://dribbble.com/shots/17443724-Anime-Drawing-Myself-x-Kaneki" title="Anime Freetime Drawing - Kaneki"/>
              <Projects img={Minato} link="https://dribbble.com/shots/17443721-Anime-Drawing-Myself-x-Minato" title="Anime Freetime Drawing - Minato"/>
          </div>
    </div>
  )
}

export default ProjectsList;
