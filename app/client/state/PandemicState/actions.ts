import {
    SET_POPULATION,
    SET_AVOIDANCE_SPEED,
    SET_SICK_SPEED,
    SET_HEALTHY_SPEED,
    SET_PERSON_RADIUS,
    SET_INFECTION_RADIUS,
    SET_AVOIDANCE_RADIUS,
    TOGGLE_INFECTION_RADIUS,
    TOGGLE_AVOIDANCE_RADIUS,
    SET_SICKNESS_MORTALITY_RATE,
    SET_SICKNESS_TOTAL_DURATION,
    SET_SICKNESS_INCUBATION,
    SET_SICKNESS_CONTAGIOUS
} from "./constants";

export const setPopulation = (dispatch: any, population: number) => {
    dispatch({ type: SET_POPULATION, payload: population });
}

export const setSickSpeed = (dispatch: any, speed: number) => {
    dispatch({ type: SET_SICK_SPEED, payload: speed });
}

export const setAvoidanceSpeed = (dispatch: any, speed: number) => {
    dispatch({ type: SET_AVOIDANCE_SPEED, payload: speed });
}

export const setHealthySpeed = (dispatch: any, speed: number) => {
    dispatch({ type: SET_HEALTHY_SPEED, payload: speed });
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

export const toggleInfectionRadius = (dispatch: any, status: boolean) => {
    dispatch({ type: TOGGLE_INFECTION_RADIUS, payload: status });
}

export const toggleAvoidanceRadius = (dispatch: any, status: boolean) => {
    dispatch({ type: TOGGLE_AVOIDANCE_RADIUS, payload: status });
}

export const setSicknessMortalityRate = (dispatch: any, rate: number) => {
    dispatch({ type: SET_SICKNESS_MORTALITY_RATE, payload: rate });
}

export const setSicknessTotalDuration = (dispatch: any, duration: number) => {
    dispatch({ type: SET_SICKNESS_TOTAL_DURATION, payload: duration });
}

export const setSicknessIncubation = (dispatch: any, incubation: number) => {
    dispatch({ type: SET_SICKNESS_INCUBATION, payload: incubation });
}

export const setSicknessContagious = (dispatch: any, contagious: number) => {
    dispatch({ type: SET_SICKNESS_CONTAGIOUS, payload: contagious });
}