// find the largest number in an array
const largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
}



  // add numbers in an array
const sum = (arr) => {
    const total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total
}


  
module.exports = { 
    largeNumber,
    sum
}