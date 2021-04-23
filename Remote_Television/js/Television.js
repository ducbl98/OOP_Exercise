class Television {
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get volume() {
        return this._volume;
    }

    set volume(value) {
        this._volume = value;
    }

    get channel() {
        return this._channel;
    }

    set channel(value) {
        this._channel = value;
    }

    constructor(channel, volume, status, code) {
        this._channel = channel;
        this._volume = volume;
        this._status = status;
        this._code = code;
    }

    switchChannel(channel) {
        this.channel = channel
    }

    changeVolume(volume) {
        if (volume > 0) {
            this.volume += volume
        }else {
            if(this.volume>Math.abs(volume)){
                this.volume+=volume
            }else {
                console.log("Volume will be muted if you do this")
            }
        }
    }

    checkCode(code) {
        if (this._code === code) {
            return true
        }
        return false
    }
}