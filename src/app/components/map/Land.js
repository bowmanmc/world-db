import React from 'react';
import ReactDOM from 'react-dom';
import Faux from 'react-faux-dom';

import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import * as topojson from 'topojson-client';
import 'd3-selection-multi';


const MAP_URL = '/world-atlas/50m.json';

class Land extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            worldData: null
        };

        // fix the this bindings in React + ES6
        this.setState = this.setState.bind(this);
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
    }

    render() {

        if (!this.state.worldData) {
            return null; // load countries first
        }

        let lyrLand = select(Faux.createElement('g'));
        lyrLand.attr('class', 'land');

        const projection = geoMercator();
        const path = geoPath().projection(projection);

        lyrLand.insert('path')
            .datum(topojson.feature(this.state.worldData, this.state.worldData.objects.land))
            .attr('d', path);

        return lyrLand.node().toReact();
    }
}

Land.propTypes = {
};

export default Land;
