


function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   }

Square.prototype.isSquare = function() {
       return ((this.a === this.b) && (this.b===this.c) && (this.c === this.d))
       
}

const mySqr = new Square(3,4,4,4);
mySqr.isSquare()