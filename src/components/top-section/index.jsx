import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import myHead from "../../assets/images/face2.png";
import foreground from "../../assets/images/foregroundTop.jpg";

import Intro from "./intro";

import './styles.scss';


const TopSection = (props) => {

    return (
        <ParallaxBanner id="top" className={"top-section"}>
            <div>⚠️🏗️ Cette page est encore en construction, les images, couleurs, fonds et typo ne sont pas définitifs 🏗️⚠️</div>
            <ParallaxBannerLayer image={foreground} expanded={false} scale={[1.15, 1]}  opacity={[0.3, 1.1]}/>
            <ParallaxBannerLayer className="my-head" image={myHead} speed={-10} />
            <Parallax speed={-30}>
                <div className="intro-content">
                    <Intro isLoading={props.isLoading} />
                </div>
            </Parallax>
                <a className="scroll-arrow-top" href="#skills"><span></span></a>
        </ParallaxBanner>
    );
}

export default TopSection;
