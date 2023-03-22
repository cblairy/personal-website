import './styles.scss';

function Header() {
    return (
            <header>
                <ul className='headerList'>
                    <li className='itemHeaderList' ><a href='#mid1'>Compétences</a></li>
                    <li className='itemHeaderList' ><a href='#mid2'>Portfolio</a></li>
                    <li className='itemHeaderList' ><a href='#bot'>Contact</a></li>
                </ul>
            </header>
    );
}

export default Header;
