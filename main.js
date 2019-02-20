//Question 01 - Callback function

var firstFunction = function () {               //Created function as a variable.
    console.log("Hello World!");                //Prints Hello World.
}

function secondFunction(xyz) {                  //argument passed to this function executed as a function inside the body.
    xyz();
}

secondFunction(firstFunction);                  //Call the second function passing the first function as the argument.



//Question 02 - Use curly brackets to create JSON like JavaScript object.

var Student = {
    name : "Sukanya",                            //Properties
    id : "IT17110808",                           //Properties
    age : "21",                                  //Properties

    printName : function () {                    //Function
        console.log("My name is " + this.name);
    }
}

console.log(Student.age);

Student.printName();                             //Call function

//Question 03

var vehicleName = "car"                          //

function printVehicleName(){
    console.log(this.vehicleName)
}

var Vehicle = {
    vehicleName : "van",
    getVehicleName : printVehicleName()
}

Vehicle.getVehicleName
printVehicleName()


//Question 04

function calc(tax) {
    
    function taxAmount(amount) {
        return amount + tax;
    }

    return taxAmount;
}

var ans = calc(10);

console.log(ans(5));


//Question 05

function githubAPI(callback){
    $.getJSON("https://api.github.com/users", callback);
}

function userEx(data){
    data.forEach(element => {
        if(element.id == 1){
            console.log(element.url)
        }
    });
}

githubAPI(userEx);



