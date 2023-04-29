import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import me from "../../assets/images/face2.png";
import foreground from "../../assets/images/foregroundTop.jpg";

import Intro from "./intro";
import InternalLink from "../internalLink";

import './styles.scss';

const TopSection = ({ isLoading, skillsSectionRef, onLinkClick, onLoad }) => {

    return (
        <ParallaxBanner id="top" className={"top-section"}>
            <div>⚠️🏗️ Cette page est encore en construction, les images, couleurs, fonds et typo ne sont également pas définitifs 🏗️⚠️</div>
            <ParallaxBannerLayer image={foreground} expanded={false} scale={[1.15, 1]}  opacity={[0.3, 1.1]}/>
            <ParallaxBannerLayer className="me" image={me} speed={-10} onLoad={onLoad()}/>
            <Parallax speed={-25}>
                <div className="intro-content">
                    <Intro isLoading={isLoading} />
                </div>
            </Parallax>
            <InternalLink className="scroll-arrow-top" onLinkClick={() => onLinkClick(skillsSectionRef)} content={<span></span>}/>
        </ParallaxBanner>
    );
}

export default TopSection;
