class FlashLamp {
    constructor(energy) {
        this.status = false
        this._battery = new Battery(energy)
    }

    get battery() {
        return this.battery.energy
    }

    set battery(value) {
        this._battery.energy = value;
    }

    getInfor() {
        return `Battery : ${this._battery.energy} Status : ${this.status}`
    }

    turnOn() {
        if (!this.status) {
            this.status = true
        } else {
            alert(`Flash Light Is Already On`)
        }
    }

    turnOff() {
        if (this.status) {
            this.status = false
        } else {
            alert(`Flash Light Is Already Off`)
        }
    }

    light() {
        if (this.status) {
            this._battery.decreaseBattery()
        } else {
            alert(`Flash Light Is Not On`)
        }
    }
}