import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Faux from 'react-faux-dom';

import { geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import * as topojson from 'topojson-client';
import 'd3-selection-multi';


const MAP_URL = '/world-atlas/50m.json';

class Countries extends React.Component {

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

        const projection = this.props.projection;

        if (!this.state.worldData) {
            return null; // load countries first
        }

        const path = geoPath().projection(projection);

        let layer = select(Faux.createElement('g'));
        layer.attr('class', 'countries');
        layer.insert('path')
            .datum(topojson.feature(this.state.worldData, this.state.worldData.objects.countries))
            .attr('d', path);

        return layer.node().toReact();
    }
}

Countries.propTypes = {
    projection: PropTypes.func.isRequired
};

export default Countries;
