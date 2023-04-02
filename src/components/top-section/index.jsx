import myHead from "../../images/face.png";
import foreground from "../../images/foregroundTop.jpg";
import './styles.scss';
import Intro from "./intro";


import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const TopSection = (props) => {

    return (
        <ParallaxBanner className={"top-section"}>
            <ParallaxBannerLayer image={foreground} expanded={false} speed={-10} scale={[0.7, 1.4]} opacity={[0.3, 1.1]}/>
            <ParallaxBannerLayer className="my-head" image={myHead} speed={-30} />
            <Parallax speed={-20}>
                <div className="intro-content">
                    <Intro isLoading={props.isLoading} />
                </div>
            </Parallax>
        </ParallaxBanner>
    );
}

export default TopSection;