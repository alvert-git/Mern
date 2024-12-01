localStorage.setItem('name','Jhon')
localStorage.setItem('token','1234svdjbfjhbdjchds')
localStorage.setItem('user',JSON.stringify({name:'Jhon'}))
localStorage.setItem('token',JSON.stringify({token:'token'}))

let token = localStorage.getItem('token')
let token1 = JSON.parse(localStorage.getItem('token'))
let name = localStorage.getItem('name')