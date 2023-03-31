import githubLogo from "../../images/icons/github.svg";
import webLogo from "../../images/icons/web.svg";

function Card(props) {
      
    return (
        <figure>
            <img src={props.data["bgImg"]} alt="" />
            <figcaption>
                <h3>{props.data["title"]}</h3>
                <p>{props.data["content"]}</p>

                <nav className="navigation">
                    <a href={props.data["gitHref"]} target="_blank">
                        <img className="nav-logo" src={githubLogo} alt="logo github" />
                    </a>

                    <a href={props.data["href"]} target="_blank">
                        <img className="nav-logo" src={webLogo} alt="logo github" />
                    </a>
                </nav>
            </figcaption>
        </figure>
    );
}

export default Card;