import { Reducer } from "react";

import {
    SET_POPULATION, SET_PERSON_RADIUS, SET_INFECTION_RADIUS, SET_AVOIDANCE_RADIUS, SET_SICK_SPEED, SET_HEALTHY_SPEED
} from "./constants";

const PandemicStoreReducer: Reducer<any, any> = (state: any, { type, payload }: any): any => {
    switch (type) {
        case SET_POPULATION:
            return {
                ...state,
                population: payload
            }
        case SET_SICK_SPEED:
            return {
                ...state,
                person: {
                    ...state.person,
                    sickSpeed: payload
                }
            }
        case SET_HEALTHY_SPEED:
            return {
                ...state,
                person: {
                    ...state.person,
                    healthySpeed: payload
                }
            }
        case SET_PERSON_RADIUS:
            return {
                ...state,
                person: {
                    ...state.person,
                    radius: payload
                }
            }
        case SET_INFECTION_RADIUS:
            return {
                ...state,
                person: {
                    ...state.person,
                    infectionRadius: payload
                }
            }
        case SET_AVOIDANCE_RADIUS:
            return {
                ...state,
                person: {
                    ...state.person,
                    avoidanceRadius: payload
                }
            }
        default: return state;
    }
}


export default PandemicStoreReducer;