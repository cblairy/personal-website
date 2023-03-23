import { useState, useEffect } from 'react';
import './styles.scss';

function Header() {
    const [scrollDirection, setScrollDirection] = useState('none');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerIsVisible, setHeaderIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos) {
                setScrollDirection("down");
                setHeaderIsVisible(false)
            } else {
                setScrollDirection("up");
                setHeaderIsVisible(true)
            }

            setPrevScrollPos(currentScrollPos)

        }
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    
    
    return (
            <header className={headerIsVisible ? "headerIsVisible" : "headerIsNotVisible"}>
                <ul className='headerList'>
                    <li className='itemHeaderList' ><a href='#mid1'>Scroll direction: {scrollDirection}</a></li>
                    <li className='itemHeaderList' ><a href='#mid1'>Compétences</a></li>
                    <li className='itemHeaderList' ><a href='#mid2'>Portfolio</a></li>
                    <li className='itemHeaderList' ><a href='#bot'>Contact</a></li>
                </ul>
            </header>
    );
}

export default Header;
