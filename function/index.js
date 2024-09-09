/*function functionName(params) {
    operations
    
}
*/
//functionName(argument);    //function calling
//function sayMyName(myName) {
  //  console.log(`Your name is ${myName} `)
    
//}

//sayMyName('west')

const display = document.getElementById("display");

function  appenddToDisplay(input) {
    display.value += input;
      
    
}

function clearDisplay() { 
  display.value = "";
    
    
}
function calculate() {
  display.value =eval(display.value);
    
}

