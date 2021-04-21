class Battery {
    constructor() {
        this._energy = energy;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }

    decreaseBattery() {
        if (this._energy > 0) {
            this._energy -= 1
        }
    }
}