import { ContactMe } from "./contactMe.jsx";
import emailLogo from "../../images/icons/email.png";
import githubLogo from "../../images/icons/github.svg";

import './styles.scss';


const BottomSection = () => {
    let email = "corentinblairy1@gmail.com";

    return (
        <div id='bot' className={"bottomSection"}>
            <nav className="navBarEmail">
                <div className="navBarLine"></div>
                <a className="emailContact" href={"mailto:" + email}>corentin@blairy.fr</a>
            </nav>
            <ContactMe />
            <nav className="navBarGithub">
                <a className="githubLink" href="https://github.com/cblairy" target="_blank">github.com/cblairy</a>
                <div className="navBarLine"></div>
            </nav>

            <nav className="mobileNavLogo">
                <a href={"mailto:" + email}>
                    <img src={emailLogo} alt="logo email" />
                </a>
                <a href="https://github.com/cblairy" target="_blank">
                    <img src={githubLogo} alt="logo github" />
                </a>
            </nav>

        </div>
    );
}

export default BottomSection;