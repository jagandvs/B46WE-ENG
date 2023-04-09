// // creating object with object literal
// let person = { name : "###", class: "B46WE", name:'jagan' };
// // let per={name:''}
// // console.log(person)

// // creating an object using constructor
// function Person(name, session){
//     this.name =  name;
//     this.session = session;
// }

// let person1 = new Person('jagan', 'B46WE');

// let person2 = new Person('Sabari', 'B46WE');

// let headers = [['name', 'session'],['name','session']]

// // for(let i=0; i<headers.length; i++){
// //     for(let j=0;j<headers[i].length;j++){
// //         console.log(headers[i][j])
// //     }
// // }
// console.log(person1[headers[0]], person2.session)

// console.log(window)

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// console.log(window.outerHeight)
// console.log(window.outerWidth)

// alert('ff')

// window.localStorage.setItem('name', 'jagan')

// localStorage.removeItem('name')
// sessionStorage.setItem('name', 'jagan')

// let name = localStorage.getItem('name')
// console.log(name)

// console.log(document.head)

// let heading = document.createElement('h1')
// heading.innerText = 'Welcome'

// document.getElementById('divelement').appendChild(heading);

// let obj = {
//   firstName: "Jagan",
//   lastName: "Mohan Rao",
//   gender: "male",
//   branch: "ECE",
//   id: "1",
// };

// console.log(JSON.stringify(obj))
// let array = Object.entries(obj);
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i][0] + " : " + array[i][1]);
// // for(let j=0;j<array[i].length;j++){
// //             console.log(array[i][j])
// //         }
// }

// // create a new xmlhttprequest object
// let xhr = new XMLHttpRequest()
// // configure the request
// xhr.open("GET", "https://640e94b7cde47f68db32e71f.mockapi.io/users")
// // send the request
// xhr.send();

// xhr.onload = function(){
//     console.log(JSON.parse(xhr.response))
// }
// console.log('test')
//  stringify is used to convert from object to string  JSON.stringifY(obj)
//  parsing is used to convert from object string to object JSON.parse(obj)

// let a = 10;
// let b = a;
// b = 20;
// console.log(a,b)

let a = {name : 'jagan'}
let b = a;
a.name = 'guvi'
a = {batch : 'guvi'}
console.log(a, b)


