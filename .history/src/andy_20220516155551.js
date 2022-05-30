async function fetchUsers(){

const resp = await fetch('https://jsonplaceholder.typicode.com/users')
const data = resp.json
console.log(data);
}