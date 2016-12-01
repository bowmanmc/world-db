import React from 'react';
import ReactDOM from 'react-dom';

const MAP_URL = '/world-atlas/50m.json';

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

        const size = {
            height: this.state.componentSize.height,
            width: this.state.componentSize.width
        };

        return (
            <svg className="worldmap" height={size.height} width={size.width}>
            </svg>
        );
    }
}

WorldMap.propTypes = {
};

export default WorldMap;
