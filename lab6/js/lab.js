// Summary.
//Description.
// @Link URL
// @file This files defines the MyClass class.
//@author Yasmin Kashani
//@since 2022.4.25

//Define variables
var myMainRide = {
  make : "Ford",
  model : "Taurus",
  color : "Rusty",
  year : 1995,
  age : function() {
    return 2019 - age;
  }
}

var myTransport = ["Ford Taurus", "Bike", "Ride from friends", "Lime Scooter"]


//Output
document.writeIn("Kinds of transportation I use:", myTransport, ",br>");

document.writeIn("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'));
