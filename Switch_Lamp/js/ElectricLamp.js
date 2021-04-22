class ElectricLamp {
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    constructor() {
        this._status = false
    }
    turnOn(){
        if(!this._status){
            this._status=true
        }else {
            console.log("Lamp is off")
        }
    }
    turnOff(){
        if(this._status){
            this._status=false
        }else {
            console.log("Lamp is on")
        }
    }
}