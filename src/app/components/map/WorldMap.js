import React from 'react';
import ReactDOM from 'react-dom';

import { geoFahey } from 'd3-geo-projection';
import * as topojson from 'topojson-client';

import Countries from './Countries';
import Land from './Land';


const MAP_URL = '/world-atlas/50m.json';

class WorldMap extends React.Component {

    constructor(props, context) {
        super(props, context);

        // local state
        this.state = {
            componentSize: {
                height: 0,
                width: 0
            },
            worldData: null
        };

        // fix the this bindings in React + ES6
        this.setState = this.setState.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        // Load the country data
        var cmp = this;
        fetch(MAP_URL).then(function(response) {
            return response.json();
        }).then(function(mapdata) {
            cmp.setState({
                worldData: mapdata
            });
        });

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

        if (!this.state.worldData) {
            return null; // load countries first
        }

        const size = {
            height: this.state.componentSize.height,
            width: this.state.componentSize.width
        };

        if (size.height === 0 || size.width === 0) {
            return null;
        }

        console.log('Map Size: ' + JSON.stringify(size));

        var land = topojson.feature(this.state.worldData, this.state.worldData.objects.land);
        //const projection = geoFahey().translate([size.width/2, size.height/2]);
        const projection = geoFahey()
            .fitSize([size.width, size.height], land);
        //.fitSize([width, height], conus)
        //projection.fitSize([size.width, size.height]);

        return (
            <svg className="worldmap" height={size.height} width={size.width}>
                <Land projection={projection} worldData={this.state.worldData} />
                <Countries projection={projection} worldData={this.state.worldData} />
            </svg>
        );
    }
}

WorldMap.propTypes = {
};

export default WorldMap;
