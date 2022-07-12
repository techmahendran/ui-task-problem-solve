// My First Problem Solution

// 1. Write a program to print the reverse of the given string.

function reverseString(str) {
    return str.split('').reverse().join('').toLowerCase()
}
const solution = document.querySelector('#solution')
solution.innerHTML = reverseString('codecode')

// My Second Problem Solution

// 2. Given a number, check whether it is a prime number or not.

function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) { 
      if(n % i === 1) {
        return 'Yes'
      }  
        return 'No'              
    }
  }
const solution2 = document.querySelector('#solution2')
solution2.innerHTML = isPrimeNumber(3) + '<br>' + isPrimeNumber(4)

// My Third Problem Solution

// 3. Given an array of numbers, arrange them in a way that it forms the largest value.

function myCompare(a, b) {
    let ab = a + b

    let ba = b + a

    return (ba - ab)
}

// The main function that prints

function printLargest(arr) {
         
        arr.sort(myCompare);
        for(let i = 0; i < arr.length; i++) {
            document.querySelector('#solution3').innerHTML = arr[i]            
        }

 // join method creates a string out of the array elements.
        document.querySelector('#solution3').innerHTML = arr.join("")
}  
     
    let arr = [];
     
    arr.push("54");
    arr.push("546");
    arr.push("548");
    arr.push("60");
    printLargest(arr);

// My Fourth Problem Solution

// 4. Given a number N, print reverse of number N.

function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}
const solution4 = document.querySelector('#solution4')
solution4.innerHTML = reverseNumber(988)


// My Fifth Problem Solution

// 5. Given an array of numbers, find the maximum and minimum element in the array.

function maximumNumber(number) {
    let result = Math.max(...number)
    return result
}

function minimumNumber(number) {
    let result = Math.min(...number)
    return result
}
const findMaxAndMin = [maximumNumber([54, 546, 548, 60]), minimumNumber([54, 546, 548, 60])].join(' ')

const solution5 = document.querySelector('#solution5')
solution5.innerHTML = findMaxAndMin
