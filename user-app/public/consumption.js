function bestDraw(dailyConsu, metric){
    
    google.charts.load('current', {'packages':['corechart', 'line']})
    var totale = google.charts.setOnLoadCallback(drawLine)

    function drawLine() {
        var total = 0
        var today = new Date()
        var date = today.getDate()
        var data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'Cons.Level');
            for(let i = 0; i < date+1; i++){
                var r1 = Math.floor(Math.random() * dailyConsu);   //una famiglia di 4 persone consuma in media in un anno 365mc, quindi 1mc al giorno
                data.addRows([[i,r1]])
                total += r1
            }
            var options = {'title':'Monthly Water Consumptions',
                        hAxis: {
                        title: 'Day'
                    },
                        vAxis: {
                        title: `Consumption (${metric})`
                    }
            };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        return total
    }
    return totale     //da linkare poi nello script quando userò i totali 
}
