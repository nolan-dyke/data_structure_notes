//Challenge 1

// Implement a function removeEven(arr), which takes an array arr in 
// its input and removes all the even elements from a given array.

function removeEven(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0) // Check if the item in the list is NOT even ('%' is the modulus symbol!)
            odds.push(number) //If it isn't even append it to the empty list
    }
  return odds // Return the new list
}

//Challenge 2

// Implement a function that merges two sorted arrays into another 
// sorted array. Name it mergeArrays(arr1, arr2).

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

//Challenge 3

// In this problem, you have to implement the findSum(arr, value) function, which takes an array arr,
// a number and value as input and 
// returns an array of two numbers that add up to value.

function findSum(arr, value) {
    for (var j =0; j<arr.length; j++) {
       for (var k = j+1; k<arr.length; k++) {
            if ((arr[j] + arr[k]) == value)
                return [arr[j], arr[k]]
        }
    }
    return false;
}

function binarySearch(arr, item){
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false
    var arrayIndex = -1
    while( (first <= last) && !found){
        mid = Math.floor((first + last) / 2)
        if( arr[mid] == item){
            arrayIndex = mid
            found = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (found)
         return arrayIndex
     else
         return false
 }
 
 function findSum(arr,value){
    arr.sort(function(a, b) {
         return a - b
     })
 var index;
  for(var j = 0; j<arr.length; j++){
    index = binarySearch(arr,(value-arr[j]))
    if(index!=false && j!=index)
      return [arr[j],value-arr[j]]
  }
   return false;
 }
 
 function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
  return false;
}

//Challenge 4

// Implement a function, findProduct(arr), which modifies an array so that
// each index has a productof all the numbers present in the array except 
// the number stored at that index.

function findProduct(arr){
    var result = []
    var left = 1, currentproduct;
    //To store product of all previous values from currentIndex
    for(var i=0;i<arr.length;i++){
      currentproduct = 1
      //To store current product for index i    
          //compute product of values to the right of i index of list
      for(var j=i+1;j<arr.length;j++){
        currentproduct = currentproduct * arr[j]
      }
      //currentproduct * product of all values to the left of i index
      result.push(currentproduct * left)
      //Updating `left`
      left = left * arr[i]
    }
      
    return result
  }

  function findProduct(arr) {
    var temp = 1,
        product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}


//Challenge 5

// Implement a function findMinimum(arr) that finds the smallest 
// number in the given array.

function findMinimum(arr){
    arr.sort((function(a, b){
          return a - b
      }))
    return arr[0]
  }

  function findMinimum(arr) {
    var currentMin = arr[0];
    //At every Index compare its value with current minimum 
    //and if its less, then make that index value the new minimum value
    for (let val of arr) {
        if (val < currentMin)
            currentMin = val
    }

    return currentMin

}
