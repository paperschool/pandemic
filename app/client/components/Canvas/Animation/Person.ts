import Vector from "./Vector";
import { random, map } from "./Utility";


class Person {

    private radius: number = 5;

    private speed: number = 5;
    private sickSpeed: number = 5;
    private healthySpeed: number = 5;

    private position: Vector;

    private sick: boolean = false;
    private sicknessDelayMax: number = 1000;
    private sicknessDelay: number = 0;

    private infectionRadius: number = 10;
    private avoidanceRadius: number = 10;

    private avoiding: boolean;

    constructor(x: number, y: number) {
        this.position = new Vector(x, y);
    }

    getPosition() {
        return this.position;
    }

    getRadius() {
        return this.radius;
    }

    setHealthySpeed(healthySpeed: number) {
        this.healthySpeed = healthySpeed;
        if (!this.sick) {
            this.speed = this.healthySpeed;
        }
    }

    setSickSpeed(sickSpeed: number) {
        this.sickSpeed = sickSpeed;
        if (this.sick) {
            this.speed = this.sickSpeed;
        }
    }

    setRadius(radius: number) {
        this.radius = radius;
    }

    setInfectionRadius(infectionRadius: number) {
        this.infectionRadius = infectionRadius;
    }

    setAvoidanceRadius(avoidanceRadius: number) {
        this.avoidanceRadius = avoidanceRadius;
    }

    isSick() {
        return this.sick;
    }

    isNear(other: Person) {
        const personDistance = this.position.distance(other.getPosition());
        const minSeparation = this.radius + other.getRadius() + this.infectionRadius;

        return personDistance < minSeparation;
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

        this.avoiding = true;

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
        this.avoiding = false;

        this.sickness();
        this.move();
        this.resolveBounds(p5.width, p5.height);
    }

    draw(p5: any) {
        p5.fill(100, 200, 100);

        if (this.sick) {
            p5.fill(
                map(this.sicknessDelay, 0, this.sicknessDelayMax, 100, 255),
                100,
                100
            );
        }

        if (this.avoiding) {
            p5.fill(100, 100, 200);
        }

        p5.noStroke()
        p5.circle(this.position.x, this.position.y, this.radius * 2);

        if (this.sick) {
            p5.noFill()
            p5.stroke(255)
            p5.circle(this.position.x, this.position.y, (this.radius * 2) + this.infectionRadius)
        }
    }
}

export default Person;
