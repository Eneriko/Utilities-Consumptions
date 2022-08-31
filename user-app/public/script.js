let usernamee 
let passwordd 
var tempName

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
            tempName = users[i].name
            
            //let url = location.href
            //comando per richiamare la pagina "homepage.html"
        }
    }
    alert("Username or password not found.")
}

homePageElem = () => {
    var today = new Date()
    var day = today.getDay()
    var hour = today.getHours()
    var minute = (today.getMinutes()).toString()
    if(minute < 10){
        var minute = '0' + minute.toString()
    }
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById('user').innerHTML = `Welcome back ${tempName}!`
    document.getElementById('todayMSG').innerHTML = `Today is ${daylist[day]}, it's ${hour}:${minute} and you've already spent ...`
}