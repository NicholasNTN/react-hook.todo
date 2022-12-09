import React from 'react';
import '../style/nav-search.style.scss';

const NavSearch = (props) => {
    return (
        <nav className="navbar">
            <div className="toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src="img/logo.PNG" className="logo" alt="" />
            {/* search */}
            <div className="search-box">
                <input type="text" className="search-bar" placeholder="search"
                    value={props.query}
                    onChange={(event) => props.setQuery(event.target.value)}
                />
                <button className="search-btn" onClick={props.handleSearchYt}><img src="img/search.PNG" alt="" /></button>
            </div>
            {/* end search */}
            <div className="user-options">
                <img src="./public/img/video.PNG" className="icon" alt="" />
                <img src="img/grid.PNG" className="icon" alt="" />
                <img src="img/bell.PNG" className="icon" alt="" />
                <div className="user-dp">
                    <img src="img/profile-pic.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default NavSearch;