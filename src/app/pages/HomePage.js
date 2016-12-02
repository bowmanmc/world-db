import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as worldDataActions from '../state/actions/worldDataActions';
import HomePageTemplate from './HomePageTemplate';


class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { worldData } = this.props;
        return HomePageTemplate(worldData);
    }
}

HomePage.PropTypes = {
    worldData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        worldData: state.worldData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(worldDataActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
