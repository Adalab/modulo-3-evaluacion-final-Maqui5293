import Logohp from '../../images/harry-potter.png';
import '../../styles/Layout/Header.scss';
function Header() {

    return (
        <header className="header">
            <img src={Logohp} alt="Logo" className="header__logo" />

        </header>
    );
}

export default Header