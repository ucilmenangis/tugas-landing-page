const username = document.getElementById('username').value
const password = document.getElementById('password').value

let dataUsername = ['irfan','sgga']
let dataPassword = ['123','lll']
function login (){
    for(let i = 0 ; i < dataUsername.length ; i++){
        if(username == dataUsername[i] && password == dataPassword[i]){
            alert('berhasil')
            return console.log('lol')
        }
    }
    
    for(let i = 0 ; i < dataPassword.length ; i++){
        if(username != dataUsername[i] && password != dataPassword[i]){
            return alert('try again')
        }
    }
}
    
