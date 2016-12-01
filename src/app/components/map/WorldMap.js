import React from 'react';
import ReactDOM from 'react-dom';


class WorldMap extends React.Component {

    constructor(props, context) {
        super(props, context);

        // local state for this component
        this.state = {
            componentSize: {
                height: 0,
                width: 0
            }
        };

        // fix the this bindings in React + ES6
        this.setState = this.setState.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        let el = ReactDOM.findDOMNode(this).parentNode;
        this.setState({
            componentSize: Object.assign({}, {
                height: el.offsetHeight,
                width: el.offsetWidth
            })
        });
    }

    render() {

        return (
            <h1>World Map Here</h1>
        );
    }
}

WorldMap.propTypes = {
};

export default WorldMap;
