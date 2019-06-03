import {Point} from './point'

let a:number;
let b:boolean;
let c: string;
let d:any;
let e:number[] = [1,2,3];
let f:any[] = [1, true, 'a', false];


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;

let message:string;
message = 'abc';

let endWithC = (<string>message).endsWith('c');
let altWay = (message as string).endsWith('c');

let log = function(message){
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

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



let point = new Point(1,2);

//point.x=1;
//point.y=2;
point.draw();
let x = point.x;
point.x = 10;