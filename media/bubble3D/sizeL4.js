google.charts.load('current', {packages: ['corechart', 'line']}); 
google.charts.setOnLoadCallback(drawChart); 

function drawChart() { 

  var mydata = { 
    "cols": [ 
    {"label":"x","type":"number"}, 
    {"label":"dt = 1.0000E-03" ,"type":"number"}, 
    {"label":"dt = 1.0000E-03" ,"type":"number"}, 
    {"label":"dt = 0.2500E-03" ,"type":"number"}, 
    {"label":"dt = 0.2500E-03" ,"type":"number"}, 
    {"label":"dt = 0.0625E-03" ,"type":"number"}, 
    {"label":"dt = 0.0625E-03" ,"type":"number"}, 
    {"label":"dt = 0.0156E-03" ,"type":"number"}, 
    {"label":"dt = 0.0156E-03" ,"type":"number"} 
    ], 
    "rows": [ 
    {"c": [{"v": 1.000000E-03},{"v": 4.999804E-01},{"v": 5.000000E-01},{"v": 4.999804E-01},{"v": 5.000000E-01},{"v": 4.999804E-01},{"v": 5.000000E-01},{"v": 4.999804E-01},{"v": 5.000000E-01}]}, 
    {"c": [{"v": 1.010000E-01},{"v": 5.000108E-01},{"v": 5.000537E-01},{"v": 5.000100E-01},{"v": 5.000270E-01},{"v": 5.000096E-01},{"v": 5.000243E-01},{"v": 5.000096E-01},{"v": 5.000241E-01}]}, 
    {"c": [{"v": 2.010000E-01},{"v": 5.006504E-01},{"v": 4.988311E-01},{"v": 5.006492E-01},{"v": 4.987939E-01},{"v": 5.006488E-01},{"v": 4.987915E-01},{"v": 5.006486E-01},{"v": 4.987913E-01}]}, 
    {"c": [{"v": 3.010000E-01},{"v": 5.028382E-01},{"v": 4.940697E-01},{"v": 5.028384E-01},{"v": 4.940281E-01},{"v": 5.028368E-01},{"v": 4.940222E-01},{"v": 5.028362E-01},{"v": 4.940210E-01}]}, 
    {"c": [{"v": 4.010000E-01},{"v": 5.070886E-01},{"v": 4.842708E-01},{"v": 5.070850E-01},{"v": 4.841911E-01},{"v": 5.070822E-01},{"v": 4.841733E-01},{"v": 5.070814E-01},{"v": 4.841691E-01}]}, 
    {"c": [{"v": 5.010000E-01},{"v": 5.132234E-01},{"v": 4.695194E-01},{"v": 5.132150E-01},{"v": 4.693630E-01},{"v": 5.132116E-01},{"v": 4.693241E-01},{"v": 5.132106E-01},{"v": 4.693144E-01}]}, 
    {"c": [{"v": 6.010000E-01},{"v": 5.207348E-01},{"v": 4.516883E-01},{"v": 5.207354E-01},{"v": 4.514371E-01},{"v": 5.207354E-01},{"v": 4.513725E-01},{"v": 5.207354E-01},{"v": 4.513563E-01}]}, 
    {"c": [{"v": 7.010000E-01},{"v": 5.289424E-01},{"v": 4.335532E-01},{"v": 5.289610E-01},{"v": 4.332150E-01},{"v": 5.289662E-01},{"v": 4.331268E-01},{"v": 5.289676E-01},{"v": 4.331046E-01}]}, 
    {"c": [{"v": 8.010000E-01},{"v": 5.373212E-01},{"v": 4.173781E-01},{"v": 5.373486E-01},{"v": 4.169727E-01},{"v": 5.373568E-01},{"v": 4.168668E-01},{"v": 5.373588E-01},{"v": 4.168401E-01}]}, 
    {"c": [{"v": 9.010000E-01},{"v": 5.454560E-01},{"v": 4.042299E-01},{"v": 5.455200E-01},{"v": 4.037753E-01},{"v": 5.455378E-01},{"v": 4.036571E-01},{"v": 5.455424E-01},{"v": 4.036273E-01}]}, 
    {"c": [{"v": 1.001000E+00},{"v": 5.529784E-01},{"v": 3.941927E-01},{"v": 5.530638E-01},{"v": 3.937009E-01},{"v": 5.530874E-01},{"v": 3.935741E-01},{"v": 5.530934E-01},{"v": 3.935423E-01}]}, 
    {"c": [{"v": 1.101000E+00},{"v": 5.595956E-01},{"v": 3.868441E-01},{"v": 5.597020E-01},{"v": 3.863216E-01},{"v": 5.597312E-01},{"v": 3.861883E-01},{"v": 5.597386E-01},{"v": 3.861548E-01}]}, 
    {"c": [{"v": 1.201000E+00},{"v": 5.651018E-01},{"v": 3.816027E-01},{"v": 5.652224E-01},{"v": 3.810524E-01},{"v": 5.652554E-01},{"v": 3.809128E-01},{"v": 5.652638E-01},{"v": 3.808778E-01}]}, 
    {"c": [{"v": 1.301000E+00},{"v": 5.695596E-01},{"v": 3.779092E-01},{"v": 5.696612E-01},{"v": 3.773312E-01},{"v": 5.696890E-01},{"v": 3.771851E-01},{"v": 5.696960E-01},{"v": 3.771485E-01}]}, 
    {"c": [{"v": 1.401000E+00},{"v": 5.728646E-01},{"v": 3.753015E-01},{"v": 5.729574E-01},{"v": 3.746936E-01},{"v": 5.729832E-01},{"v": 3.745403E-01},{"v": 5.729912E-01},{"v": 3.745020E-01}]}, 
    {"c": [{"v": 1.501000E+00},{"v": 5.753116E-01},{"v": 3.734324E-01},{"v": 5.753590E-01},{"v": 3.727925E-01},{"v": 5.753726E-01},{"v": 3.726312E-01},{"v": 5.753750E-01},{"v": 3.725908E-01}]}, 
    {"c": [{"v": 1.601000E+00},{"v": 5.769762E-01},{"v": 3.720634E-01},{"v": 5.769938E-01},{"v": 3.713900E-01},{"v": 5.770000E-01},{"v": 3.712201E-01},{"v": 5.770020E-01},{"v": 3.711775E-01}]}, 
    {"c": [{"v": 1.701000E+00},{"v": 5.780030E-01},{"v": 3.710434E-01},{"v": 5.779840E-01},{"v": 3.703366E-01},{"v": 5.779810E-01},{"v": 3.701579E-01},{"v": 5.779828E-01},{"v": 3.701132E-01}]}, 
    {"c": [{"v": 1.801000E+00},{"v": 5.787130E-01},{"v": 3.702839E-01},{"v": 5.786394E-01},{"v": 3.695451E-01},{"v": 5.786220E-01},{"v": 3.693583E-01},{"v": 5.786204E-01},{"v": 3.693115E-01}]}, 
    {"c": [{"v": 1.901000E+00},{"v": 5.790892E-01},{"v": 3.697329E-01},{"v": 5.789746E-01},{"v": 3.689653E-01},{"v": 5.789470E-01},{"v": 3.687712E-01},{"v": 5.789380E-01},{"v": 3.687224E-01}]}, 
    {"c": [{"v": 2.001000E+00},{"v": 5.792448E-01},{"v": 3.693543E-01},{"v": 5.790878E-01},{"v": 3.685624E-01},{"v": 5.790498E-01},{"v": 3.683620E-01},{"v": 5.790174E-01},{"v": 3.683116E-01}]}, 
    {"c": [{"v": 2.101000E+00},{"v": 5.792674E-01},{"v": 3.691161E-01},{"v": 5.790674E-01},{"v": 3.683043E-01},{"v": 5.790186E-01},{"v": 3.680989E-01},{"v": 5.790048E-01},{"v": 3.680474E-01}]}, 
    {"c": [{"v": 2.201000E+00},{"v": 5.792492E-01},{"v": 3.689845E-01},{"v": 5.789936E-01},{"v": 3.681567E-01},{"v": 5.789296E-01},{"v": 3.679474E-01},{"v": 5.789622E-01},{"v": 3.678949E-01}]}, 
    {"c": [{"v": 2.301000E+00},{"v": 5.792318E-01},{"v": 3.689244E-01},{"v": 5.789340E-01},{"v": 3.680831E-01},{"v": 5.788594E-01},{"v": 3.678705E-01},{"v": 5.788738E-01},{"v": 3.678172E-01}]}, 
    {"c": [{"v": 2.401000E+00},{"v": 5.792118E-01},{"v": 3.689016E-01},{"v": 5.788756E-01},{"v": 3.680478E-01},{"v": 5.787914E-01},{"v": 3.678321E-01},{"v": 5.787738E-01},{"v": 3.677782E-01}]}, 
    {"c": [{"v": 2.501000E+00},{"v": 5.792008E-01},{"v": 3.688861E-01},{"v": 5.788242E-01},{"v": 3.680193E-01},{"v": 5.787304E-01},{"v": 3.678005E-01},{"v": 5.786840E-01},{"v": 3.677457E-01}]}, 
    {"c": [{"v": 2.601000E+00},{"v": 5.791784E-01},{"v": 3.688536E-01},{"v": 5.787626E-01},{"v": 3.679714E-01},{"v": 5.786594E-01},{"v": 3.677498E-01},{"v": 5.786172E-01},{"v": 3.676940E-01}]}, 
    {"c": [{"v": 2.701000E+00},{"v": 5.792438E-01},{"v": 3.687828E-01},{"v": 5.787904E-01},{"v": 3.678849E-01},{"v": 5.786764E-01},{"v": 3.676578E-01},{"v": 5.786366E-01},{"v": 3.676017E-01}]}, 
    {"c": [{"v": 2.801000E+00},{"v": 5.793614E-01},{"v": 3.686559E-01},{"v": 5.788716E-01},{"v": 3.677381E-01},{"v": 5.787490E-01},{"v": 3.675072E-01},{"v": 5.787046E-01},{"v": 3.674485E-01}]}, 
    {"c": [{"v": 2.901000E+00},{"v": 5.794832E-01},{"v": 3.684458E-01},{"v": 5.789574E-01},{"v": 3.675074E-01},{"v": 5.788264E-01},{"v": 3.672703E-01},{"v": 5.788100E-01},{"v": 3.672111E-01}]}, 
    {"c": [{"v": 3.001000E+00},{"v": 5.796528E-01},{"v": 3.681130E-01},{"v": 5.790940E-01},{"v": 3.671519E-01},{"v": 5.789530E-01},{"v": 3.669086E-01},{"v": 5.789614E-01},{"v": 3.668478E-01}]}, 
    ] 
  }; 

  var data = new google.visualization.DataTable(mydata); 

  var options = { 
    title : 'plot size on Level 4',
    hAxis: {title: 'Time[s]',viewWindow: {min: 0.0, max: 3.0}}, 
    vAxis: {title: 'U_z', viewWindow: {min: 0.35, max: 0.6}}, 
    width: 630, 
    height: 450, 
    legend: { position: 'right', alignment: 'start' }, 
    chartArea: {  width: "50%", height: "70%" }, 
    colors: ["blue", "blue", "red", "red", "orange", "orange", "green", "green"], 
    series: {1: {visibleInLegend: false},3: {visibleInLegend: false},5: {visibleInLegend: false},7: {visibleInLegend: false}}, 
    explorer: {maxZoomOut: 1, maxZoomIn: .0001} 
  }; 

  var chart = new google.visualization.LineChart( 
      document.getElementById('sizeL4')); 
  chart.draw(data, options); 

} 
