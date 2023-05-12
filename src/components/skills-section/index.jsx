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
    const [showSection, setShowSection] = useState(false);
    const [visibleBars, setVisibleBars] = useState("");
    const { t } = useTranslation();

    /******** creates an event on the element passed in ref (40% of the visible element triggers it) ********/
    const [refView, inView] = useInView({
        threshold: 0.25,
        showSection,
    });

    /******** displays bars elements according to the view ans the loading of the page ********/
    useEffect(() => {
        if (inView && !props.isLoading) {
            setShowSection(true);
        }

    }, [inView, props.isLoading]);


    /******** HTML FOR MOBILE BUTTONS ********/
    const toggleVisibleBars = (divId) => {

        if (visibleBars === divId){
            setVisibleBars("");
        } else {
            setVisibleBars(divId); 
        }
    };

    const divs = [
        { id: "langages", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={phpLogo} className="skills-logo" alt="phpLogo"/>
                    <Bar percent={"85%"} showSection={showSection}  />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={javascriptLogo} className="skills-logo" alt="jsLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={cssLogo} className="skills-logo" alt="cssLogo"/>
                    <Bar percent={"85%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={pythonLogo} className="skills-logo" alt="pythonLogo"/>
                    <Bar percent={"55%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={javaLogo} className="skills-logo" alt="javaLogo"/>
                    <Bar percent={"20%"} showSection={showSection}/>
                </div>
            </div> 
        },

        { id: "frameworks", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={symfonyLogo} className="skills-logo" alt="SymfonyLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={codeIgniterLogo} className="skills-logo" alt="codeIgniterLogo"/>
                    <Bar percent={"60%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={reactLogo} className="skills-logo" alt="reactLogo"/>
                    <Bar percent={"75%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={angularLogo} className="skills-logo" alt="angularLogo"/>
                    <Bar percent={"25%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={sassLogo} className="skills-logo" alt="sassLogo"/>
                    <Bar percent={"50%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={djangoLogo} className="skills-logo" alt="djangoLogo"/>
                    <Bar percent={"30%"} showSection={showSection} />
                </div>
            </div>
        },

        { id: "environnements", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={linuxLogo} className="skills-logo" alt="linuxLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={dockerLogo} className="skills-logo" alt="dockerLogo"/>
                    <Bar percent={"70%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={gitLogo} className="skills-logo" alt="gitLogo"/>
                    <Bar percent={"85%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={mySqlLogo} className="skills-logo" alt="mySqlLogo"/>
                    <Bar percent={"70%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={mongoDbLogo} className="skills-logo" alt="mongoDbLogo"/>
                    <Bar percent={"60%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={nodeLogo} className="skills-logo" alt="nodeLogo"/>
                    <Bar percent={"65%"} showSection={showSection}/>
                </div>
            </div>
        },
    ];


    return (
        <section className="skills-section" ref={(el) => {props.sectionRef.current = el; refView(el);}}>
            <p className={`sub-intro ${showSection ? "visible" : ""}`}>Développeur full-stack passionné, j'aime particulièrement le web3 ⛓️ et souhaite le développer à l'avenir ! 🖥️ 🤓<br/><span>🎓 Fraichement diplômé d'un Bac+2 développeur web 🎓</span></p>
            <div className={`skills-title ${showSection ? "visible" : ""}`}>
                <div></div>
                <h3>Mes maitrises</h3>
                <div></div>
            </div>
            
            <div className='all-bars'>

                {divs.map((div) => (
                    <div key={div.id} className={visibleBars === div.id ? "button-clicked" : ""}>
                        <button onClick={() => toggleVisibleBars(div.id)} className={`${visibleBars === div.id ? "is-clicked" : ""} ${showSection ? "visible" : ""}`}>
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
