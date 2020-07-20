export const getPopulation = (state: any) => state.population;

export const getPerson = (state: any) => state.person;

export const getPersonSickSpeed = (state: any) => getPerson(state).sickSpeed;
export const getPersonHealthySpeed = (state: any) => getPerson(state).healthySpeed;

export const getPersonRadius = (state: any) => getPerson(state).radius;
export const getPersonInfectionRadius = (state: any) => getPerson(state).infectionRadius;
export const getPersonAvoidanceRadius = (state: any) => getPerson(state).avoidanceRadius;
