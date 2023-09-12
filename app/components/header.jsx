import {Link} from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion';

const Header = () => {

    return (
        <div className="header">
            <div className="contenedor barra">
                <Link to="/">
                    <img className='logo' src={logo} alt="Logo" />
                </Link>
                <Navegacion />
            </div>
            Header
        </div>
    );
};

export default Header;