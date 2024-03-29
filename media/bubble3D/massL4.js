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
    {"c": [{"v": 1.010000E-01},{"v": 9.999934E-01},{"v": 9.999983E-01},{"v": 9.999995E-01},{"v": 1.000000E+00}]}, 
    {"c": [{"v": 2.010000E-01},{"v": 9.999585E-01},{"v": 9.999897E-01},{"v": 9.999977E-01},{"v": 9.999995E-01}]}, 
    {"c": [{"v": 3.010000E-01},{"v": 9.998816E-01},{"v": 9.999708E-01},{"v": 9.999928E-01},{"v": 9.999983E-01}]}, 
    {"c": [{"v": 4.010000E-01},{"v": 9.997588E-01},{"v": 9.999402E-01},{"v": 9.999854E-01},{"v": 9.999964E-01}]}, 
    {"c": [{"v": 5.010000E-01},{"v": 9.995957E-01},{"v": 9.998993E-01},{"v": 9.999750E-01},{"v": 9.999940E-01}]}, 
    {"c": [{"v": 6.010000E-01},{"v": 9.994021E-01},{"v": 9.998504E-01},{"v": 9.999628E-01},{"v": 9.999909E-01}]}, 
    {"c": [{"v": 7.010000E-01},{"v": 9.991892E-01},{"v": 9.997966E-01},{"v": 9.999494E-01},{"v": 9.999873E-01}]}, 
    {"c": [{"v": 8.010000E-01},{"v": 9.989653E-01},{"v": 9.997404E-01},{"v": 9.999347E-01},{"v": 9.999830E-01}]}, 
    {"c": [{"v": 9.010000E-01},{"v": 9.987336E-01},{"v": 9.996812E-01},{"v": 9.999188E-01},{"v": 9.999787E-01}]}, 
    {"c": [{"v": 1.001000E+00},{"v": 9.984965E-01},{"v": 9.996207E-01},{"v": 9.999029E-01},{"v": 9.999738E-01}]}, 
    {"c": [{"v": 1.101000E+00},{"v": 9.982559E-01},{"v": 9.995597E-01},{"v": 9.998871E-01},{"v": 9.999689E-01}]}, 
    {"c": [{"v": 1.201000E+00},{"v": 9.980135E-01},{"v": 9.994974E-01},{"v": 9.998706E-01},{"v": 9.999640E-01}]}, 
    {"c": [{"v": 1.301000E+00},{"v": 9.977701E-01},{"v": 9.994351E-01},{"v": 9.998541E-01},{"v": 9.999585E-01}]}, 
    {"c": [{"v": 1.401000E+00},{"v": 9.975268E-01},{"v": 9.993735E-01},{"v": 9.998376E-01},{"v": 9.999537E-01}]}, 
    {"c": [{"v": 1.501000E+00},{"v": 9.972842E-01},{"v": 9.993112E-01},{"v": 9.998211E-01},{"v": 9.999488E-01}]}, 
    {"c": [{"v": 1.601000E+00},{"v": 9.970429E-01},{"v": 9.992496E-01},{"v": 9.998052E-01},{"v": 9.999439E-01}]}, 
    {"c": [{"v": 1.701000E+00},{"v": 9.968030E-01},{"v": 9.991885E-01},{"v": 9.997893E-01},{"v": 9.999396E-01}]}, 
    {"c": [{"v": 1.801000E+00},{"v": 9.965632E-01},{"v": 9.991275E-01},{"v": 9.997734E-01},{"v": 9.999353E-01}]}, 
    {"c": [{"v": 1.901000E+00},{"v": 9.963247E-01},{"v": 9.990671E-01},{"v": 9.997575E-01},{"v": 9.999304E-01}]}, 
    {"c": [{"v": 2.001000E+00},{"v": 9.960858E-01},{"v": 9.990061E-01},{"v": 9.997417E-01},{"v": 9.999262E-01}]}, 
    {"c": [{"v": 2.101000E+00},{"v": 9.958469E-01},{"v": 9.989458E-01},{"v": 9.997264E-01},{"v": 9.999219E-01}]}, 
    {"c": [{"v": 2.201000E+00},{"v": 9.956076E-01},{"v": 9.988848E-01},{"v": 9.997105E-01},{"v": 9.999176E-01}]}, 
    {"c": [{"v": 2.301000E+00},{"v": 9.953683E-01},{"v": 9.988238E-01},{"v": 9.996946E-01},{"v": 9.999133E-01}]}, 
    {"c": [{"v": 2.401000E+00},{"v": 9.951280E-01},{"v": 9.987628E-01},{"v": 9.996794E-01},{"v": 9.999091E-01}]}, 
    {"c": [{"v": 2.501000E+00},{"v": 9.948878E-01},{"v": 9.987013E-01},{"v": 9.996635E-01},{"v": 9.999042E-01}]}, 
    {"c": [{"v": 2.601000E+00},{"v": 9.946471E-01},{"v": 9.986403E-01},{"v": 9.996476E-01},{"v": 9.998999E-01}]}, 
    {"c": [{"v": 2.701000E+00},{"v": 9.944059E-01},{"v": 9.985787E-01},{"v": 9.996317E-01},{"v": 9.998956E-01}]}, 
    {"c": [{"v": 2.801000E+00},{"v": 9.941642E-01},{"v": 9.985172E-01},{"v": 9.996158E-01},{"v": 9.998913E-01}]}, 
    {"c": [{"v": 2.901000E+00},{"v": 9.939233E-01},{"v": 9.984557E-01},{"v": 9.996000E-01},{"v": 9.998864E-01}]}, 
    {"c": [{"v": 3.001000E+00},{"v": 9.936824E-01},{"v": 9.983941E-01},{"v": 9.995841E-01},{"v": 9.998822E-01}]}, 
    ] 
  }; 

  var data = new google.visualization.DataTable(mydata); 

  var options = { 
    title : 'Mass conservation on Level 4',
    hAxis: {title: 'Time[s]',viewWindow: {min: 0.0, max: 3.0}}, 
    vAxis: {title: 'U_z', viewWindow: {min: 0.994, max: 1.002}}, 
    width: 630, 
    height: 450, 
    legend: { position: 'right', alignment: 'start' }, 
    chartArea: {  width: "50%", height: "70%" },  
    explorer: {maxZoomOut: 1, maxZoomIn: .0025} 
  }; 

  var chart = new google.visualization.LineChart( 
      document.getElementById('massL4')); 
  chart.draw(data, options); 

} 
