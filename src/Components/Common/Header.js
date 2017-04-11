import React,{PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = ()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"|"}
            <Link to="/ProfileUpdate" activeClassName="active">Profile</Link>
        </nav>
    );
};

export default Header;