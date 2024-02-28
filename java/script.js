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



// let a = 86;

// switch(true){
//     case (a>91 && a<100):
//         console.log("A+")
//         break
//     case (a>81 && a<90):
//         console.log("A")
//         break
//     case (a>71 && a<80):
//         console.log("A-")
//         break
//     case (a>61 && a<70):
//         console.log("B")
//         break
//     case (a>51 && a<60):
//         console.log("C")
//         break
//     case (a>41 && a<50):
//         console.log("D")
//         break
//     case (a>33 && a<40):
//         console.log("E")
//     default: console.log("F")
// }





for (let i=1; i<100; i=i+2){
    console.log(i);
}