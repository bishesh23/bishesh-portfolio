import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import back from '../../assets/back.jpg'

const About = () => {
return(
<div id ='about' className='about'>
<div className='about-title'>
<h1> About Me </h1>
<img src={theme_pattern}/>
</div>
<div className="about-sections">
    <div className="about-left">
        <img src={back}/>
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>
                I worked for 3 years as a Software QA Engineer at Cedar Gate Technologies.
            </p>
            <p> 
                I am open to working as a Software Tester or a Frontend Developer. This is my portfolio to represent my skills.
            </p>
        </div>
    
        <div className="about-skills">
            <div className="about-skill">
                <p>
                    HTML & CSS
                </p> <hr style={{ width: "80%" }} />

            </div>
            <div className="about-skill">
                <p>
                    React 
                </p> <hr style={{ width: "70%" }} />

            </div>
            <div className="about-skill">
                <p>
                    Python
                </p> <hr style={{ width: "60%" }} />

            </div>
            <div className="about-skill">
                <p>
                    App Testing
                </p> <hr style={{ width: "80%" }} />

            </div>
        </div>
    </div>
    
</div> 
</div>
)
}   

export default About