import { random } from "./Utility";
import Person from "./Person";
import Vector from "./Vector";

class People {

    private population: number;
    private people: Person[] = [];

    constructor(population: number) {
        this.population = population;
    }

    setup(worldSize: Vector, person: any) {
        for (let personIndex = 0; personIndex < this.population; personIndex++) {
            let newPerson = new Person(
                random(0, worldSize.x),
                random(0, worldSize.y)
            )

            newPerson.setRadius(person.radius);

            newPerson.setHealthySpeed(person.healthySpeed);
            newPerson.setSickSpeed(person.sickSpeed);

            newPerson.setInfectionRadius(person.infectionRadius);
            newPerson.setAvoidanceRadius(person.avoidanceRadius);

            this.people.push(newPerson);
        }

        this.people[Math.floor(random(0, this.population - 1))].infect();
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
                if (sickPerson.isNear(healthyPerson)) {
                    healthyPerson.infect();
                } else {
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