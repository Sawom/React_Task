import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                <li><Link style={{color: 'blue'}} to="/">1. Recursive-Partitioning</Link></li>
                <br /><br />
                <li><Link style={{color: 'blue'}} to="/alphabet">2. Alphabet Tile Interaction</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;