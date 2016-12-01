import React, { PropTypes } from 'react';


const App = (props) => {
    return (
        <div className="view">
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
