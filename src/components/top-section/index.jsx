import { Parallax } from "react-scroll-parallax";

import me from "../../assets/images/tchouixfinal3.png";

import Intro from "./intro";
import InternalLink from "../internalLink";

import './styles.scss';

const TopSection = ({ isLoading, skillsSectionRef, onLinkClick }) => {
    const parallaxTranslateEffect_large = ['-350px', '350px'];
    const parallaxTranslateEffect_small = ['-170px', '350px'];
    const parallaxTranslateEffect_small_text = ['-270px', '70px'];

    return (
        <section className="top-section">
            <Parallax className="img-parallax" translateY={window.innerWidth < 430 ? parallaxTranslateEffect_small : parallaxTranslateEffect_large} scale={[1.3, 0.7]}>
                <img src={me} alt="corentin blairy" className="face"/>
            </Parallax>

            <Parallax translateY={window.innerWidth < 430 ? parallaxTranslateEffect_small_text : parallaxTranslateEffect_large} className="intro-parallax">
                <div className="intro-content">
                    <Intro isLoading={isLoading} />
                </div>
            </Parallax>
            <InternalLink className="scroll-arrow-top" onLinkClick={() => onLinkClick(skillsSectionRef)} content={<span></span>}/>
        </section>
        
    );
}

export default TopSection;
