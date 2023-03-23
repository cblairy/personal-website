import { ContactMe } from "./contactMe.jsx";
import './styles.scss';


const BottomSection = () => {
    let email = "corentinblairy1@gmail.com";
    let subject = "test";
    let body = "bodytest";
    return (
        <div id='bot' className={"bottomSection"}>
            <nav className="navBarEmail">
                <div className="navBarLine"></div>
                <a className="emailContact" href={"mailto:" + email + "?subject= " + subject + "&body=" + body}>corentin@blairy.fr</a>
            </nav>
            <ContactMe />
            <nav className="navBarGithub">
                <a className="githubLink" href="https://github.com/cblairy" target="_blank">github.com/cblairy</a>
                <div className="navBarLine"></div>
            </nav>
        </div>
    );
}

export default BottomSection;