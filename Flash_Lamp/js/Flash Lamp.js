class FlashLamp {
    constructor() {
        this.status = false
        this._battery = new Battery()
    }

    get battery() {
        return this.battery.get
    }

    set battery(value) {
        this._battery.set = value;
    }
}