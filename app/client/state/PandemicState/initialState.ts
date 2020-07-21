export default async (): Promise<any> => {

    return {
        person: {
            radius: 10,
            avoidanceRadius: 10,
            showAvoidanceRadius: false,
            infectionRadius: 10,
            showInfectionRadius: false,
            healthySpeed: 1,
            sickSpeed: 1,
            avoidanceSpeed: 4
        },
        population: 100
    }
}