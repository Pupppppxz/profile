import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div class="nav-wrapper black">
                <div className='container'>
                    <a href="#" class="brand-logo">Mepupz</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">JavaScript</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
