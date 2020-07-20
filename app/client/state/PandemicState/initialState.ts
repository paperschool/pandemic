export default async (): Promise<any> => {

    return {
        person: {
            radius: 10,
            avoidanceRadius: 10,
            showAvoidanceRadius: true,
            infectionRadius: 10,
            showInfectionRadius: true,
            healthySpeed: 1,
            sickSpeed: 1,
            avoidanceSpeed: 4
        },
        population: 100
    }
}