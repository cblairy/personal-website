import { useState, useEffect } from 'react';

import InternalLink from '../internalLink';
import './styles.scss';

function Header({ skillsSectionRef, portfolioSectionRef, contactSectionRef, onLinkClick }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerIsVisible, setHeaderIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos) {
                setHeaderIsVisible(false)

            } else {
                setHeaderIsVisible(true)
            }

            setPrevScrollPos(currentScrollPos)

        }

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]); 
    console.log(headerIsVisible)
    return (
            <header className={headerIsVisible ? "header-is-visible" : "header-is-not-visible"}>
                <ul className='header-list'>
                    <li><InternalLink onLinkClick={() => onLinkClick(skillsSectionRef)} content="Compétences" /></li>
                    <li><InternalLink onLinkClick={() => onLinkClick(portfolioSectionRef)} content="Portfolio" /></li>
                    <li><InternalLink onLinkClick={() => onLinkClick(contactSectionRef)} content="Contact" /></li>

                </ul>
            </header>
    );
}

export default Header;
