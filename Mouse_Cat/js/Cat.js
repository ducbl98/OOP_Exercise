class Cat {
    set weight(value) {
        this._weight = value;
    }

    get weight() {
        return this._weight;
    }

    constructor(name, speed, weight) {
        this.name = name
        this.speed = speed
        this._weight = weight;
    }

    hiss() {
        console.log("Meow")
    }

    catchMouse(mouse) {
        if (this.speed <= mouse.speed) {
            console.log("This cat can't catch this mouse ")
        } else {
            mouse.chirp()
            this.eatMouse(mouse)
        }
    }

    eatMouse(mouse) {
        if (mouse.status) {
            this._weight += mouse.weight
            mouse.status = false
        } else {
            console.log("This Mouse is dead")
        }
    }
}