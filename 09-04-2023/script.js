// let arr = [1,2,3,4,5]

// // arrNew = [5,10,15,20,25]

// // create new array in which all the elements multiply with 5

// // let arrNew = []

// // arr.forEach(value=> arrNew.push(value*5))

// let arrNew = arr.forEach(value=> value*5)

// // console.log(arrNew)

// let arrNew2 = arr.map(value=> {return 7})
// console.log(arrNew2)

let array = [
  {
    name: "Incredible Soft Shoes",
    price: 180,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480/sports",
    id: "4",
  },
  {
    name: "Modern Plastic Shoes",
    price: 755,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480/sports",
    id: "5",
  },
  {
    name: "Rustic Steel Keyboard",
    price: 979,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480/sports",
    id: "6",
  },
  {
    name: "Sleek Wooden Hat",
    price: 767,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480/sports",
    id: "7",
  },
  {
    name: "Tasty Concrete Chips",
    price: 303,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480/sports",
    id: "8",
  },
  {
    name: "Generic Cotton Computer",
    price: 965,
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480/sports",
    id: "9",
  },
  {
    name: "Small Frozen Table",
    price: 451,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480/sports",
    id: "10",
  },
];

// let productArray = array.map((value) => {
//   return {
//     ...value,
//     price: value.price + value.price * 0.1,
//     productsAvailble: Math.round(value.price * 0.05),
//   };
// });

// // // Create new array with name totalamount and id
// // // total amount = (price - discount) * 18%

// // // (192-9) + (192-9) * 0.18) = 189 + 34.01 = 223
// // console.log(productArray)

// // console.log(productArray.map(({name,price,discount,id})=>{
// //     let discPrice = (price-discount)
// //     let totalAmount = (discPrice + (discPrice*0.18)).toFixed(2)
// //     return {name, totalAmount, id }
// // }))

// // console.log(productArray)

// // let outputArr = productArray.filter(value=> {
// //   if(value.price>300 && value.price < 500){
// //     if(value.productsAvailble> 20){
// //       return value
// //     }
// //   }
// // })
// // array.filter(value=> value.price > 500).forEach((value)=> {
// //   console.log(value.name)
// // })

// let text = "new";

// console.log(
//   array.filter(
//     (value) =>
//       value.name.toLowerCase().includes(text.toLowerCase()) ||
//       value.description.toLowerCase().includes(text.toLowerCase())
//   )
// );

// let arr = [1,2,3,4,5]

// arr.reduce((previousNum, curentNumber)=> {
//   console.log(previousNum, curentNumber)
//    return previousNum+curentNumber
// },0)


// let arrNum = Array(100).fill(0)

// console.log(arrNum.map((value, index)=> index+1).filter(value=> value%2===0).reduce((prev,cur)=> prev+cur))


// let mulArr = [[1,2],[3,4],[5,6], [7,8]]

// console.log(mulArr.reduce((prev,cur)=>{
//   return [...prev, ...cur]
// },[0]))
console.log(array.reduce((prev,cur)=> {
  console.log(prev,cur)
  return prev+cur.price
},0))

let arr = [1,2,3,4,5]

arr.unshift(3)
console.log(arr)