import React, { useRef, useEffect, useState, useMemo } from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

import Card from "./card.jsx";
import Modal from "../modal";
import data from '../../data.json';

import bureau from "../../assets/images/bureau.jpeg";
import bewebcademy from "../../assets/images/bewebcademy.png";
import personalWebsite from "../../assets/images/personal-website.png";

import './styles.scss';


function PortfolioSection({ isLoading, sectionRef, startRef }) {
    const [isDisableLink, setIsDisabledLink] = useState(false);
    const isVisibleModal = useState(false);
    const [isVisibleSection, setIsVisibleSection] = useState(false);
    const showModal = true;
    const { ref: inViewRef, inView: inViewSection } = useInView({
        threshold: 0.25,
        isVisibleSection,
    });
    const { ref: inViewScaleRef, inView: inViewScale } = useInView({
        threshold: 0.94,
    });
    const [isReverseScale, setReverseScale] = useState(false);
    const normalScale = [1.3, 1]; 
    const reversedScale = [1, 1.3]; 
    const cardsData = [
        { cardRef: useRef(null), figureIsActive: useState(false), figureIsVisible: useState(false), data: data.data1, bgImg: personalWebsite },
        { cardRef: useRef(null), figureIsActive: useState(false), figureIsVisible: useState(false), data: data.data2, bgImg: bewebcademy },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const delay = 250;
    const cardsDataMemo = useMemo(() => cardsData.map(el => {
        return el
    }), [cardsData]);

    
    /******** DISPLAY WITH EFFECT ACCORDING TO THE VIEW ********/
    useEffect(() => {
        if (inViewSection && !isLoading) 
            setIsVisibleSection(true); 
        if (inViewScale)
            setReverseScale(!isReverseScale)
        
    }, [inViewSection, isLoading, inViewScale]);

    /***** DISPLAY CARDS *****/
    useEffect(() => {
        function nextCard() {
            setTimeout(() => {
                setActiveIndex(activeIndex + 1);
            }, delay);
        }

        if (isVisibleSection){
            if (activeIndex < cardsDataMemo.length){

                const interval = setInterval(() => {
                    nextCard();
                }, delay * 2);

                for (let i = 0; i < cardsDataMemo.length; i++) {
                    const card = cardsDataMemo[i];
                    
                    if (i === activeIndex) {
                        card.figureIsVisible[1](true);
                    }
                }

                return () => {
                    clearInterval(interval);

                };
            }
        }
    }, [isVisibleSection, activeIndex, cardsDataMemo]);


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
        <section className={"portfolio-section"} ref={(el) => {sectionRef.current = el; inViewRef(el); inViewScaleRef(el);}}>
            <ParallaxBanner  className={"parallax-portfolio-section"} >
                <ParallaxBannerLayer image={bureau} expanded={false} speed={-10} scale={isReverseScale ? reversedScale : normalScale} /* opacity={[1, 1]}*//>
                <Parallax className="portfolio-content" speed={-10} >
                    <div className={`cards-title ${isVisibleSection ? "visible-section" : ""}`} >
                        <div></div>
                        <h3>Mes travaux récents</h3>
                        <div></div>
                    </div>

                    <div className="cards" >
                        {cardsData.map((card) => (
                            <Card
                                link={card.data.title === "Personal website" ? {showModal, setIsDisabledLink} : null}
                                key={card.data.id}
                                cardRef={card.cardRef}
                                figureIsActive={card.figureIsActive}
                                figureIsVisible={card.figureIsVisible}
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
