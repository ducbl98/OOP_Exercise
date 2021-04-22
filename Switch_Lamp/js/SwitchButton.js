class SwitchButton {
    constructor() {
        this.status = false
        this.lamp = new ElectricLamp()
    }

    connectToLamp() {
        if (!this.status) {
            this.status = true
        } else {
            console.log("Switch is already connected")
        }
    }

    switchOn() {
        if (this.status) {
            if (!this.lamp.status) {
                this.lamp.turnOn()
            }else {
                console.log("Lamp is already on")
            }
        }else {
           console.log("Switch is not connected")
        }
    }
    switchOff() {
        if (this.status) {
            if (this.lamp.status) {
                this.lamp.turnOff()
            }else {
                console.log("Lamp is already off")
            }
        }else {
           console.log("Switch is not connected")
        }
    }
}