import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

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
    const [showLogo, setShowLogo] = useState(false);
    const [_mobile_visibleBars, set_mobile_visibleBars] = useState("");

    /******** creates an event on the element passed in ref (40% of the visible element triggers it) ********/
    const [ref, inView] = useInView({
        threshold: 0.25,
        showSection,
    });

    /******** displays the bar elements according to the view ans the loading of the page ********/
    useEffect(() => {
        if (inView && !props.isLoading) {
            setShowSection(true);
        }

    }, [inView, props.isLoading]);


    /******** MOBILE BUTTONS ********/
    const toggleVisibleBars = (divId) => {

        if (_mobile_visibleBars === divId){
            set_mobile_visibleBars("");
        } else {
            set_mobile_visibleBars(divId); 
        }
    };

    const divs = [
        { id: "langages", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={phpLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"85%"} showSection={showSection} setShowLogo={setShowLogo} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={javascriptLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={cssLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"85%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={pythonLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"55%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={javaLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"20%"} showSection={showSection}/>
                </div>
            </div> 
        },

        { id: "frameworks", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={symfonyLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={codeIgniterLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"60%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={reactLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"75%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={angularLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"25%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={sassLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"50%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={djangoLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"30%"} showSection={showSection} />
                </div>
            </div>
        },

        { id: "environnements", content: 
            <div>
                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={linuxLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"75%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={dockerLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"70%"} showSection={showSection}/>
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={gitLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"85%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={mySqlLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"70%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={mongoDbLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"60%"} showSection={showSection} />
                </div>

                <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                    <img src={nodeLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                    <Bar percent={"65%"} showSection={showSection}/>
                </div>
            </div>
        },
    ];

    return (
        <section id="skills" className="skills-section" ref={ref}>
            <p className={`sub-intro ${showSection ? "visible" : ""}`}>Fraichement diplômé 🎓 d'un titre RNCP "developpeur web et web mobile" en Mars 2023, je me concentre actuellement sur la recherche 🔍 d'une alternance pour un bachelor devOps CDA pour la rentrée de Septembre !</p>
            <div className={`skills-title ${showSection ? "visible" : ""}`}>
                <div></div>
                <h3>Mes maitrises</h3>
                <div></div>
            </div>
            
            {/******** START CONDITION (MOBILE / DESKTOP) ********/}

            {window.innerWidth <= 430 || window.innerHeight < 800 ? 
            <div className='all-bars'>

                {divs.map((div) => (
                    <div key={div.id}>
                        <button onClick={() => toggleVisibleBars(div.id)} className={`${_mobile_visibleBars === div.id ? "is-clicked" : ""} ${showSection ? "visible" : ""}`}>
                            <span>{div.id}</span>
                        </button>
                        {_mobile_visibleBars === div.id && <div>{div.content}</div>}
                    </div>

                ))}

            </div>
            /******** CONDITION FOR DESKTOP ********/
            : 
            <div className='all-bars'>     
                <div>
                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={phpLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"85%"} showSection={showSection} setShowLogo={setShowLogo} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={javascriptLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={cssLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"85%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={pythonLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"55%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={javaLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"20%"} showSection={showSection}/>
                    </div>
                </div>

                <div>
                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={symfonyLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={codeIgniterLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"60%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={reactLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={angularLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"25%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={sassLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"50%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={djangoLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"30%"} showSection={showSection} />
                    </div>
                </div>
                
                <div>
                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={linuxLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={dockerLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"70%"} showSection={showSection}/>
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={gitLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"85%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={mySqlLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"70%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={mongoDbLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"60%"} showSection={showSection} />
                    </div>

                    <div className={`bar-and-logo ${showSection ? "visible" : ""}`}>
                        <img src={nodeLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"65%"} showSection={showSection}/>
                    </div>
                </div>
            </div>
            /******** END CONDITION ********/
            } 
        </section>
    );
}

export default SkillsSection;
