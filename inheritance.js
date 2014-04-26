/*this is how javascript doing inheritance*/

/*Base class*/
function vehicle(hasEngine, has Wheels){
	this.hasEngine = hasEngine || false;
	this.hasWheels = hasWheels || false;
}

/*implementation of base class*/
function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

/*create a new object(with properties hasEngine and hasWheels)and 
assign to __proto__ property to Vehicle.prototype*/
car.prototype = new vehicle(true, true);

/*Extended Car using prototype*/
/*extended the functionality of Car by adding another function to the 
object which is referenced using prototype*/
car.prototype.displaySpace = function()
{console.log(this.make+", "+this.model+", "+this.year+", "this.hasEngine+", "+this.hasWheels);}

/*Create a new car*/
/*
make: “Audi”
model: “A4″
year"2014
__proto__ (pointing to Car.prototype, which holds hasEngine, hasWheels and displaySpecs)*/
var myAudi = new Car('Audi','TT',2014);

myAudi.displaySpecs(); // logs: Audi, A4, 2014, true, true
/*
This works because of the way JavaScript looks for the availability for properties of objects:

First, it checks whether displaySpecs is available in myAudi (which it is not)
Next, it goes up the inheritance chain using __proto__ which points to Car.protoype
Car.prototype holds displaySpecs, so the function gets executed in with the scope of myAudi.
This means that within displaySpecs, the keyword this refers to myAudi object.
Consequently, it prints out the properties of myAudi (“Audi”, “A4″ etc.)
*/

/*Extend vehicle use prototype*/
vehicle.prototype.hasGPS = true;
console.log(myAudi.hasGPS);// logs: true
/*
This is, again, due to the inheritance chain we have set up:

Is hasGPS available in myAudi itself: no
Is hasGPS available in Car.prototype: no
Is hasGPS available in Vehicle.prototype: yes
*/

/*If you would want to avoid passing in properties to the Vehicle constructor when setting up 
the inheritance chain, you can call the Vehicle constructor from within the Car constructor*/
function Car(make,model,year){
	this.base = vehicle;
	this.base(true,true);

	this.make = make;
	this.model = model;
	this.year = year;
}

/*and setting up dynamic inheritance*/
Car.prototype = new vehicle;

/*
http://www.klauskomenda.com/code/javascript-inheritance-by-example/
*/