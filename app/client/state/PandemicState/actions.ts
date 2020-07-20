import {
    SET_POPULATION,
    SET_SICK_SPEED,
    SET_HEALTHY_SPEED,
    SET_PERSON_RADIUS,
    SET_INFECTION_RADIUS,
    SET_AVOIDANCE_RADIUS
} from "./constants";

export const setPopulation = (dispatch: any, population: number) => {
    dispatch({ type: SET_POPULATION, payload: population });
}

export const setSickSpeed = (dispatch: any, radius: number) => {
    dispatch({ type: SET_SICK_SPEED, payload: radius });
}

export const setHealthySpeeed = (dispatch: any, radius: number) => {
    dispatch({ type: SET_HEALTHY_SPEED, payload: radius });
}

export const setPersonRadius = (dispatch: any, radius: number) => {
    dispatch({ type: SET_PERSON_RADIUS, payload: radius });
}

export const setInfectionRadius = (dispatch: any, radius: number) => {
    dispatch({ type: SET_INFECTION_RADIUS, payload: radius });
}

export const setAvoidanceRadius = (dispatch: any, radius: number) => {
    dispatch({ type: SET_AVOIDANCE_RADIUS, payload: radius });
}
