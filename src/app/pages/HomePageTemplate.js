import React from 'react';

import WorldMap from '../components/map/WorldMap';


const HomePageTemplate = (worldData) => {
    return (
        <div className="page">
            <WorldMap worldData={worldData} />
        </div>
    );
};

export default HomePageTemplate;
