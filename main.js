let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, 'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
let message;
message = 'abc';
let endWithC = message.endsWith('c');
let altWay = message.endsWith('c');
let log = function (message) {
    console.log(message);
};
let doLog = (message) => {
    console.log(message);
};
let doLog2 = (message) => console.log(message);
let doLog3 = () => console.log();
/*interface Point{
    x:number,
    y:number

    draw: ()=> void;
    distance: (point:Point) => {

    }
}

let drawPoint = (point:Point) => {
    //..
}

let getDistance = (pointA:Point, pointB:Point) => {
    //..
}

/*drawPoint({
    x:1,
    y:2
})*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    distance(anotherPoint) {
        //..
    }
}
let point = new Point(3, 4);
//point.x=1;
//point.y=2;
point.draw();
