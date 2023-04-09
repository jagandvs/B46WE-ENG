// console.log(a) // undefined
// const a = 20;

// const a = 20;
// const a = 30;
// function add(){
//     const a =30;
//     console.log(a)

// }

// console.log(a);

// console.log(name); // undefined
// console.log(age);  // throw error
// var name = 'Lydia';
// let age = 21;

// const numbers = [1, 2, 3];
// // numbers = [2,3,4]
// numbers[1] = 11;
// console.log(numbers);

// function funName(){

// }

// function add(a,b) {
//   console.log(a)
// }

// mul(2,3)

// function mul(a,b){
//     console.log(a*b)

// }

// function mul(a,b){
//     console.log(a,b)
// }

// function sub(a,b){
//    return a-b
// }

// let addedvalue = add({name:'jagan'},30)
// console.log(addedvalue)
// let multiply = mul(20,50)
// console.log(multiply)
// let result = sub(multiply, addedvalue)
// console.log(result)

// add 20+30 and multiply 20*30  subtract multiply value - added value.

// create a function which will give percentage of my total marks

// create an api call and get all students data and pass to function to find percentafe,
// ANONYMOUS FUNCTION
// const add = function(a,b){
//     console.log(2+3)
// }

// add()
// add()
// add()
// add()
// add()
// add()
// (function(a,b){
//     console.log(2+3)
// })(6,3)

// // (function(){
// //     console.log('add')
// // })()

// let array = [
//   {
//     firstName: "Carmen",
//     lastName: "Abshire",
//     totalMarks: 586,
//     id: "1",
//   },
//   {
//     firstName: "Jackeline",
//     lastName: "Wintheiser",
//     totalMarks: 399,
//     id: "2",
//   },
//   {
//     firstName: "Wilbert",
//     lastName: "Kihn",
//     totalMarks: 472,
//     id: "3",
//   },
//   {
//     firstName: "Christelle",
//     lastName: "Klocko",
//     totalMarks: 474,
//     id: "4",
//   },
// ];

// // for(let i of array){
// //     console.log(i)
// // }

// // for(let i in array){
// //     console.log(array[i])
// // }

// // array.forEach((data, num)=>{
// //     console.log(data)
// //     console.log(num)
// // })


// array.forEach(function(value, index){
//   console.log(value, index)
// })


let xhr = new XMLHttpRequest()
// configure the request
xhr.open("GET", "https://640e94b7cde47f68db32e71f.mockapi.io/USERS")
// send the request
xhr.send();

xhr.onload = function(){
    let response = JSON.parse(xhr.response)
    response.forEach(value => {
        calcperc(value.totalMarks)
    });

}


function calcperc(marks){
  let per = (marks/600) *100
  console.log(per.toFixed(2))
}