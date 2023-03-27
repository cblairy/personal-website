import myHead from "../../images/face.png";
import foreground from "../../images/foregroundTop.jpg";
import './styles.scss';
import Intro from "./intro";


import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const TopSection = () => {

    return (
        <ParallaxBanner className={"topSection"}>
            <ParallaxBannerLayer image={foreground} expanded={false} speed={-10} scale={[0.7, 1.4]} opacity={[0.3, 1.1]}/>
            <ParallaxBannerLayer className="myHead" image={myHead} speed={-30} />
            <ParallaxBannerLayer speed={-20}>
                <div className="content">
                    <Intro />
                </div>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default TopSection;