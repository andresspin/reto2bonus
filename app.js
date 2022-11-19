let a = [0,1,2];


function incrementItems(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }

  return array;
}

console.log(incrementItems(a));