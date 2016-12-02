
import * as types from './worldDataActionTypes';


const MAP_URL = '/world-atlas/50m.json';

export function loadWorldDataSuccess(worldData) {
    return {type: types.WORLD_DATA_LOAD_SUCCESS, worldData};
}

export function fetchWorldData() {
    return function(dispatch) {
        fetch(MAP_URL).then(response => {
            return response.json();
        }).then(data => {
            dispatch(loadWorldDataSuccess(data))
        });
    };
}
