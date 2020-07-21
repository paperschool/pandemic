import { random } from "./Utility";
import Person from "./Person";
import Vector from "./Vector";

class People {

    private population: number = 0;
    private people: Person[] = [];

    constructor(population?: number) {
        this.population = population;
    }

    setPopulation(population: number) {
        this.population = population;
    }

    setup(worldSize: Vector, options: any, reconstructPopulation: boolean) {
        if (reconstructPopulation) {
            this.setPopulation(options.population);
            this.people = [];
        }

        const peopleMax = reconstructPopulation ? this.population : this.people.length;

        for (let personIndex = 0; personIndex < peopleMax; personIndex++) {

            let person;

            if (reconstructPopulation) {
                person = new Person(
                    random(0, worldSize.x),
                    random(0, worldSize.y)
                );
                this.people.push(person);
            } else {
                person = this.people[personIndex];
            }

            if (person) {
                person.setRadius(options.person.radius);
                person.setAvoidanceSpeed(options.person.avoidanceSpeed);
                person.setHealthySpeed(options.person.healthySpeed);
                person.setSickSpeed(options.person.sickSpeed);
                person.setInfectionRadius(options.person.infectionRadius);
                person.setAvoidanceRadius(options.person.avoidanceRadius);
                person.setShowAvoidanceRadius(options.person.showAvoidanceRadius);
                person.setShowInfectionRadius(options.person.showInfectionRadius);
                person.setSicknessMortality(options.sickness.mortalityRate);
                person.setSicknessTotalDuration(options.sickness.totalDuration);
                person.setSicknessIncubation(options.sickness.incubation);
                person.setSicknessContagious(options.sickness.contagious);
            }
        }
    }

    clearDead() {
        this.people = this.people.filter(people => !people.isDead());
    }

    infectPerson() {
        this.people[Math.floor(random(0, this.people.length - 1))].infect();
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

        if (sickPeople.length === 0) {
            this.infectPerson();
        } else {
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
    }

    update(p5: any) {
        this.people.forEach(person => person.update(p5));
        this.checkColisions();
        this.clearDead();
    }

    draw(p5: any) {
        this.people.forEach(person => person.draw(p5));
    }
}

export default People;