import { NavLink } from 'react-router-dom';
import '../style/navbar.style.scss'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-row">
                <div className="topnav">
                    <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/'>Home</NavLink>
                    <NavLink to='/social'>Social</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/sucket?'>Sucket</NavLink>
                    <div className="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Tìm kiếm.." name="search" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;