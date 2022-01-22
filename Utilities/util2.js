// remove the 3rd item from array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
}

// concatenate two arrays
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
  
module.exports = { 
    cut3,
    concat
}