import tete from "../../images/face.png";
import foreground from "../../images/foreground-photography-1.jpg";
import './styles.scss';
import Test from "../test";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";


const TopSection = () => {

    return (
        <ParallaxBanner className={"topSection"}>
            <ParallaxBannerLayer image={foreground} expanded={false} speed={-10} scale={[0.6, 1.4]} opacity={[0.3, 1]}/>
            <ParallaxBannerLayer speed={-20}>
                <div className="content">
                    <Test />
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer className="tete" image={tete} speed={-30} />
        </ParallaxBanner>
    );
}

export default TopSection;