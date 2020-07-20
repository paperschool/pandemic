import { randomInt, random } from "./Utility";
import Vector from "./Vector";
import People from "./People";

class Animation {

    private size: Vector;
    private people: People;

    constructor() {
        this.size = this.getCanvasSize();
        this.people = new People(1000);
    }

    getCanvasSize() {
        return new Vector(
            window.innerWidth,
            window.innerHeight,
        )
    }

    resize(p5: any) {
        const { x, y } = this.getCanvasSize()
        this.size = this.getCanvasSize();


        p5.resizeCanvas(x, y);
    }

    setup(p5: any, canvasParentRef: any) {
        const { x, y } = this.getCanvasSize()
        p5.createCanvas(x, y).parent(canvasParentRef);
        this.people.setup(p5);
    }

    update(p5: any) {
        this.people.update(p5);
    }

    draw(p5: any) {
        this.update(p5);
        p5.noStroke();
        p5.background(50, 50, 50, 50);
        this.people.draw(p5);
    }

}

export default Animation;
