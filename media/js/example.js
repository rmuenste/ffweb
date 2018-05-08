google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var mydata = {
      "cols": [
      {"label":"x","type":"number"},
      {"label":"y" ,"type":"number"}
      ],
      "rows": [
      {"c": [{"v": 0},{"v": 3}]},
      {"c": [{"v": 1},{"v": 1}]},
      {"c": [{"v": 2},{"v": 0}]},
      {"c": [{"v": 3},{"v": 1}]},
      {"c": [{"v": 4},{"v": 2}]}
      ]
    };

    var data = new google.visualization.DataTable(mydata);

    var options = {
      title : 'Sedimentation Velocity',
      hAxis: {
	title: 'Time[s]'
      },
      vAxis: {
	title: 'U_z'
      }
    };


var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}



