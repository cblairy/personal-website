import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Language from "../basics/language";
import Burger from "./burger";
import InternalLink from '../basics/internalLink';
import './styles.scss';

function Header({ skillsSectionRef, portfolioSectionRef, contactSectionRef, onLinkClick }) {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const { t } = useTranslation();
    const headerLinks = {"content": 
        <ul className='header-list'>
            <li><InternalLink onLinkClick={() => onLinkClick(skillsSectionRef)} setIsActiveBurger={setIsActiveBurger} content={t('header.1')} /></li>
            <li><InternalLink onLinkClick={() => onLinkClick(portfolioSectionRef)} setIsActiveBurger={setIsActiveBurger} content={t('header.2')} /></li>
            <li><InternalLink onLinkClick={() => onLinkClick(contactSectionRef)} setIsActiveBurger={setIsActiveBurger} content={t('header.3')} /></li>
        </ul>
    }

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

                {window.innerWidth < 431 ? (
                    <Burger content={headerLinks.content} isActiveBurger={isActiveBurger} setIsActiveBurger={setIsActiveBurger} />
                ) : (
                    headerLinks.content
                )}
            </header>
    );
}

export default Header;
