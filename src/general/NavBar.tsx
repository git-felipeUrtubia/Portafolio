import '../assets/styles/NavBar.css'
import { NavLink } from 'react-router-dom';


export const NavBar = () => {

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-title">
                    <h2>Felipe</h2>
                </div>
                <div className="nav-content">
                    <nav>
                        <ul>
                            {/* <li>
                                <NavLink to={"/inicio"}
                                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                >
                                    inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/sobre-mi"}
                                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                >
                                    Sobre mí
                                </NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className='navbar-line-separate' />
        </>
    )
}