export default async (): Promise<any> => {

    return {
        population: 100,
        person: {
            radius: 10,
            avoidanceRadius: 10,
            showAvoidanceRadius: false,
            infectionRadius: 10,
            showInfectionRadius: false,
            healthySpeed: 1,
            sickSpeed: 1,
            avoidanceSpeed: 4,
        },
        sickness: {
            mortalityRate: 0.01,
            totalDuration: 10000,
            incubation: 1000,
            contagious: 1000,
        }
    }
}