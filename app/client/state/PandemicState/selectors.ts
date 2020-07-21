export const getPopulation = (state: any) => state.population;

export const getPerson = (state: any) => state.person;

export const getPersonAvoidanceSpeed = (state: any) => getPerson(state).avoidanceSpeed;
export const getPersonSickSpeed = (state: any) => getPerson(state).sickSpeed;
export const getPersonHealthySpeed = (state: any) => getPerson(state).healthySpeed;

export const getPersonRadius = (state: any) => getPerson(state).radius;
export const getPersonInfectionRadius = (state: any) => getPerson(state).infectionRadius;
export const getPersonAvoidanceRadius = (state: any) => getPerson(state).avoidanceRadius;

export const getShowInfectionRadius = (state: any) => getPerson(state).showInfectionRadius;
export const getShowAvoidanceRadius = (state: any) => getPerson(state).showAvoidanceRadius;

export const getSickness = (state: any) => state.sickness;

export const getSicknessMortalityRate = (state: any) => getSickness(state).mortalityRate;
export const getSicknessTotalDuration = (state: any) => getSickness(state).totalDuration;
export const getSicknessIncubation = (state: any) => getSickness(state).incubation;
export const getSicknessContagious = (state: any) => getSickness(state).contagious;