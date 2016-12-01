import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavbarTemplate = (props) => {
    return (
        <div>
            <IndexLink to="/"> <i className="fa fa-home" aria-hidden="true"></i> Home </IndexLink> |
            <Link to="/about"> <i className="fa fa-cog" aria-hidden="true"></i> About </Link>      |
            <Link to="/form"> <i className="fa fa-cog" aria-hidden="true"></i> Form </Link>
        </div>
    );
};

export default NavbarTemplate;
