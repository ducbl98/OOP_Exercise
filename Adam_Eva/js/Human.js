class Human {
    constructor() {
        this._name = ''
        this.gender = true
        this._weight = 0
    }

    isMale() {
        return this.gender
    }

    setGender(boolean) {
        this.gender = boolean
    }
    checkApple(Apple){
        return Apple.isEmpty()
    }
    eat(Apple){
        if(this.checkApple(Apple)){
            Apple.decrease()
            this._weight++
        }
    }
    say(String){
        console.log(String)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}
