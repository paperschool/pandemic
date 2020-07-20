import Vector from "./Vector";
import { random, map } from "./Utility";


class Person {

    private radius: number;

    private speed: number;
    private sickSpeed: number;
    private healthySpeed: number;

    private position: Vector;

    private sick: boolean;
    private sicknessDelayMax: number;
    private sicknessDelay: number;

    private infectionRadius: number;
    private avoidanceRadius: number;

    constructor(x: number, y: number) {
        this.radius = 5;

        this.sickSpeed = 5;
        this.healthySpeed = 2;
        this.speed = this.healthySpeed;

        this.position = new Vector(x, y);

        this.sick = false;
        this.sicknessDelayMax = 1000;
        this.sicknessDelay = 0;

        this.infectionRadius = 10;
        this.avoidanceRadius = 10;
    }

    isSick() {
        return this.sick;
    }

    isNear(other: Person) {
        const personDistance = this.position.distance(other.getPosition());

        const minSeparation = this.radius + other.getRadius() + this.infectionRadius;

        return personDistance < minSeparation;
    }

    getPosition() {
        return this.position;
    }

    getRadius() {
        return this.radius;
    }

    infect() {
        this.speed = this.sickSpeed;
        this.sick = true;
    }

    move() {

        this.impulse(
            new Vector(this.speed * random(-1, 1), this.speed * random(-1, 1))
        );
    }

    avoid(other: Person) {
        const personDistance = this.position.distance(other.position);

        if (personDistance < this.avoidanceRadius) {
            const avoidanceImpulse = new Vector().set(this.position).sub(other.getPosition());
            this.impulse(avoidanceImpulse.normalise().scale(2));
        }
    }

    impulse(direction: Vector) {
        this.position.x += direction.x;
        this.position.y += direction.y;
    }

    resolveBounds(width: number, height: number) {
        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;

        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;
    }

    sickness() {
        if (this.sick) {
            if (this.sicknessDelay < this.sicknessDelayMax) {
                this.sicknessDelay++;
            }
        }
    }

    update(p5: any) {
        this.sickness();
        this.move();
        this.resolveBounds(p5.width, p5.height);
    }

    draw(p5: any) {
        if (this.sick) {
            p5.fill(
                map(this.sicknessDelay, 0, this.sicknessDelayMax, 100, 255),
                100,
                100
            );
        } else {
            p5.fill(100, 200, 100);
        }

        p5.circle(this.position.x, this.position.y, this.radius * 2);
    }
}

export default Person;
