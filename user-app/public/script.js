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
            sessionStorage.setItem("firstLoad", "yes");
            alert("Welcome")
            x = true 
        }
    }
    if(!x){
        alert("Username or password not found")
    }
}


homePageElem = () => {

    let personName = sessionStorage.getItem("name");
    let firstLoad = sessionStorage.getItem("firstLoad")
    if(firstLoad === "yes"){
        sessionStorage.setItem("firstLoad", "no")
        sessionStorage.setItem("arrayWater", getSbiru(4))
        sessionStorage.setItem("TotWater", getTotals(sessionStorage.getItem("arrayWater")))
        sessionStorage.setItem("arrayGas", getSbiru(9))
        sessionStorage.setItem("TotGas", getTotals(sessionStorage.getItem("arrayGas")))
        sessionStorage.setItem("arrayElettricity", getSbiru(19))
        sessionStorage.setItem("TotElettricity", getTotals(sessionStorage.getItem("arrayElettricity")))
    }

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

    //dati 2022 sui consumi per unità
    var costWat = 1.37*parseInt(sessionStorage.getItem("TotWater"))
    var costGas = 1.092216*parseInt(sessionStorage.getItem("TotGas"))
    var costElec = 0.276*parseInt(sessionStorage.getItem("TotElettricity")) 
    var gigaTot = costElec + costGas + costWat
    gigaTot = gigaTot.toFixed(2)

    document.getElementById('user').innerHTML = `Welcome back `+ personName
    document.getElementById('todayMSG').innerHTML = `Today is ${daylist[day]} ${date}, ${hour}:${minute}. In ${monthlist[month]} you've spent ${gigaTot}€`

}

function getTotals(arrayTot){
    var tot = 0
    for (let i = 0; i < arrayTot.length; i++) {
        if(arrayTot[i] != ','){
            tot = tot + parseInt(arrayTot[i]);
        }
    }
    return tot
}

function getSbiru(dailyCons) {

    var today = new Date()
    var date = today.getDate()
    var consu = new Array()

    for(let i = 0; i < date; i++){
        var r1 = Math.floor(Math.random() * dailyCons);   
        consu[i] = r1            
    }
    return consu
}
