//Display all the keys and values of a nested object


// const student = {
//     name: 'Amit',
//     age: 22,
//     address: 'Agra',
//     person: {
//         name: 'Ravindra Singh',
//         age: 22,
//         address: 'Morena',
//         company: {
//             name: 'Amezoned',
//             price: 229
//         }
//     }
// };

// function keyValuePrinter(obj) {
//     for (let [key, value] of Object.entries(obj)) {
//         if (typeof value !== 'object' || value === null) {
//             console.log(`[${key}: ${value}]`);
//         } else {
//             keyValuePrinter(value);
//         }
//     }
// }

// keyValuePrinter(student);

// for (let [key,value] of Object.entries(student)){
//     if(typeof value!=='object'|| value===null){
//         console.log(`${key}:${value}`)

//     }else{
//         console.log(value)
//     }
// }

//swap value
// let a = 10
// let b = 20
// a = a+b
// b = a-b
// a = a-b


// let a= 10
// let b = 20
// a = a*b
// b = a/b
// a = a/b

// console.log(a,b)
//check element hold in the array

// let arr = [3,4,5,2,7]
// console.log(arr.includes(10))


// age diffrence 

// const people = [
//     { name: 'Rohit', age: 23 },
//     { name: 'Mark', age: 45 },
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 40 }
// ];


// const ages = people.map(person=>person.age)
// let maxage = Math.max(...ages)
// let minage = Math.min(...ages)
// let range = maxage-minage
// console.log(range)


// plindrome
// let str = 'aaaa';
// let reversed = str.split('').reverse().join('');
// if(str===reversed){
//     console.log('yes')
// }
// else{
//     console.log('No')
// }
// let str = '   www   '
// console.log(str.split())
// let str = 'shalidnra aporiy'
// const  rever = str.split('').reverse().join('')
// console.log(rever)

// let arr = [3,4,2,5]
// arr.reverse();
// console.log(arr)

// count vowels
// let str = 'aporiya'
// let count = str.match(/[aeiou]/gi).length
// console.log(count)


//null undefined
// let a 
// console.log(a)// this undefined

// let b = null
// console.log(b)// this is null 


// reverse string
// function reversstring(str){
//     return str.split('').reverse().join('')
// }
// console.log(reversstring('xyz'))


//question 11

// function fizzbuzz(n){
//     for(let i= 1; i<=n; i++){
//         if(i%15===0){
//             console.log('fizzbuzz')

//         }else if(i%5===0){
//             console.log('fizz')
//         }else if(i%3==0){
//             console.log('Buzz')
//         }else{
//             console.log('invalid')
//         }
//     }
// }
// fizzbuzz(34)


// let var const

// var a = 4
// var a = 5// this is global variable declare re-assing value and re declare

// {
//     console.log(a)
// }
// {


// let a = 5// this is block scope variable declare re - assing value no re declare variable
// }
// console.log(a)// a is not defined

// {
//     const a = 10// this block lable variable declare keyword  not assign value not re declare value
// }
// console.log(a)// a is a not difined
     



// chunk size problems of array
// function chunksize1(arr, chunkSize) {
//     const resultArr = []; 

//     for (let i = 0; i < arr.length; i += chunkSize) {
//         resultArr.push(arr.slice(i, i + chunkSize));
//     }

//     return resultArr;
// }


// const array = [3, 4, 5, 6, 7];
// console.log(chunksize1(array, 2)); // Output: [[3, 4], [5, 6], [7]]


// function chunksizearr(array,chunksize){
//     let arr = []
//     for (let i = 0; i<array.length; i+=chunksize){
//         arr.push(array.slice(i,i+chunksize))
//     }
//     return arr
// }
// let arra = [3,4,5,6,7,8,2]
// console.log(chunksizearr(arra,3))
//



//Capitilize Words string


// let str = 'shalindra aporiya';
// let words = str.split(' '); 

// for (let i = 0; i < words.length; i++) {

//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// let result = words.join(' '); 
// console.log(result);


//Reverse Integers


// function reversinteger(n){
    
//     revers = 0
//     while(n!==0){
// let r= n%10
// revers = revers*10+r
// n = Math.floor(n/10)
//     }
//     return revers
// }
// console.log(reversinteger(90))

// fibonacci series
// function fib(n){
//     if(n<2){
//         return n
//     }
//         let a= 0;
//         let b = 1
//         for(let i = 2; i<=n; i++){
//             let temp = a+b
//             a = b;
//             b = temp

        
//     }
//     return b;
// }
// console.log(fib(10))
// find common elements

// function conmmonelement(arr1,arr2){
// return arr2.filter(el=>arr1.includes(el));
// }

// let arr1 = [3,4,5,7,6]
// let arr2 = [4,5,2,3]
// console.log(conmmonelement(arr1,arr2))


// multiplication table
// function multiplicatiotable(n){
//     for(let i = 1; i<=n; i++){
//         let row = []
//         for(let j= 1; j<=n; j++){
// row.push(i*j)
//         }
//         console.log(row.join(' '),'\n')

//     }
   
// }
// console.log(multiplicatiotable(5))


//prime number in range
// function primenumbrange(a,b){
//     let max = 0;
//     let min = 0
//     if(a>b){
//         max = a
//         min = b
//     }else{
//         max = b
//         min = a
//     }
//     let prime = []
//     for(let i = min; i<max; i++){
//         let count = 0
//         for(let  j= 1; j<=i; j++){
//             if(i%j===0){
//                 count++
//             }
//         }
//         if(count==2){
//             console.log(i)
//         }
//     }
    

// }
// let a = 0;
// let b = 15
// console.log(primenumbrange(a,b))


// reverse the odd length words
// calculate total price
// function getTotalPrice(groceries) {
//     return groceries.reduce((acc, curr) => {
        
//         return acc +=  (curr.price * curr.quantity);
//     },0); 
// }


// const groceries = [
//     { product: 'milk', quantity: 3, price: 1.50 },
//     { product: 'Cereals', quantity: 2, price: 2.50 }
// ];

// console.log(getTotalPrice(groceries)); 
