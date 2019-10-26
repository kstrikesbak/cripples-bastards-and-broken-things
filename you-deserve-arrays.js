function getFirstItemFrom(arr) {
  return arr[0]; 
}

function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}

function getIndex3(arr) {
  // if (arr.length > 3) {
  //   return arr[3];
  // }

  // return arr[arr.length-1];  
  return arr.length > 3 ? arr[3] : arr[arr.length-1]
}

function firstItemIsNumber(arr) {
  return typeof arr[0] === 'number'
}

function isLongList(arr) {
  // return arr.length >= 10 && arr.length < 20;
  return arr.length > 9 
}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}