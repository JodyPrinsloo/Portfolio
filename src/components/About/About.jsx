import "./About.css"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
    return (
        <div className="a">
            <div className="a-left">
                {/* <div className="a-card bg" style={{backgroundColor: darkMode ? "#313030" : "#DEE1E3"}}></div> */}
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
                <div className="skillsToolsCont">
                     <div className="SkillsCont">
                         <div className="SkillsTitleBar">
                             <h2 className="SkillsHeader">Soft Skills</h2>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Communication</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Organization</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Team Oriented</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Adaptive</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Eye For Detail</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Punctual</p>
                         </div>
                         <div className="BulletSkill">
                            <img src="https://placekitten.com/50/50" alt="" className="skillImg" />
                            <p className="SkillName">Works Well Under Pressure</p>
                         </div>
                     </div>
                     <div className="ToolsCont">
                         <div className="ToolsTitleBar">
                            <h2 className="SkillsHeader">Toolset</h2>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">Adobe Photoshop</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">Adobe Illustrator</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">Adobe After Effects</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">Adobe InDesign</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">Figma</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">HTML5, CSS, Javascript</p>
                         </div>
                         <div className="BulletTool">
                             <img src="https://placekitten.com/50/50" alt="" className="toolImg" />
                             <p className="ToolName">MySQL, jQuery</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

 export default About;