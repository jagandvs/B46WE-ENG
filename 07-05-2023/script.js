// let heading = document.createElement('h1');
// heading.innerText = '<b>Guvi</b>'

// heading.innerHTML = 'asada'
// document.body.append(heading)

// let parent = document.createElement('div')
// // let child = document.createElement('p')

// parent.append('append child')  // works fine
// parent.appendChild('append child') // gives error

// document.body.append(parent)

{
  /* <section class="services-section">
        <div class="container">
            <div class="text-center">
                <h2>Services</h2>
            </div>
        </div>
    </section> */
}

// let section = document.createElement('section')
// section.setAttribute('class', 'service-section')

// let div = document.createElement('div')
// div.setAttribute('class', 'container')
// section.appendChild(div)

// let div2 = document.createElement('div')
// div2.setAttribute('class', 'text-center')
// div.appendChild(div2)

// let h2 = document.createElement('h2')
// h2.innerText = 'services'
// div2.appendChild(h2)

// <section id="header">
//     <div class="text-center">
//         <img src="https://thumbs.dreamstime.com/b/group-pets-together-15229056.jpg" class="header-img w-100"
//             alt="...">
//     </div>
// </section>

// let section = document.createElement('section')
// section.setAttribute('id','header')

// let div = document.createElement('div')
// div.setAttribute('class', 'text-center')
// section.appendChild(div)

// let image = document.createElement('img')
// image.setAttribute('src','ss')
// image.setAttribute('alt','ss')
// div.appendChild(image)

// document.body.append(section)

// console.log(document.getElementById('header'))
// console.log(document.getElementsByClassName('container'))

let data = [
  {
    userName: "userName 1",
    password: "password 1",
    name: "name 1",
    id: "1",
  },
  {
    userName: "userName 2",
    password: "password 2",
    name: "name 2",
    id: "2",
  },
  {
    userName: "userName 3",
    password: "password 3",
    name: "name 3",
    id: "3",
  },
  {
    userName: "userName 4",
    password: "password 4",
    name: "name 4",
    id: "4",
  },
  {
    userName: "userName 5",
    password: "password 5",
    name: "name 5",
    id: "5",
  },
  {
    userName: "userName 6",
    password: "password 6",
    name: "name 6",
    id: "6",
  },
  {
    userName: "userName 7",
    password: "password 7",
    name: "name 7",
    id: "7",
  },
  {
    userName: "userName 8",
    password: "password 8",
    name: "name 8",
    id: "8",
  },
  {
    userName: "userName 9",
    password: "password 9",
    name: "name 9",
    id: "9",
  },
  {
    userName: "userName 10",
    password: "password 10",
    name: "name 10",
    id: "10",
  },
];

let headers = ['UserName','Password','Name']

let table = document.createElement('table')
table.setAttribute('class','table')

let thead = document.createElement('thead')
let tr = document.createElement('tr')

for(let i of headers){
    let th = document.createElement('th')
    th.innerText = i;
    tr.appendChild(th)
}

thead.append(tr);
table.append(thead);

let tbody = document.createElement('tbody');

for(let i of data){
    let tr = document.createElement('tr')
    
    Object.values(i).forEach((tableData)=>{
        let td =  document.createElement('td')
        td.innerText = tableData;
        tr.append(td)
    })
    tbody.append(tr)
}

table.appendChild(tbody)

document.body.append(table)
