import tete from "../../images/face.png";
import foreground from "../../images/foreground-photography-1.jpg";
import './styles.scss';
import Intro from "./intro";

import React, { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const TopSection = () => {

    // pour faire clignoter la description
    

    return (
        <ParallaxBanner className={"topSection"}>
            <ParallaxBannerLayer image={foreground} expanded={false} speed={-10} scale={[0.6, 1.4]} opacity={[0.3, 1]}/>
            <ParallaxBannerLayer className="tete" image={tete} speed={-30} />
            <ParallaxBannerLayer speed={-20}>
                <div className="content">
                    <Intro />
                    <p className="subIntro">Fraichement diplômé d'un titre RNCP "developpeur web et web mobile" en Mars 2023, je me concentre actuellement sur la recherche d'une alternance pour un bachelor devOps CDA pour la rentrée de Septembre.</p>
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default TopSection;