let user
const  getData = () =>{
    fetch('db.json')
            .then(response => response.json())
            .then(data =>{
                user = data
            }).catch(Error => {
                console.log(Error)
            })
}
getData();

const sendData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json; charset=utf-8"}  
        
    })
    .then(response => response.json())
            .then(data =>{
                user = data
                console.log(user)
            }).catch(Error => {
                console.log(Error)
            })
}
setTimeout(sendData, 500)