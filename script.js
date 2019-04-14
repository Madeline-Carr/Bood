/*console.log("Hello!");
console.log("How are you?");
console.log(78);
console.log(false);

// An example of an if else statement.
if(5>7){
  console.log(true);
} else{
  console.log(false);
}

console.log("I am happy");
// alert("WHAT!"); This will make a pop up window that says "WHAT!"

var myName = "Maddie";
var lastName = "Carr";
var numOne = 1;
var numTwo = 2;
var itTrue = true;
var itFalse = false;
var itArray = ["Maddie", "John", "Emily"];

console.log(itArray);

var maddie = document.getElementById("Maddie");
maddie.textContent = "I am " + itArray[0] + " and my sister is " + itArray[2] + "!";

document.write("Hello");

var testObject = {
  name: "Ralph",
  color: "black",
  age: 12,
  eats(){
    return(this.age + this.color)
    var john = document.getElementById("john");
    john.textContent= eats;
  }
};

testObject.eats();

*/

var bood = document.getElementById("bood");
var boodWeight = 5;
//bood.style.backgroundColor = "red";
function showBood() {
  if (boodWeight > 6) {
    bood.src = "Images/skellyPug.jpg";
  } else if (boodWeight > 5) {
    bood.src = "Images/fatPug.jpg";
  } else if (boodWeight > 4) {
    bood.src = "Images/normalPug.jpg";
  } else if (boodWeight > 3) {
    bood.src = "Images/skinnyPug.jpg";
  } else if (boodWeight > 2) {
    bood.src = "Images/skellyPug.jpg";
  }

  /*
  if (boodWeight > 5 && boodWeight < 7) {
    bood.src = "Images/fatPug.jpg";
  } else if (boodWeight < 1) {
    bood.src = "Images/skellyPug.jpg";
  } else if (boodWeight < 2) {
    bood.src = "Images/skinnyPug.jpg";
  } else if (boodWeight == 5) {
    bood.src = "Images/normalPug.jpg";
  } else if (boodWeight => 7) {
    bood.src = "Images/skellyPug.jpg";
  } else {
    bood.src = "Images/normalPug.jpg";
  }
  */
}
function feedBood() {
  boodWeight++;
  showBood();
  console.log(boodWeight);
}

function starveBood() {
  boodWeight--;
  showBood();
  console.log(boodWeight);
}

/*
if (boodWeight==0) {
  bood.src="Images/skellyPug.jpg"
} else if (boodWeight<3){
    bood.src="Images/skinnyPug.jpg"
}else if (boodWeight<7){
    bood.src="Images/normalPug.jpg"
}else if (boodWeight<9){
    bood.src="Images/fatPug.jpg"
}else (){
    bood.src="Images/skellyPug.jpg"
}
*/
