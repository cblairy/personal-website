import bureau from "../../images/bureau.jpeg";
import bewebcademy from "../../images/bewebcademy.png";
import personalWebsite from "../../images/personal-website.png";

import './styles.scss';
import data from '../../data.json';

import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Card from "./card.jsx"
import { useRef, useEffect, useState } from "react";


function PortfolioSection(props) {
    const cardsData = [
        { cardRef: useRef(null), figureIsActive: useState(false), data: data.data1, bgImg: personalWebsite },
        { cardRef: useRef(null), figureIsActive: useState(false), data: data.data2, bgImg: bewebcademy }
    ];

    useEffect(() => {
        /**** JUST FOR MOBILE ****/
        function handleClickOutside(event) {
            cardsData.forEach((card) => {

                if (!card.cardRef.current.contains(event.target))
                    card.figureIsActive[1](false);
            })
        }

        if (window.innerWidth <= 430){
            document.addEventListener('touchstart', handleClickOutside)
        }

        return () => {
            document.removeEventListener('touchstart', handleClickOutside);
        };

    }, [cardsData])

    return (
        <ParallaxBanner className={"portfolio-section"} id="portfolio">
            <ParallaxBannerLayer image={bureau} expanded={false} speed={-40} scale={[1, 1.3]}/* opacity={[1, 1]}*//>
            <Parallax className="portfolio-content" speed={-10}>
                <div className="cards-title">
                    <div></div>
                    <h3>Mes travaux récents</h3>
                    <div></div>
                </div>

                <div className="cards">
                    {cardsData.map((card) => (
                        <Card
                            key={card.data.id}
                            ref={card.cardRef}
                            figureIsActive={card.figureIsActive}
                            data={card.data}
                            bgImg={card.bgImg}
                        />
                    ))}
                    
                </div>
            </Parallax>
        </ParallaxBanner>
    );
}

export default PortfolioSection;
