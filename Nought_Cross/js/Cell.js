const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_COLS = 10;
const DEFAULT_ROWS = 10;
const DEFAULT_CELL_SIZE = 40;

class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.value = VALUE_EMPTY
    }

    getHTML() {
        let top = this.x * DEFAULT_CELL_SIZE
        let left = this.y * DEFAULT_CELL_SIZE
        let cellHTML='<div id="cell-'+this.x+'-'+this.y+'" onclick="play('+this.x+','+this.y+')" class="cell" style="position: absolute; width: '+
            DEFAULT_CELL_SIZE+'px; height:'+
            DEFAULT_CELL_SIZE+'px; left:'+
            left+'px; top:'+
            top+'px; line-height: '+
            DEFAULT_CELL_SIZE+'px;"></div>';
        return cellHTML
    }
    draw(){
        let cellDiv = document.getElementById(`cell-${this.x}-${this.y}`)
        switch (this.value){
            case VALUE_X:
                cellDiv.innerHTML = "X"
                break
            case VALUE_O:
                cellDiv.innerHTML = "O"
                break
            case VALUE_EMPTY:
                cellDiv.innerHTML = ""
                break
        }
    }
}