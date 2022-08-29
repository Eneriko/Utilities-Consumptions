let usernamee 
let passwordd 

let users = [  //'name' will be the name displayed in homepage.html 
    {
        username: "cadoniandrea",
        password: "bacistellari33",
        name: "Andrea",
    },
    {
        username: "bozzinicola",
        password: "Pluto11",
        name: "Nicola",
    },
    {
        username: "caushllarieneriko",
        password: "paperino10.",
        name: "Eneriko",
    },
    {
        username: "gigio33",
        password: "password1",
        name: "Gigio",
    },
    {
        username: "kate99",
        password: "mycat",
        name: "Kate",
    }
]

handleLogin = () => {
    let usernamee = document.getElementById('fname').value
    let passwordd = document.getElementById('lname').value
    for(let i = 0; i < users.length; i++){
        if((users[i].username === usernamee) && (users[i].password === passwordd)) {
            alert("FUNZIONA!!!")
            let url = location.href
            //comando per richiamare la pagina "homepage.html"
        }
    }
    alert("Username or password not found.")
}