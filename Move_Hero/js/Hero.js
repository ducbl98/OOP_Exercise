class Hero {
    constructor(image, top, left, size, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.size = size
        this.speed = speed
    }

    getHeroElement() {
        return `<img width=" ${this.size} + " 
             height=" ${this.size} "
             src=" ${this.image} "
             style="top: ${this.top}px; left: ${this.left}px;position:absolute;" />`;
    }

    moveRight() {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    moveLeft() {
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }

    moveUp() {
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }

    moveDown() {
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

    goRight() {
        if (this.left < window.innerWidth - this.size) {
            this.moveRight();
        }
        document.getElementById('game').innerHTML = this.getHeroElement();
        setTimeout(this.goRight, 500)
    }

    goLeft() {
        if (this.left > 0) {
            this.moveLeft();
        }
        document.getElementById('game').innerHTML = this.getHeroElement();
        setTimeout(this.goLeft, 500)
    }

    goDown() {
        if (this.top < window.innerHeight - this.size) {
            this.moveDown();
        }
        document.getElementById('game').innerHTML = this.getHeroElement();
        setTimeout(this.goDown, 500)
    }

    goUp() {
        if (this.top > 0) {
            this.moveUp();
        }
        document.getElementById('game').innerHTML = this.getHeroElement();
        setTimeout(this.goUp, 500)
    }

    move() {
        this.goRight()
        this.goDown()
        this.goLeft()
        this.goUp()
        setTimeout(this.move, 500)
    }
}

let hero = new Hero('Katakuri.png', 20, 30, 200, 50)

function goRight() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(goRight, 500)
}

function goDown() {
    if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(goDown, 500)
}

goRight()




