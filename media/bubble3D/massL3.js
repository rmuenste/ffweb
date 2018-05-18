google.charts.load('current', {packages: ['corechart', 'line']}); 
google.charts.setOnLoadCallback(drawChart); 

function drawChart() { 

  var mydata = { 
    "cols": [ 
    {"label":"x","type":"number"}, 
    {"label":"dt = 1.0000E-03" ,"type":"number"}, 
    {"label":"dt = 0.2500E-03" ,"type":"number"}, 
    {"label":"dt = 0.0625E-03" ,"type":"number"}, 
    {"label":"dt = 0.0156E-03" ,"type":"number"} 
    ], 
    "rows": [ 
    {"c": [{"v": 1.000000E-03},{"v": 1.000000E+00},{"v": 1.000000E+00},{"v": 1.000000E+00},{"v": 1.000000E+00}]}, 
    {"c": [{"v": 1.010000E-01},{"v": 9.999940E-01},{"v": 9.999989E-01},{"v": 1.000000E+00},{"v": 1.000000E+00}]}, 
    {"c": [{"v": 2.010000E-01},{"v": 9.999592E-01},{"v": 9.999903E-01},{"v": 9.999983E-01},{"v": 1.000000E+00}]}, 
    {"c": [{"v": 3.010000E-01},{"v": 9.998828E-01},{"v": 9.999720E-01},{"v": 9.999940E-01},{"v": 9.999995E-01}]}, 
    {"c": [{"v": 4.010000E-01},{"v": 9.997612E-01},{"v": 9.999420E-01},{"v": 9.999873E-01},{"v": 9.999989E-01}]}, 
    {"c": [{"v": 5.010000E-01},{"v": 9.995987E-01},{"v": 9.999017E-01},{"v": 9.999781E-01},{"v": 9.999971E-01}]}, 
    {"c": [{"v": 6.010000E-01},{"v": 9.994052E-01},{"v": 9.998541E-01},{"v": 9.999665E-01},{"v": 9.999940E-01}]}, 
    {"c": [{"v": 7.010000E-01},{"v": 9.991922E-01},{"v": 9.998003E-01},{"v": 9.999524E-01},{"v": 9.999909E-01}]}, 
    {"c": [{"v": 8.010000E-01},{"v": 9.989671E-01},{"v": 9.997429E-01},{"v": 9.999372E-01},{"v": 9.999860E-01}]}, 
    {"c": [{"v": 9.010000E-01},{"v": 9.987336E-01},{"v": 9.996824E-01},{"v": 9.999207E-01},{"v": 9.999805E-01}]}, 
    {"c": [{"v": 1.001000E+00},{"v": 9.984940E-01},{"v": 9.996207E-01},{"v": 9.999036E-01},{"v": 9.999744E-01}]}, 
    {"c": [{"v": 1.101000E+00},{"v": 9.982510E-01},{"v": 9.995578E-01},{"v": 9.998858E-01},{"v": 9.999683E-01}]}, 
    {"c": [{"v": 1.201000E+00},{"v": 9.980056E-01},{"v": 9.994943E-01},{"v": 9.998687E-01},{"v": 9.999622E-01}]}, 
    {"c": [{"v": 1.301000E+00},{"v": 9.977610E-01},{"v": 9.994321E-01},{"v": 9.998522E-01},{"v": 9.999573E-01}]}, 
    {"c": [{"v": 1.401000E+00},{"v": 9.975171E-01},{"v": 9.993704E-01},{"v": 9.998363E-01},{"v": 9.999530E-01}]}, 
    {"c": [{"v": 1.501000E+00},{"v": 9.972751E-01},{"v": 9.993100E-01},{"v": 9.998217E-01},{"v": 9.999500E-01}]}, 
    {"c": [{"v": 1.601000E+00},{"v": 9.970344E-01},{"v": 9.992508E-01},{"v": 9.998082E-01},{"v": 9.999482E-01}]}, 
    {"c": [{"v": 1.701000E+00},{"v": 9.967957E-01},{"v": 9.991922E-01},{"v": 9.997954E-01},{"v": 9.999463E-01}]}, 
    {"c": [{"v": 1.801000E+00},{"v": 9.965584E-01},{"v": 9.991342E-01},{"v": 9.997826E-01},{"v": 9.999451E-01}]}, 
    {"c": [{"v": 1.901000E+00},{"v": 9.963211E-01},{"v": 9.990763E-01},{"v": 9.997704E-01},{"v": 9.999445E-01}]}, 
    {"c": [{"v": 2.001000E+00},{"v": 9.960845E-01},{"v": 9.990189E-01},{"v": 9.997588E-01},{"v": 9.999439E-01}]}, 
    {"c": [{"v": 2.101000E+00},{"v": 9.958481E-01},{"v": 9.989616E-01},{"v": 9.997465E-01},{"v": 9.999433E-01}]}, 
    {"c": [{"v": 2.201000E+00},{"v": 9.956112E-01},{"v": 9.989043E-01},{"v": 9.997349E-01},{"v": 9.999427E-01}]}, 
    {"c": [{"v": 2.301000E+00},{"v": 9.953744E-01},{"v": 9.988470E-01},{"v": 9.997227E-01},{"v": 9.999427E-01}]}, 
    {"c": [{"v": 2.401000E+00},{"v": 9.951365E-01},{"v": 9.987897E-01},{"v": 9.997111E-01},{"v": 9.999420E-01}]}, 
    {"c": [{"v": 2.501000E+00},{"v": 9.948987E-01},{"v": 9.987317E-01},{"v": 9.996989E-01},{"v": 9.999414E-01}]}, 
    {"c": [{"v": 2.601000E+00},{"v": 9.946598E-01},{"v": 9.986738E-01},{"v": 9.996867E-01},{"v": 9.999408E-01}]}, 
    {"c": [{"v": 2.701000E+00},{"v": 9.944210E-01},{"v": 9.986159E-01},{"v": 9.996745E-01},{"v": 9.999402E-01}]}, 
    {"c": [{"v": 2.801000E+00},{"v": 9.941823E-01},{"v": 9.985574E-01},{"v": 9.996623E-01},{"v": 9.999396E-01}]}, 
    {"c": [{"v": 2.901000E+00},{"v": 9.939432E-01},{"v": 9.984995E-01},{"v": 9.996500E-01},{"v": 9.999390E-01}]}, 
    {"c": [{"v": 3.001000E+00},{"v": 9.937048E-01},{"v": 9.984416E-01},{"v": 9.996378E-01},{"v": 9.999378E-01}]}, 
    ] 
  }; 

  var data = new google.visualization.DataTable(mydata); 

  var options = { 
    title : 'Mass conservation on Level 3',
    hAxis: {title: 'Time[s]',viewWindow: {min: 0.0, max: 3.0},ticks: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, 
    vAxis: {title: 'U_z', viewWindow: {min: 0.994, max: 1.002},ticks: [0.994, 0.995, 0.996, 0.997, 0.998, 0.999, 1.0, 1.001, 1.002]}, 
    width: 630, 
    height: 450, 
    legend: { position: 'right', alignment: 'start' }, 
    chartArea: {  width: "50%", height: "70%" }  
  }; 

  var chart = new google.visualization.LineChart( 
      document.getElementById('massL3')); 
  chart.draw(data, options); 

} 
