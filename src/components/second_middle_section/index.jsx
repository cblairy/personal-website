import bureau from "../../images/bureau.jpeg";
import morgane from "../../images/morgane.png";

import './styles.scss';

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function SecondMidSection() {
    
    return (
        <ParallaxBanner className={"secondMidSection"}>
            <ParallaxBannerLayer image={bureau} expanded={false} speed={0} scale={[1, 1.4]} opacity={[0.3, 1]}/>
            <ParallaxBannerLayer className="morgane" image={morgane} speed={50} />
        </ParallaxBanner>
    );
}

export default SecondMidSection;