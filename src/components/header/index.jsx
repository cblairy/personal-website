import { useState, useEffect } from 'react';

import './styles.scss';

function Header() {
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

    

    
    
    return (
            <header className={headerIsVisible ? "header-is-visible" : "header-is-not-visible"}>
                <ul className='header-list'>
                    <li><a href='#skills'>Compétences</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </header>
    );
}

export default Header;
