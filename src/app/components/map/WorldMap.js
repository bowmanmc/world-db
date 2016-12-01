import React from 'react';
import ReactDOM from 'react-dom';

import { geoFahey } from 'd3-geo-projection';

import Countries from './Countries';
import Land from './Land';


class WorldMap extends React.Component {

    constructor(props, context) {
        super(props, context);

        // local state
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

        console.log('Map Size: ' + JSON.stringify(size));

        const projection = geoFahey().translate([size.width/2, size.height/2]);

        return (
            <svg className="worldmap" height={size.height} width={size.width}>
                <Land projection={projection} />
                <Countries projection={projection} />
            </svg>
        );
    }
}

WorldMap.propTypes = {
};

export default WorldMap;
