let usernamee 
let passwordd 

let users = [  //'name' will be the name displayed in homepage.html 
    {
        username: "dio",
        password: "dio",
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
    var x = false
    let usernamee = document.getElementById('fname').value
    let passwordd = document.getElementById('lname').value
    for (let i = 0; i < users.length; i++) {
        if((usernamee === users[i].username) && (passwordd === users[i].password)){
            location.href = "homepage.html"
            sessionStorage.setItem("name", users[i].name);
            alert("Welcome")
            x = true 
        }
    }
    if(!x){
        alert("Username or password not found")
    }
}


homePageElem = (totW, totG, totE) => {

    let personName = sessionStorage.getItem("name");
    var today = new Date()
    var date = today.getDate()
    var month = today.getMonth()
    var day = today.getDay()
    var hour = today.getHours()
    var minute = (today.getMinutes()).toString()
    if(minute < 10){
        var minute = '0' + minute.toString()
    }
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var costWat = 1.37, costGas = 1.092216, costElec = 0.276   //dati 2022 sui consumi  

    var costWat = 1.37*totW, costGas = 1.092216*totG, costElec = 0.276*totE   //dati 2022 sui consumi per unità
    var gigaTot = costElec + costGas + costWat
    gigaTot = gigaTot.toFixed(2)

    document.getElementById('user').innerHTML = `Welcome back `+ personName
    document.getElementById('todayMSG').innerHTML = `Today is ${daylist[day]} ${date}, ${hour}:${minute}. In ${monthlist[month]} you've spent ${gigaTot}€`

}

/*function getTotals(dailyCons) {

    total = 0
    var today = new Date()
    var date = today.getDate()
    for(let i = 0; i < date+1; i++){
        var r1 = Math.floor(Math.random() * dailyCons); 
        //data.addRows([[i,r1]])
        total += r1
    }
    return total
}*/

function getSbiru(dailyCons) {

    var today = new Date()
    var date = today.getDate()
    //var days = new Array()
    var consu = new Array()
    //var total = 0

    for(let i = 0; i < date; i++){
        //days[i] = i+1
        var r1 = Math.floor(Math.random() * dailyCons);   
        consu[i] = r1
        //total += r1              
    }
    return consu
}
