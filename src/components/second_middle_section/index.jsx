import bureau from "../../images/bureau.jpeg";
import bewebcademy from "../../images/bewebcademy.png";
import personalWebsite from "../../images/personal-website.png";

import './styles.scss';

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./card.jsx"

function SecondMidSection() {
    let data1 = [];
    data1["title"] = "Personal website";
    data1["content"] = "React - react-parallax - EmailJs - Javascript - SCSS";
    data1["href"] = "#";
    data1["gitHref"] = "https://github.com/cblairy/personal-website";
    data1["bgImg"] = personalWebsite;

    let data2 = [];
    data2["title"] = "Bewebcademy";
    data2["content"] = "micro-services - nodeJs - mondeDB - RabbitMQ - React";
    data2["href"] = "https://bewebcademy.vercel.app/";
    data2["gitHref"] = "https://github.com/cblairy/bewebCademy";
    data2["bgImg"] = bewebcademy;

    return (
        <ParallaxBanner className={"secondMidSection"}>
            <a id="mid2"></a>
            <ParallaxBannerLayer image={bureau} expanded={false} speed={-40} scale={[1, 1.3]}/* opacity={[1, 1]}*//>
            <ParallaxBannerLayer className="content2midSec" speed={0}>
                <div className="cardsTitle">
                    <div className="line"></div>
                    <h3>Mes travaux récents</h3>
                    <div className="line"></div>
                </div>

                <div className="cards">
                    <Card data={data1} />
                    <Card data={data2} />
                </div>
                
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default SecondMidSection;