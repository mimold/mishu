export class Point{
    //private x:number;
    //private y:number;

    constructor(private _x?:number, private _y?:number){
        //this.x = x;
        //this.y = y;
    }

    draw() {
        console.log('X:' + this._x + ', Y:' + this._y);
    }
    distance(anotherPoint:Point){
        //..
    }

    get x(){
        return this._x;
    }

    set x(value:number){
        if(value<0)
            throw new Error('value cannot be less than 0');
        
            this._x = value;
    }
}