class Mouse {
    set status(value) {
        this._status = value;
    }
    get status() {
        return this._status;
    }
    constructor(name,speed,weight) {
        this.name =name
        this.weight = weight
        this.speed = speed
        this._status = true
    }

    chirp(){
        console.log("Squeak !!")
    }
}