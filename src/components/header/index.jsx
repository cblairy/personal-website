import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Language from "../basics/language";
import InternalLink from '../basics/internalLink';
import './styles.scss';

function Header({ skillsSectionRef, portfolioSectionRef, contactSectionRef, onLinkClick }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const { t } = useTranslation();

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

    return (
            <header className={headerIsVisible ? "header-is-visible" : "header-is-not-visible"}>
                <Language />

                <ul className='header-list'>
                    <li><InternalLink onLinkClick={() => onLinkClick(skillsSectionRef)} content={t('header.1')} /></li>
                    <li><InternalLink onLinkClick={() => onLinkClick(portfolioSectionRef)} content={t('header.2')} /></li>
                    <li><InternalLink onLinkClick={() => onLinkClick(contactSectionRef)} content={t('header.3')} /></li>

                </ul>
            </header>
    );
}

export default Header;
