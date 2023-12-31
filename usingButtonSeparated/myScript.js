function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("demo2").innerHTML = 5 + 6;

  //Using document.write() (this will delete all existing html)
  // meaning that it will create a blank space and then shows out what
  // 5 + 6 is, which is 11

  //document.write(5 + 6);

  //window.alert() shows an alert window when the button is clicked
  //having window is optional in window.alert()
  //window.alert() and alert() will give the same output

  //alert(5 + 6);

  /*console.log() shows on the console
  to access the console:
   1. right click the browser
   2. click inspect
   3. go in console tab
  once you click ok on the alert tab then it will print out 11 in the console */
  console.log("11");

  let x, y, z; // good practice to declare the variable first
  x = 5;
  y = 6;
  z = x + y + y;

  /*This is also the same as above:
    let x = 5; y = 6; z = x + y + y; */

  let price1 = 5; //this value can be changed
  let price2 = 20; //this value can be changed
  const total = price1 + price2; //this value can NOT be changed because of the keyword const

  document.getElementById("demo2").innerHTML = z;

  let $ = "Hello world"; //commonly used as an alias for the main function in a JavaScript library

  let _lastName = "Doe"; //commonly used as an alias for private or hidden variables

  document.getElementById("demo3").innerHTML = $;

  //creating a constant array of cars
  const cars = ["Saab", "Volvo", "BMW"];

  //Changing an element in the array of cars
  cars[0] = "Toyota";

  //adding an element in the array of cars
  cars.push("Audi");

  //prints out cars on console
  console.log(cars);

  //creating object
  const car = { type: "Fiat", model: "500", color: "white" };

  //changing a property:
  car.color = "red";

  //adding a property:
  car.owner = "John";

  //prints out car on console
  console.log(car);

  let text1 = "John";
  let text2 = "Doe";
  let text3 = text1 + " " + text2;
  console.log(text3);

  let text4 = "What a very ";
  text4 += "nice day";
  console.log(text4);

  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

  let value = toCelsius(77);

  document.getElementById("demo4").innerHTML = value;

  //Both of these commands are the same
  let text = "The temperature is " + value + " Celsius";
  //let text = "The temperature is " + toCelsius(77) + " Celsius";

  let str = "Apple, Banana, Kiwi";
  let part = str.substring(-2, 13);

  document.getElementById("demo5").innerHTML = part;

  //const cars = ["Saab", "Volvo", "BMW"];
  let car1 = cars[0];

  //changing a array element
  cars[0] = "Opel";

  //converting a string array to a string
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("Demo").innerHTML = fruits.toString();

  //accessing the full array
  document.getElementById("Demo1").innerHTML = cars;

  const numbers = [45, 4, 9, 16, 25];

  let txt = "";
  numbers.forEach(myFunction1);

  function myFunction1(value, index, array) {
    txt += value;
  }

  let language = "JavaScript";

  let text5 = "";
  for (let x of language) {
    text5 += x;
  }
}
