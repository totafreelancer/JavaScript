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





// for (let i=1; i<100; i=i+2){
//     console.log(i);
// }


// let a = 1
// for (let i=1; i<6; i++){
//     a = a*i;
// }
// console.log(a)






// function createPyramid(tota) {
//     for (let i = 1; i<=tota; i++) {
//         let pattern = '';
//         for (let j = 1; j<=tota-i; j++) {
//             pattern += ' ';
//         }
//         for (let k=1; k<=2*i-1; k++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }

// createPyramid(5);


// let n = 5;
// for (let i=1; i<=n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ')
//     }
//     for (let k=0; k<2*i-1; k++) {
//         process.stdout.write('Tota ')
//     }
// console.log();
// }

// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var arr = new Array();
//     for (var i = 1; i <= totalNumberofRows; i++) {
//       for (var j = 1; j <= i; j++) {
//         arr.push(j);
//         console.log(j);
//       }
//       console.log("\n");
//     }
//   }

// generatePyramid(1);


function createPyramid() {
  const rows = document.getElementById('rowsInput').valueAsNumber;
  const pyramidContainer = document.getElementById('pyramidContainer');
  pyramidContainer.innerHTML = ''; // Clear previous content

  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < rows - i - 1; j++) {
      row += '&nbsp;'; // Add spaces for alignment
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*'; // Add stars
    }
    row += '<br>'; // Line break for the next row
    pyramidContainer.innerHTML += row;
  }
};


// function NumberPlass(y, x) {
//   let number = y*x;
//   console.log(number)
// };
// NumberPlass(15, 55)

// function thardNumber (x, y) {
//   for(x; x<y; x++){
//     console.log(x/3)
//   };
// }
// thardNumber(1, 7)


// Star marking
// function starMar() {
//   const stars = document.querySelectorAll('.star');
//   const ratingValue = document.getElementById('ratingValue');

//   stars.forEach((star) => {
//     star.addEventListener('click', setRating);
//   });

//   function setRating(e) {
//     const clickedStar = e.target;
//     const rating = clickedStar.getAttribute('data-value');

//     ratingValue.textContent = `You rated ${rating} stars!`;

//     stars.forEach((star) => {
//       if (parseInt(star.getAttribute('data-value')) <= parseInt(rating)) {
//         star.classList.add('active');
//       } else {
//         star.classList.remove('active');
//       }
//     });
//   }
// }
// starMar()

// function Closuress(){
//   function compareValues(a, b, c) {
//     let max = Math.max(a, b, c);
//     let min = Math.min(a, b, c);
//     let oddEven = {
//         a: a % 2 === 0 ? 'even' : 'odd',
//         b: b % 2 === 0 ? 'even' : 'odd',
//         c: c % 2 === 0 ? 'even' : 'odd'
//     };
  
//     console.log(`Maximum value: ${max}`);
//     console.log(`Minimum value: ${min}`);
//     console.log(`a is ${oddEven.a}`);
//     console.log(`b is ${oddEven.b}`);
//     console.log(`c is ${oddEven.c}`)
//   }
//   compareValues(10, 5, 8);
  
  
//   function maxminodd(valuA, valuB, valuC) {
//     let max = valuA;
//     let min = valuA;
//     for (let value of [valuB, valuC]) {
//         if (value > max) {
//             max = value;
//         }
//         if (value < min) {
//             min = value;
//         }
//     }
//     let oddEven = {};
//     for (let [name, value] of Object.entries({valuA, valuB, valuC})) {
//         oddEven[name] = value % 2 === 0 ? 'even' : 'odd';
//     }
//     console.log(`Maximum value: ${max}`);
//     console.log(`Minimum value: ${min}`);
//     console.log(`a is ${oddEven.valuA}`);
//     console.log(`b is ${oddEven.valuB}`);
//     console.log(`c is ${oddEven.valuC}`);
//   }
//   maxminodd(10, 5, 8);
  
// }
// Closuress()


let variabol = function compareValues(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);

  console.log(`Maximum value: ${max}`);
  console.log(`Minimum value: ${min}`);
}
variabol(10, 5, 8);

let vararofun = (a, b, c) => {
  let oddEven = {
      a: a % 2 === 0 ? 'even' : 'odd',
      b: b % 2 === 0 ? 'even' : 'odd',
      c: c % 2 === 0 ? 'even' : 'odd'
  };

  console.log(`a is ${oddEven.a}`);
  console.log(`b is ${oddEven.b}`);
  console.log(`c is ${oddEven.c}`)
}
vararofun(10, 5, 8);

function Closuress(){
  function compareValues(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let oddEven = {
        a: a % 2 === 0 ? 'even' : 'odd',
        b: b % 2 === 0 ? 'even' : 'odd',
        c: c % 2 === 0 ? 'even' : 'odd'
    };
  
    console.log(`Maximum value: ${max}`);
    console.log(`Minimum value: ${min}`);
    console.log(`a is ${oddEven.a}`);
    console.log(`b is ${oddEven.b}`);
    console.log(`c is ${oddEven.c}`)
  }
  compareValues(10, 5, 8);
  
}
Closuress()


let str = "123";
let num = parseInt(str);
console.log(typeof num, num); // Output: 123