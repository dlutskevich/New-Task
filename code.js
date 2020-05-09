const a = parseInt(prompt('Просто впишите 0'))

let arr = []

if (a === 0) {
  arr.push('1', '2', '3', '4', '5')
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]) / arr.length
  }
  alert(sum)
}

function calcNat(array) {
  let index = 0;
  const result = []
  while (index < array.length) {
    if (array[index] % 2 === 0) {
      result.push(array[index])
    }
    index++
  }
  return (result)
}

alert(calcNat(arr))



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