import React from "react";
import { useInView } from "react-intersection-observer";

import githubLogo from "../../assets/images/icons/github.svg";
import webLogo from "../../assets/images/icons/web.svg";

function Card({ figureIsActive, data, bgImg, link, cardRef }) {

    const { ref, inView } = useInView({
        threshold: 0.8,
    });

    const handleClick = (e) => {
        if (link !== null && link.showModal) {
            e.preventDefault();
            link.setIsDisabledLink(true);
        }
    };
    console.log(ref)

    console.log(inView)
    return (
        <figure 
            ref={cardRef} 
            className={`${figureIsActive[0] ? "active" : ""}${inView ? "visible" : ""}`} 
            onClick={() => figureIsActive[1](true)} 
        >
            <img src={bgImg} alt="" />
            <figcaption ref={ref}>
                <h3>{data.title}</h3>
                <p>{data["content"]}</p>

                <nav>
                    <a href={data["gitHref"]} target="_blank" rel="noreferrer noopener">
                        <img className="nav-logo" src={githubLogo} alt="logo github" />
                    </a>

                    <a href={data["href"]} target="_blank" rel="noreferrer noopener" onClick={handleClick}>
                        <img className="nav-logo" src={webLogo} alt="logo github" />
                    </a>
                </nav>
            </figcaption>
        </figure>
    );
}

export default Card;