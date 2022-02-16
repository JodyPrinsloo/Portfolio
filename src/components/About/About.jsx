import "./About.css"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg" style={{backgroundColor: darkMode ? "#313030" : "#DEE1E3"}}></div>
                <div className="a-card">
                    <img src="https://placekitten.com/500/500" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">This is a long established fact that a reader will be distracted
                by the readable content
                </p>
                <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sequi dolore ex facere eum! Tempora odit similique unde iure mollitia voluptatum, 
                ut dolore enim cum saepe numquam porro repellendus nihil aliquam.
                </p>
                <div className="a-award">
                     {/*This is a placeholder image for now */}
                    <img src="https://placekitten.com/250/250" alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title" style={{color: darkMode ? "#00FFD1" : "#666666"}}>Award #1</h4>
                        <p className="a-award-desc">This is a short description of an award I have received</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

 export default About;