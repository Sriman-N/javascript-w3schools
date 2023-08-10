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

  let _lastName = "Meduri"; //commonly used as an alias for private or hidden variables

  document.getElementById("demo3").innerHTML = $;
}
