import { randomInt, random } from "./Utility";
import Vector from "./Vector";
import People from "./People";
class Animation {

    private size: Vector;
    private people: People;

    constructor(options: any) {
        this.people = new People();
        this.reset(options)
    }

    getCanvasSize() {
        return new Vector(
            window.innerWidth,
            window.innerHeight,
        )
    }

    resize(p5: any) {
        this.size = this.getCanvasSize();
        p5.resizeCanvas(this.size.x, this.size.y);
    }

    reset(options: any) {
        this.size = this.getCanvasSize();
        this.people.setup(this.size, options, true);
    }

    refresh(options: any) {
        this.size = this.getCanvasSize();
        this.people.setup(this.size, options, false);
    }

    setup(p5: any, canvasParentRef: any) {
        p5.createCanvas(this.size.x, this.size.y).parent(canvasParentRef);

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
