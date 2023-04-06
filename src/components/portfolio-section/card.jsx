import React from "react";

import githubLogo from "../../assets/images/icons/github.svg";
import webLogo from "../../assets/images/icons/web.svg";

const Card = React.forwardRef((props, ref) => {

    const handleClick = (e) => {
        if (props.link !== null && props.link.showModal) {
            e.preventDefault();
            props.link.setIsDisabledLink(true);
        }
      };

    return (
        <figure ref={ref} className={ `${props.figureIsActive[0] ? "active" : ""} ${props.figureIsVisible[0] ? "visible" : ""} `} onClick={() => props.figureIsActive[1](true)} >
            <img src={props.bgImg} alt="" />
            <figcaption>
                <h3>{props.data.title}</h3>
                <p>{props.data["content"]}</p>

                <nav>
                    <a href={props.data["gitHref"]} target="_blank" rel="noreferrer noopener">
                        <img className="nav-logo" src={githubLogo} alt="logo github" />
                    </a>

                    <a href={props.data["href"]} target="_blank" rel="noreferrer noopener" onClick={handleClick}>
                        <img className="nav-logo" src={webLogo} alt="logo github" />
                    </a>
                </nav>
            </figcaption>
        </figure>
    );
})

export default Card;