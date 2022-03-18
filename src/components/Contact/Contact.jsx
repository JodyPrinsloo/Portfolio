import "./Contact.css";
import Linkedin from "../../img/linkedin.png";
import Phone from "../../img/phone.png";
import Dribbble from "../../img/dribbble.png";
import Resume from "../../img/resume.png";
import ResumeFile from "../../img/Resume.pdf";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com'
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_wb1ncea', 
            'template_ikl8c3r', 
            formRef.current, 
            'user_Sf9DdqBLNrNINk8gGshtK'
            )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true);
            }, 
            (error) => {
                console.log(error.text);
            }
        );

    }
  return (
    <div className="c">
      <div className="c-bg" style={{backgroundColor: darkMode ? "#313030" : "#DEE1E3"}}></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title" style={{color: darkMode ? "#00FFD1" : "#006654"}}>Let's discuss your project!</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img  src={Resume} alt="LinkedIn Logo" className="c-icon" />
                      <a href={ResumeFile} target="_blank">My Resume!</a>
                  </div>
                  <div className="c-info-item">
                      <img  src={Linkedin} alt="LinkedIn Logo" className="c-icon" />
                      <a href="https://www.linkedin.com/in/jodyprinsloo/" target="_blank">My LinkedIn Account!</a>
                  </div>
                  <div className="c-info-item">
                      <img  src={Dribbble} alt="LinkedIn Logo" className="c-icon" />
                      <a href="https://dribbble.com/JodyPrinsloo11" target="_blank">My Dribbble Account!</a>
                  </div>
                  <div className="c-info-item">
                      <img  src={Phone} alt="LinkedIn Logo" className="c-icon" />
                      <p>778-235-7633</p>
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b className="bolded">What's your story?</b> Get in touch. Always freelancing if the right project
                  comes along!
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{backgroundColor: darkMode && "#313030", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name"/>
                  <input style={{backgroundColor: darkMode && "#313030", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject"/>
                  <input style={{backgroundColor: darkMode && "#313030", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email"/>
                  <textarea style={{backgroundColor: darkMode && "#313030", color: darkMode && "white"}} rows="5" placeholder="Message" name="message"></textarea>
                  <button style={{backgroundColor : darkMode ? "#00FFD1" : "#006654",
                                    color: darkMode ? "black" : "white" }}>Submit</button>
                  {done && "Thanks for reaching out! I'll be sure to respond as fast as I can!"}
              </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
