interface Point{
    x:number,
    y:number
}
interface Passenger{
    name:string;
    phone:string;
}
interface Vehicle{
    current:Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passengers:Passenger):void;
    removePassengers(passengers:Passenger):void
}

let travelTo=(point:Point)=>{
//..
}
let getDistance=(pointA:Point,pointB:Point)=>{
    //..
}

travelTo({
x:1,
y:2
})