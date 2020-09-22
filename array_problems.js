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

//Challenge 6

// Implement a function, findFirstUnique(arr), which takes an array as 
// input and returns the first unique integer in the array.

function findFirstUnique(arr){
    var index2;
      for(var index1=0;index1<arr.length;index1++){ 
          index2 = 0
          while(index2 < arr.length){
              if ((index1 != index2 )&& (arr[index1] == arr[index2])) 
                  break
              index2 += 1
      }
          if (index2 == arr.length) 
              return arr[index1] 
     
    }
      return null;
  }

//Challenge 7

// Implement a function findSecondMaximum(arr), which returns the second 
// largest element in the array.

function findSecondMaximum(arr){
    arr.sort(function(a, b) {
          return a - b
      })
    if(arr.length >= 2)
      return arr[arr.length-2]
    else
      return null
  }

  function findSecondMaximum(arr){
    var firstMax = Number.NEGATIVE_INFINITY;
    var secondmax = Number.NEGATIVE_INFINITY;
    for(let item of arr){
      if( item > firstMax)
        firstMax = item
    }
    for(let item of arr){
      if ((item < firstMax) && (item > secondmax))
        secondmax = item
    }
    return secondmax
  }

  function findSecondMaximum(arr) {
    var max = Number.NEGATIVE_INFINITY;
    var secondmax = Number.NEGATIVE_INFINITY;
    for (var val of arr) {
        if (val > max) {
            secondmax = max
            max = val
        } else if (val > secondmax && val!=max)
            secondmax = val
    }
    return secondmax
}

//Challenge 8

// Implement a function rightRotate(arr,n) that will rotate the given 
// array by n.

function rightRotate(arr, n){ 
    var rotatedList = [] 
    for(var item=arr.length-n;item<arr.length;item++) 
      rotatedList.push(arr[item]) 
    for(var item=0;item<arr.length-n;item++)
      rotatedList.push(arr[item]) 
    return rotatedList 
}


function rightRotate(arr, n) {
    return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}

//Challenge 9

// Implement a function, reArrange(arr), which sorts the elements so that 
// all the negative elements appear on the left, and all positive elements 
// appear at the right.

function reArrange(arr){
    var neg = []
    var pos = []
    for(let ele of arr){
      if( ele < 0)
        neg.push(ele)
      else
        pos.push(ele)
    }
    return neg.concat(pos)
  }
  
  function reArrange(arr) {
    var leftMostPosEle = 0,
        tmp;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i != leftMostPosEle) {
                tmp = arr[i];
                arr[i] = arr[leftMostPosEle];
                arr[leftMostPosEle] = tmp;
            }
            leftMostPosEle += 1
        }
    }
    return arr;
}

//Challenge 10

// Implement a function called maxMin(arr), which will rearrange the 
// elements of a sorted array so that the first position will have the 
// largest number, the second will have the smallest, and the third will 
// have the second-largest and so on. In other words, all the odd-numbered 
// indices will have the largest numbers in the array in descending order, 
// and the even-numbered indices will have the smallest numbers in ascending 
// order.

function maxMin(arr) {
    var result = []
    for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
        result.push(arr[arr.length - (i + 1)])
        result.push(arr[i])
    }

    if (arr.length % 2)
        result.push(arr[Math.floor(arr.length / 2)])
    return result
}

//Challenge 11