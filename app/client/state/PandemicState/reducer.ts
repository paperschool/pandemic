import { Reducer } from "react";

import {
    SET_POPULATION, SET_PERSON_RADIUS, SET_INFECTION_RADIUS, SET_AVOIDANCE_RADIUS, SET_SICK_SPEED, SET_HEALTHY_SPEED, SET_AVOIDANCE_SPEED, TOGGLE_INFECTION_RADIUS, TOGGLE_AVOIDANCE_RADIUS, SET_SICKNESS_MORTALITY_RATE, SET_SICKNESS_TOTAL_DURATION, SET_SICKNESS_INCUBATION, SET_SICKNESS_CONTAGIOUS
} from "./constants";

const PandemicStoreReducer: Reducer<any, any> = (state: any, { type, payload }: any): any => {
    switch (type) {
        case SET_POPULATION:
            return {
                ...state,
                population: payload
            }
        case SET_AVOIDANCE_SPEED:
            return {
                ...state,
                person: {
                    ...state.person,
                    avoidanceSpeed: payload
                }
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
        case TOGGLE_INFECTION_RADIUS:
            return {
                ...state,
                person: {
                    ...state.person,
                    showInfectionRadius: payload
                }
            }
        case TOGGLE_AVOIDANCE_RADIUS:
            return {
                ...state,
                person: {
                    ...state.person,
                    showAvoidanceRadius: payload
                }
            }
        case SET_SICKNESS_MORTALITY_RATE:
            return {
                ...state,
                sickness: {
                    ...state.sickness,
                    mortalityRate: payload
                }
            }
        case SET_SICKNESS_TOTAL_DURATION:
            return {
                ...state,
                sickness: {
                    ...state.sickness,
                    totalDuration: payload
                }
            }
        case SET_SICKNESS_INCUBATION:
            return {
                ...state,
                sickness: {
                    ...state.sickness,
                    incubation: payload
                }
            }
        case SET_SICKNESS_CONTAGIOUS:
            return {
                ...state,
                sickness: {
                    ...state.sickness,
                    contagious: payload
                }
            }
        default: return state;
    }
}


export default PandemicStoreReducer;