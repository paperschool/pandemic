import { map, pythagoras } from "./Utility";

class Vector {

    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    set(other: Vector) {
        this.x = other.x
        this.y = other.y
        return this;
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    sub(other: Vector) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    normalise() {
        return this.scale(this.mag());
    }

    mag() {
        return pythagoras(this.x, this.y)
    }

    distance(other: Vector) {
        return pythagoras(this.x - other.x, this.y - other.y);
    }
}

export default Vector;