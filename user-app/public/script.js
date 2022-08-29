let usernamee 
let passwordd 

let users = [
    {
        username: "cadoniandrea",
        password: "bacistellari33",
    },
    {
        username: "bozzinicola",
        password: "Pluto11",
    },
    {
        username: "caushllarieneriko",
        password: "paperino10.",
    },
    {
        username: "gigio33",
        password: "password1",
    }
]

handleLogin = () => {
    let usernamee = document.getElementById('fname')
    let passwordd = document.getElementById('lname')
    for(let i = 0; i < users.length; i++){
        if((users[i].username) && (users[i].password)) {
            alert("FUNZIONA!!!")
            let url = location.href
            //comando per richiamare la pagina "homepage.html"
        }
    }
    alert("Username or password not found.")
}