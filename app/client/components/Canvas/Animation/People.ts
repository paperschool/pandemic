import { random } from "./Utility";
import Person from "./Person";
import Vector from "./Vector";

class People {

    private population: number;
    private people: Person[] = [];

    constructor(population: number) {
        this.population = population;
    }

    setup(worldSize: Vector, personOptions: any) {
        for (let personIndex = 0; personIndex < this.population; personIndex++) {

            let person = new Person(
                random(0, worldSize.x),
                random(0, worldSize.y)
            )

            person.setRadius(personOptions.radius);
            person.setAvoidanceSpeed(personOptions.avoidanceSpeed);
            person.setHealthySpeed(personOptions.healthySpeed);
            person.setSickSpeed(personOptions.sickSpeed);
            person.setInfectionRadius(personOptions.infectionRadius);
            person.setAvoidanceRadius(personOptions.avoidanceRadius);
            person.setShowAvoidanceRadius(personOptions.showAvoidanceRadius);
            person.setShowInfectionRadius(personOptions.showInfectionRadius);
            this.people.push(person);
        }

        this.people[Math.floor(random(0, this.population - 1))].infect();
    }

    refresh(personOptions: any) {
        this.people.forEach(person => {
            person.setRadius(personOptions.radius);
            person.setAvoidanceSpeed(personOptions.avoidanceSpeed);
            person.setHealthySpeed(personOptions.healthySpeed);
            person.setSickSpeed(personOptions.sickSpeed);
            person.setInfectionRadius(personOptions.infectionRadius);
            person.setAvoidanceRadius(personOptions.avoidanceRadius);
            person.setShowAvoidanceRadius(personOptions.showAvoidanceRadius);
            person.setShowInfectionRadius(personOptions.showInfectionRadius);
        })
    }

    checkColisions() {
        const healthyPeople: Person[] = [];
        const sickPeople: Person[] = [];

        this.people.forEach(person => {
            if (person.isSick()) {
                sickPeople.push(person);
            } else {
                healthyPeople.push(person);
            }
        });

        sickPeople.forEach((sickPerson: Person) => {
            healthyPeople.forEach((healthyPerson: Person) => {
                if (sickPerson.shouldInfect(healthyPerson)) {
                    healthyPerson.infect();
                }

                if (healthyPerson.shouldAvoid(sickPerson)) {
                    healthyPerson.avoid(sickPerson);
                }
            });
        });
    }

    update(p5: any) {
        this.people.forEach(person => person.update(p5));
        this.checkColisions();
    }

    draw(p5: any) {
        this.people.forEach(person => person.draw(p5));
    }
}

export default People;