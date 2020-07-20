import { random } from "./Utility";
import Person from "./Person";

class People {

    private population: number;
    private people: Person[] = [];

    constructor(population: number) {
        this.population = population;
    }

    setup({ width, height }: any) {
        for (let person = 0; person < this.population; person++) {
            this.people.push(new Person(random(0, width), random(0, height)));
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
        this.checkColisions();
        this.people.forEach(person => person.update(p5));
    }

    draw(p5: any) {
        this.people.forEach(person => person.draw(p5));
    }
}

export default People;