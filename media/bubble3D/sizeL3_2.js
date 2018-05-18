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
    {"c": [{"v": 1.000000E-03},{"v": 5.000000E-01},{"v": 5.000000E-01},{"v": 5.000000E-01},{"v": 5.000000E-01}]}, 
    {"c": [{"v": 1.010000E-01},{"v": 5.000474E-01},{"v": 5.000261E-01},{"v": 5.000242E-01},{"v": 5.000238E-01}]}, 
    {"c": [{"v": 2.010000E-01},{"v": 4.988114E-01},{"v": 4.987929E-01},{"v": 4.987909E-01},{"v": 4.987904E-01}]}, 
    {"c": [{"v": 3.010000E-01},{"v": 4.940552E-01},{"v": 4.940266E-01},{"v": 4.940210E-01},{"v": 4.940195E-01}]}, 
    {"c": [{"v": 4.010000E-01},{"v": 4.842620E-01},{"v": 4.841895E-01},{"v": 4.841719E-01},{"v": 4.841674E-01}]}, 
    {"c": [{"v": 5.010000E-01},{"v": 4.695156E-01},{"v": 4.693617E-01},{"v": 4.693229E-01},{"v": 4.693131E-01}]}, 
    {"c": [{"v": 6.010000E-01},{"v": 4.516897E-01},{"v": 4.514365E-01},{"v": 4.513718E-01},{"v": 4.513555E-01}]}, 
    {"c": [{"v": 7.010000E-01},{"v": 4.335592E-01},{"v": 4.332149E-01},{"v": 4.331266E-01},{"v": 4.331044E-01}]}, 
    {"c": [{"v": 8.010000E-01},{"v": 4.173868E-01},{"v": 4.169730E-01},{"v": 4.168671E-01},{"v": 4.168404E-01}]}, 
    {"c": [{"v": 9.010000E-01},{"v": 4.042389E-01},{"v": 4.037759E-01},{"v": 4.036578E-01},{"v": 4.036283E-01}]}, 
    {"c": [{"v": 1.001000E+00},{"v": 3.941998E-01},{"v": 3.937015E-01},{"v": 3.935751E-01},{"v": 3.935434E-01}]}, 
    {"c": [{"v": 1.101000E+00},{"v": 3.868479E-01},{"v": 3.863219E-01},{"v": 3.861889E-01},{"v": 3.861557E-01}]}, 
    {"c": [{"v": 1.201000E+00},{"v": 3.816030E-01},{"v": 3.810517E-01},{"v": 3.809127E-01},{"v": 3.808779E-01}]}, 
    {"c": [{"v": 1.301000E+00},{"v": 3.779065E-01},{"v": 3.773292E-01},{"v": 3.771838E-01},{"v": 3.771474E-01}]}, 
    {"c": [{"v": 1.401000E+00},{"v": 3.752960E-01},{"v": 3.746901E-01},{"v": 3.745374E-01},{"v": 3.744992E-01}]}, 
    {"c": [{"v": 1.501000E+00},{"v": 3.734250E-01},{"v": 3.727875E-01},{"v": 3.726266E-01},{"v": 3.725864E-01}]}, 
    {"c": [{"v": 1.601000E+00},{"v": 3.720550E-01},{"v": 3.713835E-01},{"v": 3.712139E-01},{"v": 3.711715E-01}]}, 
    {"c": [{"v": 1.701000E+00},{"v": 3.710351E-01},{"v": 3.703290E-01},{"v": 3.701504E-01},{"v": 3.701057E-01}]}, 
    {"c": [{"v": 1.801000E+00},{"v": 3.702760E-01},{"v": 3.695368E-01},{"v": 3.693499E-01},{"v": 3.693030E-01}]}, 
    {"c": [{"v": 1.901000E+00},{"v": 3.697252E-01},{"v": 3.689566E-01},{"v": 3.687621E-01},{"v": 3.687134E-01}]}, 
    {"c": [{"v": 2.001000E+00},{"v": 3.693467E-01},{"v": 3.685534E-01},{"v": 3.683527E-01},{"v": 3.683024E-01}]}, 
    {"c": [{"v": 2.101000E+00},{"v": 3.691086E-01},{"v": 3.682955E-01},{"v": 3.680896E-01},{"v": 3.680381E-01}]}, 
    {"c": [{"v": 2.201000E+00},{"v": 3.689772E-01},{"v": 3.681482E-01},{"v": 3.679384E-01},{"v": 3.678860E-01}]}, 
    {"c": [{"v": 2.301000E+00},{"v": 3.689173E-01},{"v": 3.680749E-01},{"v": 3.678620E-01},{"v": 3.678087E-01}]}, 
    {"c": [{"v": 2.401000E+00},{"v": 3.688948E-01},{"v": 3.680400E-01},{"v": 3.678240E-01},{"v": 3.677700E-01}]}, 
    {"c": [{"v": 2.501000E+00},{"v": 3.688792E-01},{"v": 3.680116E-01},{"v": 3.677926E-01},{"v": 3.677377E-01}]}, 
    {"c": [{"v": 2.601000E+00},{"v": 3.688455E-01},{"v": 3.679644E-01},{"v": 3.677413E-01},{"v": 3.676853E-01}]}, 
    {"c": [{"v": 2.701000E+00},{"v": 3.687750E-01},{"v": 3.678766E-01},{"v": 3.676503E-01},{"v": 3.675929E-01}]}, 
    {"c": [{"v": 2.801000E+00},{"v": 3.686452E-01},{"v": 3.677295E-01},{"v": 3.674984E-01},{"v": 3.674406E-01}]}, 
    {"c": [{"v": 2.901000E+00},{"v": 3.684348E-01},{"v": 3.674976E-01},{"v": 3.672613E-01},{"v": 3.672020E-01}]}, 
    {"c": [{"v": 3.001000E+00},{"v": 3.681012E-01},{"v": 3.671419E-01},{"v": 3.668994E-01},{"v": 3.668385E-01}]}, 
    ] 
  }; 

  var data = new google.visualization.DataTable(mydata); 

  var options = { 
    title : 'plot size on Level 3',
    hAxis: {title: 'Time[s]',viewWindow: {min: 0.0, max: 3.0},ticks: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, 
    vAxis: {title: 'U_z', viewWindow: {min: 0.35, max: 0.6},ticks: [0.35, 0.4, 0.45, 0.5, 0.55, 0.6]}, 
    width: 630, 
    height: 450, 
    legend: { position: 'right', alignment: 'start' }, 
    chartArea: {  width: "50%", height: "70%" } 
  }; 

  var chart = new google.visualization.LineChart( 
      document.getElementById('sizeL3_2')); 
  chart.draw(data, options); 

} 