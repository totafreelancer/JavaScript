// function processInput() {
//     let textInput = document.getElementById('textInput');
//     let Number = textInput.value;
//     let outputElement = document.getElementById('output');

//     if (Number >= 100) {
//         outputElement.textContent = "Number is invalid";
//     }else if (Number >= 90) {
//         outputElement.textContent = "A+";
//     }else if (Number >= 80){
//         outputElement.textContent = "A";
//     }else if (Number >= 70){
//         outputElement.textContent = "A-";
//     }else if (Number >= 60){
//         outputElement.textContent = "B";
//     }else if (Number >= 50){
//         outputElement.textContent = "c";
//     }else if (Number >= 40){
//         outputElement.textContent = "D";
//     }else if (Number >= 33){
//         outputElement.textContent = "E";
//     }else{
//         outputElement.textContent = "F";
//     }
//   }



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


// function createPyramid() {
//   const rows = document.getElementById('rowsInput').valueAsNumber;
//   const pyramidContainer = document.getElementById('pyramidContainer');
//   pyramidContainer.innerHTML = ''; // Clear previous content

//   for (let i = 0; i < rows; i++) {
//     let row = '';
//     for (let j = 0; j < rows - i - 1; j++) {
//       row += '&nbsp;'; // Add spaces for alignment
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//       row += '*'; // Add stars
//     }
//     row += '<br>'; // Line break for the next row
//     pyramidContainer.innerHTML += row;
//   }
// };


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


// let variabol = function compareValues(a, b, c) {
//   let max = Math.max(a, b, c);
//   let min = Math.min(a, b, c);

//   console.log(`Maximum value: ${max}`);
//   console.log(`Minimum value: ${min}`);
// }
// variabol(10, 5, 8);

// let vararofun = (a, b, c) => {
//   let oddEven = {
//       a: a % 2 === 0 ? 'even' : 'odd',
//       b: b % 2 === 0 ? 'even' : 'odd',
//       c: c % 2 === 0 ? 'even' : 'odd'
//   };

//   console.log(`a is ${oddEven.a}`);
//   console.log(`b is ${oddEven.b}`);
//   console.log(`c is ${oddEven.c}`)
// }
// vararofun(10, 5, 8);

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
  
// }
// Closuress()


// let str = "123";
// let num = parseInt(str);
// console.log(typeof num, num); // Output: 123


/* ================= class ================== */
// class studen {
//   constructor(Name, Class, Rol, Age, clgName) {
//     this.Name = Name;
//     this.Class = Class;
//     this.Rol = Rol;
//     this.Age = Age;
//     this.clgName = clgName
//   };
//   studenSit() {
//     console.log(`student name: ${this.Name} and student class: ${this.Class} and student roll: ${this.Rol} and student age: ${this.Age} and student clg: ${this.clgName}`);
//   }
// }

// let Tota = new studen("Tota", 12, 1, 22, "Rajshahi clg");
// let Motiur = new studen("Motiur", 12, 1, 22);
// Tota.studenSit();
// Motiur.studenSit();





// ২ গাড়ি 
// ১ম   গাড়িতে টায়ার ৫, গ্লাস ৩, স্টিয়ারিং  ১ লাগে 
// ২য় গাড়িতে  টায়ার ৪, গ্লাস ৪, স্টিয়ারিং  ১ লাগে 
// সবাইকে  টায়ার ৫০, গ্লাস ৩০, স্টিয়ারিং  ১০ দেয়া হলে 
// ১ম কয়টি গাড়ি হবে এবং ২য় গাড়ি হবে?
// জাভাস্ক্রিপ ক্লাস ব্যবহার করো 

// class Car {
//   constructor(tires, glass, steering) {
//       this.tires = tires;
//       this.glass = glass;
//       this.steering = steering;
//   }

//   static calculateCars(car, Tires, Glass, Steering) {
//       const maxCarsByTires = Tires / car.tires;
//       const maxCarsByGlass = Glass / car.glass;
//       const maxCarsBySteering = Steering / car.steering;

//       return Math.min(maxCarsByTires, maxCarsByGlass, maxCarsBySteering);
//   }
// }

// const car1 = new Car(5, 3, 1);
// const car2 = new Car(4, 4, 1);

// const totalTires = 500;
// const totalGlass = 300;
// const totalSteering = 100;

// const car1Count = Car.calculateCars(car1, totalTires, totalGlass, totalSteering);
// const car2Count = Car.calculateCars(car2, totalTires, totalGlass, totalSteering);

// console.log(`1st car no: ${car1Count} car`);
// console.log(`2nd car no: ${car2Count} car`);

// ২ গাড়ি 
// ১ম   গাড়িতে টায়ার ৫, গ্লাস ৩, স্টিয়ারিং  ১ লাগে 
// ২য় গাড়িতে  টায়ার ৪, গ্লাস ৪, স্টিয়ারিং  ১ লাগে 
// সবাইকে  টায়ার ৫০, গ্লাস ৩০, স্টিয়ারিং  ১০ দেয়া হলে 
// ১ম কয়টি গাড়ি হবে এবং ২য় গাড়ি হবে?
// জাভাস্ক্রিপ ক্লাস ব্যবহার করো 


// class Car {
//   constructor (piece){
//     piece
//     this.car
//   };
//   bmw(piece){
//     let tyre = piece/5;
//     let look = piece/3;
//     let str = piece
//     if(tyre<look && look<str){
//       this.car = console.log(tyre);
//     }else{
//       this.car = console.log(`not enough tyre`);
//     }
//   };
//   audi (piece){
//     let tyre1 = piece/4;
//     let look1 = piece/4;
//     let str1 = piece
//     if(tyre1<look1 && look1<str1){
//       this.car = console.log(tyre1);
//     }else{
//       this.car = console.log(`not enough tyre`);
//     }
//   };
// }
// const BMW = new Car;
// const AUD = new Car;
// console.log(AUD.audi(100),BMW.bmw(100));













/*========== array ==========*/

// const Mylength = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h'];

// console.log(Mylength.at(5));

// 
// Array.prototype.indexOf()
// Array.prototype.join()
// Array.prototype.some()
// Array.prototype.lastIndexOf()
// Array.prototype.toReversed()
// Array.prototype.values()
// Array.prototype.with()
// 

const texts = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`]

const text1 = texts.slice(2, 10,);
console.log(text1);
console.log(texts.pop());
console.log(texts);
console.log(texts.shift());
console.log(texts);
console.log(texts.push("last"));
console.log(texts);
console.log(texts.unshift("past"));
console.log(texts);