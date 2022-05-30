async function fetchUsers(){

const resp = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await Resp.json
console.log(data);
}