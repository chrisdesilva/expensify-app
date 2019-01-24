// const person = {
//   name: 'Chris',
//   age: 31,
//   location: {
//     city: 'Bastrop',
//     temp: 50
//   }
// };

// const { name = 'Anonymous', age } = person; 

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location

// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//   title: 'Infinite',
//   author: 'Jeremy Robinson',
//   publisher: {
//     name: 'Breakneck Media'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//===================

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address

console.log(`You are in ${city}, ${state}.`)

const item = ['iced coffee', '$2.00', '$3.50', '$2.75'];

const [type, small, medium, large] = item

console.log(`A medium ${type} costs ${medium}. `)