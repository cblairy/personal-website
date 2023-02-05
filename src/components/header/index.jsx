import './styles.scss';

function Header() {
    return (
            <header>
                <ul id='headerList'>
                    <li className='itemHeaderList'> A Propos</li>
                    <li className='itemHeaderList'> Compétences</li>
                    <li className='itemHeaderList'> Portfolio</li>
                    <li className='itemHeaderList'> Contact</li>
                </ul>
            </header>
    );
}

export default Header;
