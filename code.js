function rand() {
  let min = 1000;
  let max = 9999;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random
}

function generateData(amount) {
  const resultData = [];

  for (let i = 0; i < amount; i++) {
    resultData.push(rand());
  }
  return resultData;
}

const userInput = Number.parseInt(prompt())
const generatedArray = generateData(userInput);

// let result = rand()

function mathCalc(array) {
  let amountEven = 0;
  let amountOdd = 0;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      amountEven++
    }
    else {
      amountOdd++
    }
    sum = sum + array[index]
  }
  console.log(amountEven, amountOdd, sum / array.length)
}

// function calcAverage(array) {
//   let result = 0;
//   for (let index = 0; index < array.length; index++) {
//     const current = array[index]
//     result = result + current
//   }
//   return result / array.length
// }

// function calcEven(array) {
//   let result = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 === 0) {
//       result++
//     }
//   }
//   return result
// }

// function calcOdd(array) {
//   let result = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 != 0) {
//       result++
//     }
//   }
//   return result
// }

// let averageNum = calcAverage(generatedArray)
// console.log(averageNum)

console.log(generatedArray)
mathCalc(generatedArray)


// let evenNum = calcEven(generatedArray)
// let oddNum = calcOdd(generatedArray)
// console.log(evenNum)
// console.log(oddNum)




























// let i = 0;
// do {
//   arr.push(rand);
//   i++;
// }
// while (i < arr.length);
// alert(i)

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);



// let min = 1000;
// let max = 9999;
// let random = Math.floor(Math.random() * (+max - +min)) + +min;
// arr.push(random)
// alert(arr)

// function calcNat(array) {
//   let index = 0;
//   const result = []
//   while (index < array.length) {
//     if (array[index] % 2 === 0) {
//       result.push(array[index])
//     }
//     index++
//   }
//   return (result)
// }









































// if (a === 0) {
//   arr.push('1', '2', '3', '4', '5')
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + parseInt(arr[i]) / arr.length
//   }
//   alert(sum)
// }

// function calcNat(array) {
//   let index = 0;
//   const result = []
//   while (index < array.length) {
//     if (array[index] % 2 === 0) {
//       result.push(array[index])
//     }
//     index++
//   }
//   return (result)
// }

// alert(calcNat(arr))

// function average(arr) {
//   return arr.reduce(arr. / arr.length);
// }
// if (a === 4) {
//   arr.push('4')
// }
// if (a === 5) {
//   arr.push('5')
// }

// var arr = ['2', '6', '7'];
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     sum = sum + parseInt(arr[i]);

// }
// alert(sum);



// function randomInteger(min, max) {
//   if 
// }