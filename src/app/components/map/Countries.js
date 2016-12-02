import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Faux from 'react-faux-dom';

import { geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import * as topojson from 'topojson-client';
import 'd3-selection-multi';


class Countries extends React.Component {

    render() {

        const projection = this.props.projection;
        const worldData = this.props.worldData;

        const path = geoPath().projection(projection);

        let layer = select(Faux.createElement('g'));
        layer.attr('class', 'countries');
        layer.insert('path')
            .datum(topojson.feature(worldData, worldData.objects.countries))
            .attr('d', path);

        return layer.node().toReact();
    }
}

Countries.propTypes = {
    projection: PropTypes.func.isRequired,
    worldData: PropTypes.object.isRequired
};

export default Countries;
