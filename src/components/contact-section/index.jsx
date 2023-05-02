import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import { ContactMe } from "./contactMe.jsx";
import InternalLink from "../internalLink";

import emailLogo from "../../assets/images/icons/email.png";
import githubLogo from "../../assets/images/icons/github.png";
import linkedinLogo from "../../assets/images/icons/linkedin.png";
import condingameLogo from "../../assets/images/icons/codingame.png";

import './styles.scss';

const ContactSection = ({ isLoading, sectionRef, startRef, onLinkClick }) => {
    const email = "corentinblairy1@gmail.com";
    const [showSection, setShowSection] = useState(false);
    const [refView, inView] = useInView({
        threshold: 0.25,
        showSection,
    });

    useEffect(() => {
        
        if (inView && !isLoading) {
            setShowSection(true);
        }

    }, [inView, isLoading]);

    return (
        <section className="contact-section" ref={(el) => {sectionRef.current = el; refView(el);}}>
            <div className="title-contact">
                <InternalLink className="scroll-arrow-bottom" onLinkClick={() => onLinkClick(startRef)} content={<span></span>}/>

                {/** TITLE PARALLAX */}
                <Parallax
                    scaleY={[0.7, 1.3]}
                    opacity={[0, 2]}
                    translateY={['-100px', '50px']}
                    rotateY={['-120deg', '60deg']}
                >

                    <div className={`cards-title ${email ? "visible-section" : ""}`} >
                        <div></div>
                        <h3>Contactez moi</h3>
                        <div></div>
                    </div>

                </Parallax>
                
            </div>
            
            <div className={"contact-form-section"}>
                <nav className="navbar-email">
                    <a href={"mailto:" + email}>corentin@blairy.fr</a>
                    <div className="navbar-line right"></div>
                </nav>
                <div>
                    {/** FORM PARALLAX */}
                    <Parallax
                        scale={[0.6, 1.4]}
                        opacity={[0,2]}
                        rotateX={['-100deg', '100deg']}
                    >
                        <ContactMe />
                    </Parallax>
                    <nav className="mobile-nav-logo">
                        <a href={"mailto:" + email}>
                            <img src={emailLogo} alt="logo gmail" />
                        </a>
                        <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">
                            <img src={githubLogo} alt="logo github" />
                        </a>
                        <a href="https://www.linkedin.com/in/corentin-blairy/" target="_blank" rel="noreferrer noopener">
                            <img src={linkedinLogo} alt="logo linkedin" />
                        </a>
                        <a href="https://www.codingame.com/profile/8a01a236c25123cc0a65a1532aa8e6663436294" target="_blank" rel="noreferrer noopener">
                            <img src={condingameLogo} alt="logo codingame" />
                        </a>
                    </nav>
                </div>
                <nav className="navbar-github">
                    <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">github.com/cblairy</a>
                    <div className="navbar-line"></div>
                </nav>
            </div>
            

        </section>
    );
}

export default ContactSection;