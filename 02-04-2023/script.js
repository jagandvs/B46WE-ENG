// const _ = require("lodash");  
// let a = [1,2,3,4]
// // a.push(5,6,7)

// console.log([5,6,7,...a])

// console.log(a)

// let obj = {
//     name : 'jagan',
//     age:25,
//     mobileNumber : '9999999999',
//     marks:[15,56,66]
// }

// // obj.mobileNumber = '123444'
// // obj = {...obj, mobileNumber : '1233233'}

// console.log({...obj, mobileNumber : '1223445', batch : 'ece'})

// console.log({...obj, marks :[...obj.marks, 30]})

// console.log(obj)

// function add(name, rollnum, ...rest) {
//     console.log(name, rollnum, rest)
//   let sum = 0;
//   rest.forEach(function (value) {
//     return (sum += value);
//   });
//   console.log(sum);
// }

// // add(5, 6);
// add("jagan", "123445", 5, 6, 4, 5, 6);

// create a function which accpets [string, num, [characters]]

// 'Name Jagan, roll number : scored: S A S B B C'

// // console.log('Name '+name+', roll number :'+roll+' scored :'+ )

// console.log(`Name ${name}, roll number: ${roll}, scrored : ${scored}`)

// createObj('jagan', '34555' , 'S', "A", 'S', 'B', 'B', 'C')

// function createObj(name, roll, ...rest){
//     console.log(name + rest)
// }

// let a = 20
// let b = 30;

// console.log(`${a}`);

// let obj = {
//     name : 'jagan',
//     age:25,
//     mobileNumber : '9999999999',
//     marks:[15,56,66]
// }

// let {name, age} = obj;

// let name = 'jagan';

// console.log(name, age)

// console.log(name)

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

// array.forEach(function ({firstName, lastName}) {
//   console.log(firstName, lastName);
// });

// let a = [2,3,4,5,6,67]

// // let b = a[0]
// // let c = a[1]
// // let d = a[2]

// let [b,c, d] = a;

// console.log(b,c, d)

// call an api https://restcountries.com/v3.1/all and get response
// get first two object from an array and print each obj.name
// loop throught the array and print region.

// let xhr = new XMLHttpRequest()
// // configure the request
// xhr.open("GET", "https://restcountries.com/v3.1/all")
// // send the request
// xhr.send();

// xhr.onload = function(){
//     let response = JSON.parse(xhr.response)

//     let [obj1,obj2] = response;
//     console.log(`subregion : ${obj1.subregion}`)
//     console.log(`subregion : ${obj2.subregion}`)

//     response.forEach(({region})=> {
//         console.log(region)
//     })

// }

// let xhr = new XMLHttpRequest()
// // configure the request
// xhr.open("GET", "https://640e94b7cde47f68db32e71f.mockapi.io/users")
// // send the request
// xhr.send();

// xhr.onload = function(){
//     let response = JSON.parse(xhr.response)
//     response.forEach(value => {
//         calcperc(value.totalMarks)
//     });

// }


// function calcperc(marks){
//   let per = (marks/600) *100
//   console.log(per.toFixed(2))
// }


// let obj1 = {
//     name : 'jagan',
//     age:25,
//     mobileNumber : 'eeee',
   
// }

// let obj2 ={
//     name : 'jagan',
//     age:25,
//     mobileNumber : '9999999999',
// }

// let equal = true
// Object.keys(obj1).map(value=>{
//     if(obj1[value]!==obj2[value]){
//         equal = false;
//     }
// })

// // console.log(_.isEqual(obj1, obj2))

// console.log(equal)

// funcName()

// function funcName(){
//     return 'test'
// }

// arrFunc()

// const arrFunc = ()=>{

// }

// hoisting