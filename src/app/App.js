import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Navbar from './components/navbar';

const App = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
