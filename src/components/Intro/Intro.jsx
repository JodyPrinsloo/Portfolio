import "./Intro.css";
import Me from "../../img/Portfolio-Jody.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Jody Prinsloo</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item" style={{color: darkMode ? "#00FFD1" : "#006654"}}>UI/UX Designer | Graphic Designer | Photographer</div>
                    </div>
                </div>
                <p className="i-desc">
                Hey everyone! My name is Jody Prinsloo and I am a graphic and UI/UX designer.
                <br className="br-desc"/>With my design work I am always looking to push the envelope and expand my knowledge for something I am passionate about, Design!
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg" style={{backgroundColor: darkMode ? "#313030" : "#DEE1E3" }}></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro
