// alert("This is alert");
 
// let Number = 90;

// if (typeof Number =="number" && Number >= 100) {
//     console.log("Number is invalid");
// }else if (typeof Number =="number" && Number >= 90) {
//     console.log("A+");
// }else if (typeof Number =="number" && Number >= 80){
//     console.log("A")
// }else if (typeof Number =="number" && Number >= 70){
//     console.log("A-")
// }else if (typeof Number =="number" && Number >= 60){
//     console.log("B")
// }else if (typeof Number =="number" && Number >= 50){
//     console.log("C")
// }else if (typeof Number =="number" && Number >= 40){
//     console.log("D")
// }else if (typeof Number =="number" && Number >= 33){
//     console.log("E")
// }else{
//     console.log("F")
// }

function processInput() {
    let textInput = document.getElementById('textInput');
    let Number = textInput.value;
    let outputElement = document.getElementById('output');


    if (Number >= 100) {
        outputElement.textContent = "Number is invalid";
    }else if (Number >= 90) {
        outputElement.textContent = "A+";
    }else if (Number >= 80){
        outputElement.textContent = "A";
    }else if (Number >= 70){
        outputElement.textContent = "A-";
    }else if (Number >= 60){
        outputElement.textContent = "B";
    }else if (Number >= 50){
        outputElement.textContent = "c";
    }else if (Number >= 40){
        outputElement.textContent = "D";
    }else if (Number >= 33){
        outputElement.textContent = "E";
    }else{
        outputElement.textContent = "F";
    }
  }