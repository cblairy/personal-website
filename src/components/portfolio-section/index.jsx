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


const PortfolioSection = React.forwardRef((props, ref) => {
    const [isDisableLink, setIsDisabledLink] = useState(false);
    const isVisibleModal = useState(false);
    const [isVisibleSection, setIsVisibleSection] = useState(false);
    const showModal = true;

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.65,
        isVisibleSection,
    });

    const cardsData = [
        { cardRef: useRef(null), figureIsActive: useState(false), figureIsVisible: useState(false), data: data.data1, bgImg: personalWebsite },
        { cardRef: useRef(null), figureIsActive: useState(false), figureIsVisible: useState(false), data: data.data2, bgImg: bewebcademy },
    ];

    /******** DISPLAY WITH EFFECT ACCORDING TO THE VIEW ********/
    useEffect(() => {
        if (inView && !props.isLoading) 
            setIsVisibleSection(true);    
    }, [inView, props.isLoading]);

    /***** DISPLAY CARDS *****/
    const [activeIndex, setActiveIndex] = useState(0);
    const delay = 250;

    

    const cardsDataMemo = useMemo(() => {return cardsData}, []);


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

        if (window.innerWidth <= 430){
            document.addEventListener('touchstart', handleClickOutside)
        }
        
        return () => {
            document.removeEventListener('touchstart', handleClickOutside);
        };

    }, [cardsDataMemo])

    return (
        <ParallaxBanner className={"portfolio-section"} id="portfolio" >
            <ParallaxBannerLayer image={bureau} expanded={false} speed={-10} scale={[1, 1.6]}/* opacity={[1, 1]}*//>
            <Parallax className="portfolio-content" speed={-10} >
                <div className={`cards-title ${isVisibleSection ? "visible-section" : ""}`} ref={inViewRef} >
                    <div></div>
                    <h3>Mes travaux récents</h3>
                    <div></div>
                </div>

                <div className="cards" >
                    {cardsData.map((card) => (
                        <Card
                            link={card.data.title === "Personal website" ? {showModal, setIsDisabledLink} : null}
                            key={card.data.id}
                            ref={card.cardRef}
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
    );
})

export default PortfolioSection;
