import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import myHead from "../../assets/images/face.png";
import foreground from "../../assets/images/foregroundTop.jpg";

import Intro from "./intro";

import './styles.scss';


const TopSection = (props) => {

    return (
        <ParallaxBanner id="top" className={"top-section"}>
            <ParallaxBannerLayer image={foreground} expanded={false} speed={-10} scale={[0.7, 1.4]} opacity={[0.3, 1.1]}/>
            <ParallaxBannerLayer className="my-head" image={myHead} speed={-20} />
            <Parallax speed={-20}>
                <div className="intro-content">
                    <Intro isLoading={props.isLoading} />
                </div>
            </Parallax>
                <a className="scroll-arrow-top" href="#skills"><span></span></a>
        </ParallaxBanner>
    );
}

export default TopSection;
