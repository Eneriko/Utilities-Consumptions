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


homePageElem = () => {
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

    totWater = getTotals(1.5)
    totGas = getTotals(4)
    totElec = getTotals(8.5)
    var costWat = 1.37*totWater, costGas = 1.092216*totGas, costElec = 0.276*totElec   //dati 2022 sui consumi per unità
    var gigaTot = costElec + costGas + costWat
    gigaTot = gigaTot.toFixed(2)

    document.getElementById('user').innerHTML = `Welcome back `+ personName
    document.getElementById('todayMSG').innerHTML = `Today is ${daylist[day]} ${date}, ${hour}:${minute}. In ${monthlist[month]} you've spent ${gigaTot}€`

    // INIZIO PIECHART

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
        function selectHandler() {
            var selectedItem = piechart.getSelection()[0];
            if (selectedItem) {
                var topping = data.getValue(selectedItem.row, 0);
                if (topping === "Gas"){
                    location.href = "gas.html"
                }
                else if (topping === "Water"){
                    location.href = "water.html"
                }
                else if (topping === "Electricity"){
                    location.href = "elett.html"
                }
            }
        }
        google.visualization.events.addListener(piechart, 'select', selectHandler);
        piechart.draw(data, piechart_options);
    }
    // FINE PIECHART
}

function getTotals(dailyCons){
    total = 0
    var today = new Date()
    var date = today.getDate()
    for(let i = 0; i < date+1; i++){
        var r1 = Math.floor(Math.random() * dailyCons); 
        //data.addRows([[i,r1]])
        total += r1
    }
    return total
}
