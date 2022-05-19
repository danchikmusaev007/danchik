const obj = {
    name: 'John',
    age: '20',
}
console.log(obj);

const data = JSON.stringify(obj)
console.log(data)

console.log(JSON.parse(data))