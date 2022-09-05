let usernamee 
let passwordd 
let tempName;

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
    let usernamee = document.getElementById('fname').value
    let passwordd = document.getElementById('lname').value
    var x = false
    /*for(let i = 0; i < users.length; i++){
        if((users[i].username === usernamee) && (users[i].password === passwordd)) {
            location.href = "homepage.html"
            tempName = users[i].name
            alert("FUNZIONA!!!")
        }
        else if(i == users.length-1){
            alert("Username or password not found.")
        }
    }*/
    var i = 0;
    while(i < users.length && !x){
        
        if((users[i].username === usernamee) && (users[i].password === passwordd)) {
            tempName = users[i].name;
            location.href = "homepage.html";
            alert(tempName);
            x = true;
        }
        i++;
    }
    if(!x){
        alert("dio porco");
    }
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
    document.getElementById('user').innerHTML = `Welcome back `+ tempName
    document.getElementById('todayMSG').innerHTML = `Today is ${daylist[day]}, it's ${hour}:${minute} and you've already spent ...`

    totWater = getTotals(1.5)
    totGas = getTotals(4)
    totElec = getTotals(8.5)

    // Load Charts and the corechart and barchart packages.
    google.charts.load('current', {'packages':['corechart']});
    // Draw the pie chart and bar chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Gas', totGas],
        ['Water', totWater],
        ['Electricity', totElec],
    ]);

        var piechart_options = {//title:'Pie Chart: Your Expenses ($) per category',
                        width:400,
                        height:300,
                        is3D: true};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);
    }
}

function getTotals(dailyCons){
    total = 0
    for(let i = 0; i<31; i++){
        var r1 = Math.floor(Math.random() * dailyCons); 
        //data.addRows([[i,r1]])
        total += r1
    }
    return total
}

