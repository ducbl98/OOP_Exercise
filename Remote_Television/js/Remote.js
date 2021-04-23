class Remote {
    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }
    constructor(code) {
        this._code = code;
    }
    switchChannel(television,channel){
        if(television.checkCode(this._code)){
            if (television.status) {
                television.switchChannel(channel)
            }else {
                console.log("The TV is not turn on")
            }
        }else {
            console.log("It is not this TV remote")
        }
    }
    changeVolume(television,volume){
        if(television.checkCode(this._code)){
            if (television.status) {
                television.changeVolume(volume)
            }else {
                console.log("The TV is not turn on")
            }
        }else {
            console.log("It is not this TV remote")
        }
    }
}