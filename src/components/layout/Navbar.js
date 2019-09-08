import React from 'react';
import PropTypes from 'prop-types'


const Navbar = ({icon, title}) => {
    
    return (
        <nav className={icon}>
            <h1>
                <i className="fab fa-github" /> {''}
                {title}
            </h1>
        </nav>
    )
}
Navbar.defaultProps = {
    icon:'navbar bg-primary',
    title:'Github Finder'
};
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
