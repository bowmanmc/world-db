import React from 'react';
import ReactDOM from 'react-dom';


class WorldMap extends React.Component {

    constructor(props, context) {
        super(props, context);
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
