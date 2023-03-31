import { ContactMe } from "./contactMe.jsx";
import emailLogo from "../../images/icons/email.png";
import githubLogo from "../../images/icons/github.svg";

import './styles.scss';


const BottomSection = () => {
    let email = "corentinblairy1@gmail.com";

    return (
        <section id='contact' className={"contact-section"}>
            <nav className="navbar-email">
                <div className="navbar-line"></div>
                <a href={"mailto:" + email}>corentin@blairy.fr</a>
            </nav>
            <ContactMe />
            <nav className="navbar-github">
                <a href="https://github.com/cblairy" target="_blank">github.com/cblairy</a>
                <div className="navbar-line"></div>
            </nav>

            <nav className="mobile-nav-logo">
                <a href={"mailto:" + email}>
                    <img src={emailLogo} alt="logo email" />
                </a>
                <a href="https://github.com/cblairy" target="_blank">
                    <img src={githubLogo} alt="logo github" />
                </a>
            </nav>

        </section>
    );
}

export default BottomSection;