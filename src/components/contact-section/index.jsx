import { ContactMe } from "./contactMe.jsx";

import emailLogo from "../../assets/images/icons/email.png";
import githubLogo from "../../assets/images/icons/github.png";
import linkedinLogo from "../../assets/images/icons/linkedin.png";

import './styles.scss';

const BottomSection = () => {
    let email = "corentinblairy1@gmail.com";

    return (
        <section id='contact' className="contact-section">
            <div className="title-contact">
                <a className="scroll-arrow-bottom" href="#top"><span></span></a>

                <div className={`cards-title ${email ? "visible-section" : ""}`} >
                    <div></div>
                    <h3>Contactez moi</h3>
                    <div></div>
                </div>
            </div>

            <div className={"contact-form-section"}>
                <nav className="navbar-email">
                    <a href={"mailto:" + email}>corentin@blairy.fr</a>
                    <div className="navbar-line right"></div>
                </nav>
                <div>
                    <ContactMe />
                    <nav className="mobile-nav-logo">
                        <a href={"mailto:" + email}>
                            <img src={emailLogo} alt="logo email" />
                        </a>
                        <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">
                            <img src={githubLogo} alt="logo github" />
                        </a>
                        <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">
                            <img src={linkedinLogo} alt="logo github" />
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

export default BottomSection;