import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import Bar from './bar';

import cssLogo from '../../assets/images/icons/css-3.png';
import sassLogo from '../../assets/images/icons/sass.png';
import phpLogo from '../../assets/images/icons/php.png';
import codeIgniterLogo from '../../assets/images/icons/codeigniter.png';
import nodeLogo from '../../assets/images/icons/node.png';
import reactLogo from '../../assets/images/icons/react.png';
import angularLogo from '../../assets/images/icons/angular.png';
import pythonLogo from '../../assets/images/icons/python.png';
import djangoLogo from '../../assets/images/icons/django.png';
import javascriptLogo from '../../assets/images/icons/javaScript.png';
import symfonyLogo from '../../assets/images/icons/symfony.png';
import linuxLogo from '../../assets/images/icons/linux.png';
import dockerLogo from '../../assets/images/icons/docker.png';
import gitLogo from '../../assets/images/icons/git.png';
import mySqlLogo from '../../assets/images/icons/mysql.png';
import mongoDbLogo from '../../assets/images/icons/mongodb.png';
import javaLogo from '../../assets/images/icons/java.png';

import './styles.scss';

function SkillsSection(props) {
    const [visibleBars, setVisibleBars] = useState("");
    const { t } = useTranslation();

    /******** creates an event on the element passed in ref (40% of the visible element triggers it) ********/
    const [refView, inView] = useInView({
        threshold: 0.05,
    });

    const [refViewTitleSkills, inViewTitleSkills] = useInView({
        threshold: 0.05,
    });

    const [refViewButton1, inViewButton1] = useInView({
        threshold: 0,
    });

    const [refViewButton2, inViewButton2] = useInView({
        threshold: 0,
    });

    const [refViewButton3, inViewButton3] = useInView({
        threshold: 0,
    });

    /******** HTML FOR MOBILE BUTTONS ********/
    const toggleVisibleBars = (divId) => {

        if (visibleBars === divId){
            setVisibleBars("");
        } else {
            setVisibleBars(divId); 
        }
    };

    console.log(refViewButton1)
console.log(inView)

    const divs = [
        { id: "langages", ref: refViewButton1, inView: inViewButton1, content: 
            <div>
                <div className="bar-and-logo">
                    <img src={phpLogo} className="skills-logo" alt="phpLogo"/>
                    <Bar percent={"80%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={javascriptLogo} className="skills-logo" alt="jsLogo"/>
                    <Bar percent={"75%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={cssLogo} className="skills-logo" alt="cssLogo"/>
                    <Bar percent={"85%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={pythonLogo} className="skills-logo" alt="pythonLogo"/>
                    <Bar percent={"55%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={javaLogo} className="skills-logo" alt="javaLogo"/>
                    <Bar percent={"50%"}/>
                </div>
            </div> 
        },

        { id: "frameworks", ref: refViewButton2, inView: inViewButton2, content: 
            <div>
                <div className="bar-and-logo">
                    <img src={symfonyLogo} className="skills-logo" alt="SymfonyLogo"/>
                    <Bar percent={"75%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={codeIgniterLogo} className="skills-logo" alt="codeIgniterLogo"/>
                    <Bar percent={"30%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={reactLogo} className="skills-logo" alt="reactLogo"/>
                    <Bar percent={"85%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={angularLogo} className="skills-logo" alt="angularLogo"/>
                    <Bar percent={"25%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={sassLogo} className="skills-logo" alt="sassLogo"/>
                    <Bar percent={"60%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={djangoLogo} className="skills-logo" alt="djangoLogo"/>
                    <Bar percent={"30%"} />
                </div>
            </div>
        },

        { id: "environnements", ref: refViewButton3, inView: inViewButton3, content: 
            <div>
                <div className="bar-and-logo">
                    <img src={linuxLogo} className="skills-logo" alt="linuxLogo"/>
                    <Bar percent={"75%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={dockerLogo} className="skills-logo" alt="dockerLogo"/>
                    <Bar percent={"60%"}/>
                </div>

                <div className="bar-and-logo">
                    <img src={gitLogo} className="skills-logo" alt="gitLogo"/>
                    <Bar percent={"85%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={mySqlLogo} className="skills-logo" alt="mySqlLogo"/>
                    <Bar percent={"70%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={mongoDbLogo} className="skills-logo" alt="mongoDbLogo"/>
                    <Bar percent={"70%"} />
                </div>

                <div className="bar-and-logo">
                    <img src={nodeLogo} className="skills-logo" alt="nodeLogo"/>
                    <Bar percent={"65%"}/>
                </div>
            </div>
        },
    ];


console.log(divs[0].inView)
    return (
        <section className="skills-section" ref={(el) => {props.sectionRef.current = el; refView(el);}}>
            <p className={`sub-intro ${inView ? "visible" : ""}`}>Développeur full-stack passionné, j'aime particulièrement le web3 ⛓️ et souhaite le développer à l'avenir ! 🖥️ 🤓<br/><span>🎓 Fraichement diplômé d'un Bac+2 développeur web 🎓</span></p>
            <div className={`skills-title ${inViewTitleSkills ? "visible" : ""}`} ref={refViewTitleSkills}>
                <div></div>
                <h3>Mes maitrises</h3>
                <div></div>
            </div>
            
            <div className='all-bars'>

                {divs.map((div) => ( 
                    <div key={div.id} className={visibleBars === div.id ? "button-clicked" : ""}>
                        <button onClick={() => toggleVisibleBars(div.id)} ref={div.ref} className={`${visibleBars === div.id ? "is-clicked" : ""} ${div.inView ? "visible" : ""}`}>
                            <span>{div.id}</span>
                        </button>
                        {visibleBars === div.id && <div>{div.content}</div>}
                    </div>

                ))}
            </div>
            
        </section>
    );
}

export default SkillsSection;
