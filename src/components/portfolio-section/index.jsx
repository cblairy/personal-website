import React, { useRef, useEffect, useState, useMemo } from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';

import Card from "./card.jsx";
import Modal from "../basics/modal.jsx";
import data from './data.json';

import bureau from "../../assets/images/bureau.jpeg";
import bewebcademy from "../../assets/images/bewebcademy.png";
import personalWebsite from "../../assets/images/personal-website.png";
import comingSoon from "../../assets/images/coming-soon.jpg";

import './styles.scss';

function PortfolioSection({ isLoading, sectionRef, startRef }) {
    const [isDisableLink, setIsDisabledLink] = useState(false);
    const isVisibleModal = useState(false);
    const showModal = true;
    const { ref: inViewRef, inView: inViewSection } = useInView({
        threshold: 0.01,
    });
    const { ref: inViewScaleRef, inView: inViewScale } = useInView({
        threshold: 0.94,
    });
    const [isReverseScale, setReverseScale] = useState(false);
    const normalScale = [1.3, 1]; 
    const reversedScale = [1, 1.3];

    /******** ADD CARD HERE ********/
    const cardsData = [
        { 
            cardRef: useRef(null),
            figureIsActive: useState(false),
            data: data.data1,
            bgImg: personalWebsite 
        },
        { 
            cardRef: useRef(null),
            figureIsActive: useState(false),
            data: data.data2,
            bgImg: bewebcademy
        },
        { 
            cardRef: useRef(null),
            figureIsActive: useState(false),
            data: data.data3,
            bgImg: comingSoon
        },
        { 
            cardRef: useRef(null),
            figureIsActive: useState(false),
            data: data.data4,
            bgImg: comingSoon
        },
 
    ];

    const { t } = useTranslation();

    const cardsDataMemo = useMemo(() => cardsData.map(el => {
        return el
    }), [cardsData]);
    
    /******** DISPLAY WITH EFFECT ACCORDING TO THE VIEW ********/
    useEffect(() => {
        if (inViewScale)
            setReverseScale(!isReverseScale)
        
    }, [inViewSection, isLoading, inViewScale]);

    useEffect(() => {
        /******** JUST FOR MOBILE (hover --> click) ********/
        function handleClickOutside(event) {
            cardsDataMemo.forEach((card) => {

                if (!card.cardRef.current.contains(event.target))
                    card.figureIsActive[1](false);
            })
        }

        const domRef = startRef.current
        if (window.innerWidth <= 430){
            
            domRef.addEventListener('touchstart', handleClickOutside)
        }
        
        return () => {
            domRef.removeEventListener('touchstart', handleClickOutside);
        };

    }, [cardsDataMemo, startRef])

    return (
        <section className={"portfolio-section"} ref={(el) => {sectionRef.current = el; inViewScaleRef(el);}}>
            <ParallaxBanner  className={"parallax-portfolio-section"} >
                <ParallaxBannerLayer image={bureau} expanded={false} speed={-10} scale={isReverseScale ? reversedScale : normalScale} /* opacity={[1, 1]}*//>
                <Parallax className="portfolio-content" speed={-10} >
                    <div ref={inViewRef} className={`cards-title ${inViewSection ? "visible-section" : ""}`} >
                        <div></div>
                        <h3>{t('portfolioSection.title')}</h3>
                        <div></div>
                    </div>

                    <div className="cards" >
                        {cardsData.map((card) => (
                            <Card
                                link={card.data.title === "Personal website" ? {showModal, setIsDisabledLink} : null}
                                key={card.data.id}
                                cardRef={card.cardRef}
                                figureIsActive={card.figureIsActive}
                                data={card.data}
                                bgImg={card.bgImg}
                            />
                        ))}
                        
                    </div>
                </Parallax>

                {isDisableLink && (
                    <Modal
                        message="Merci d'avoir visité mon site! 🥰"
                        valid={true}
                        visible={isVisibleModal}
                    />
                )}
            </ParallaxBanner>
        </section>
    );
}

export default PortfolioSection;
