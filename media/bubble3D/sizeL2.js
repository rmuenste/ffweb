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
    {"c": [{"v": 1.000000E-03},{"v": 4.999794E-01},{"v": 5.000000E-01},{"v": 4.999794E-01},{"v": 5.000000E-01},{"v": 4.999794E-01},{"v": 5.000000E-01},{"v": 4.999794E-01},{"v": 5.000000E-01}]}, 
    {"c": [{"v": 1.010000E-01},{"v": 5.000170E-01},{"v": 5.000407E-01},{"v": 5.000184E-01},{"v": 5.000244E-01},{"v": 5.000188E-01},{"v": 5.000217E-01},{"v": 5.000194E-01},{"v": 5.000214E-01}]}, 
    {"c": [{"v": 2.010000E-01},{"v": 5.006638E-01},{"v": 4.988024E-01},{"v": 5.006626E-01},{"v": 4.987857E-01},{"v": 5.006622E-01},{"v": 4.987829E-01},{"v": 5.006626E-01},{"v": 4.987825E-01}]}, 
    {"c": [{"v": 3.010000E-01},{"v": 5.028592E-01},{"v": 4.940413E-01},{"v": 5.028520E-01},{"v": 4.940121E-01},{"v": 5.028496E-01},{"v": 4.940057E-01},{"v": 5.028488E-01},{"v": 4.940043E-01}]}, 
    {"c": [{"v": 4.010000E-01},{"v": 5.070818E-01},{"v": 4.842447E-01},{"v": 5.070670E-01},{"v": 4.841702E-01},{"v": 5.070620E-01},{"v": 4.841519E-01},{"v": 5.070568E-01},{"v": 4.841473E-01}]}, 
    {"c": [{"v": 5.010000E-01},{"v": 5.131044E-01},{"v": 4.694998E-01},{"v": 5.130812E-01},{"v": 4.693431E-01},{"v": 5.130720E-01},{"v": 4.693037E-01},{"v": 5.130570E-01},{"v": 4.692939E-01}]}, 
    {"c": [{"v": 6.010000E-01},{"v": 5.204104E-01},{"v": 4.516794E-01},{"v": 5.204386E-01},{"v": 4.514225E-01},{"v": 5.204510E-01},{"v": 4.513573E-01},{"v": 5.204750E-01},{"v": 4.513409E-01}]}, 
    {"c": [{"v": 7.010000E-01},{"v": 5.288818E-01},{"v": 4.335567E-01},{"v": 5.289130E-01},{"v": 4.332082E-01},{"v": 5.289238E-01},{"v": 4.331199E-01},{"v": 5.289370E-01},{"v": 4.330975E-01}]}, 
    {"c": [{"v": 8.010000E-01},{"v": 5.373330E-01},{"v": 4.173933E-01},{"v": 5.373686E-01},{"v": 4.169760E-01},{"v": 5.373762E-01},{"v": 4.168702E-01},{"v": 5.373710E-01},{"v": 4.168435E-01}]}, 
    {"c": [{"v": 9.010000E-01},{"v": 5.453636E-01},{"v": 4.042542E-01},{"v": 5.454056E-01},{"v": 4.037890E-01},{"v": 5.454094E-01},{"v": 4.036713E-01},{"v": 5.453792E-01},{"v": 4.036414E-01}]}, 
    {"c": [{"v": 1.001000E+00},{"v": 5.527142E-01},{"v": 3.942220E-01},{"v": 5.527650E-01},{"v": 3.937229E-01},{"v": 5.527644E-01},{"v": 3.935968E-01},{"v": 5.527052E-01},{"v": 3.935645E-01}]}, 
    {"c": [{"v": 1.101000E+00},{"v": 5.592070E-01},{"v": 3.868719E-01},{"v": 5.592666E-01},{"v": 3.863459E-01},{"v": 5.592616E-01},{"v": 3.862131E-01},{"v": 5.591736E-01},{"v": 3.861791E-01}]}, 
    {"c": [{"v": 1.201000E+00},{"v": 5.647198E-01},{"v": 3.816215E-01},{"v": 5.647846E-01},{"v": 3.810706E-01},{"v": 5.647758E-01},{"v": 3.809316E-01},{"v": 5.646624E-01},{"v": 3.808960E-01}]}, 
    {"c": [{"v": 1.301000E+00},{"v": 5.691930E-01},{"v": 3.779124E-01},{"v": 5.692554E-01},{"v": 3.773354E-01},{"v": 5.692432E-01},{"v": 3.771898E-01},{"v": 5.691122E-01},{"v": 3.771513E-01}]}, 
    {"c": [{"v": 1.401000E+00},{"v": 5.726398E-01},{"v": 3.752839E-01},{"v": 5.726900E-01},{"v": 3.746781E-01},{"v": 5.726750E-01},{"v": 3.745249E-01},{"v": 5.725272E-01},{"v": 3.744818E-01}]}, 
    {"c": [{"v": 1.501000E+00},{"v": 5.751516E-01},{"v": 3.733927E-01},{"v": 5.751792E-01},{"v": 3.727545E-01},{"v": 5.751622E-01},{"v": 3.725931E-01},{"v": 5.750060E-01},{"v": 3.725457E-01}]}, 
    {"c": [{"v": 1.601000E+00},{"v": 5.768732E-01},{"v": 3.720028E-01},{"v": 5.768704E-01},{"v": 3.713301E-01},{"v": 5.768518E-01},{"v": 3.711597E-01},{"v": 5.766968E-01},{"v": 3.711054E-01}]}, 
    {"c": [{"v": 1.701000E+00},{"v": 5.779748E-01},{"v": 3.709659E-01},{"v": 5.779360E-01},{"v": 3.702581E-01},{"v": 5.779166E-01},{"v": 3.700786E-01},{"v": 5.777698E-01},{"v": 3.700127E-01}]}, 
    {"c": [{"v": 1.801000E+00},{"v": 5.786216E-01},{"v": 3.701941E-01},{"v": 5.785434E-01},{"v": 3.694529E-01},{"v": 5.785230E-01},{"v": 3.692648E-01},{"v": 5.783882E-01},{"v": 3.691853E-01}]}, 
    {"c": [{"v": 1.901000E+00},{"v": 5.789550E-01},{"v": 3.696354E-01},{"v": 5.788354E-01},{"v": 3.688646E-01},{"v": 5.788136E-01},{"v": 3.686689E-01},{"v": 5.786910E-01},{"v": 3.685762E-01}]}, 
    {"c": [{"v": 2.001000E+00},{"v": 5.790862E-01},{"v": 3.692535E-01},{"v": 5.789244E-01},{"v": 3.684580E-01},{"v": 5.789002E-01},{"v": 3.682561E-01},{"v": 5.787870E-01},{"v": 3.681526E-01}]}, 
    {"c": [{"v": 2.101000E+00},{"v": 5.790982E-01},{"v": 3.690155E-01},{"v": 5.788938E-01},{"v": 3.682002E-01},{"v": 5.788662E-01},{"v": 3.679933E-01},{"v": 5.787568E-01},{"v": 3.678823E-01}]}, 
    {"c": [{"v": 2.201000E+00},{"v": 5.790496E-01},{"v": 3.688861E-01},{"v": 5.788028E-01},{"v": 3.680551E-01},{"v": 5.787714E-01},{"v": 3.678443E-01},{"v": 5.786580E-01},{"v": 3.677285E-01}]}, 
    {"c": [{"v": 2.301000E+00},{"v": 5.789812E-01},{"v": 3.688289E-01},{"v": 5.786924E-01},{"v": 3.679847E-01},{"v": 5.786562E-01},{"v": 3.677707E-01},{"v": 5.785328E-01},{"v": 3.676514E-01}]}, 
    {"c": [{"v": 2.401000E+00},{"v": 5.789204E-01},{"v": 3.688085E-01},{"v": 5.785902E-01},{"v": 3.679521E-01},{"v": 5.785482E-01},{"v": 3.677349E-01},{"v": 5.784096E-01},{"v": 3.676123E-01}]}, 
    {"c": [{"v": 2.501000E+00},{"v": 5.788842E-01},{"v": 3.687939E-01},{"v": 5.785138E-01},{"v": 3.679247E-01},{"v": 5.784654E-01},{"v": 3.677043E-01},{"v": 5.783072E-01},{"v": 3.675779E-01}]}, 
    {"c": [{"v": 2.601000E+00},{"v": 5.788824E-01},{"v": 3.687603E-01},{"v": 5.784732E-01},{"v": 3.678765E-01},{"v": 5.784172E-01},{"v": 3.676522E-01},{"v": 5.782382E-01},{"v": 3.675221E-01}]}, 
    {"c": [{"v": 2.701000E+00},{"v": 5.789198E-01},{"v": 3.686864E-01},{"v": 5.784726E-01},{"v": 3.677864E-01},{"v": 5.784092E-01},{"v": 3.675584E-01},{"v": 5.782090E-01},{"v": 3.674226E-01}]}, 
    {"c": [{"v": 2.801000E+00},{"v": 5.789994E-01},{"v": 3.685544E-01},{"v": 5.785154E-01},{"v": 3.676362E-01},{"v": 5.784450E-01},{"v": 3.674030E-01},{"v": 5.782234E-01},{"v": 3.672619E-01}]}, 
    {"c": [{"v": 2.901000E+00},{"v": 5.791240E-01},{"v": 3.683393E-01},{"v": 5.786050E-01},{"v": 3.673997E-01},{"v": 5.785284E-01},{"v": 3.671620E-01},{"v": 5.782862E-01},{"v": 3.670150E-01}]}, 
    {"c": [{"v": 3.001000E+00},{"v": 5.793022E-01},{"v": 3.680009E-01},{"v": 5.787496E-01},{"v": 3.670384E-01},{"v": 5.786680E-01},{"v": 3.667951E-01},{"v": 5.784080E-01},{"v": 3.666410E-01}]}, 
    ] 
  }; 

  var data = new google.visualization.DataTable(mydata); 

  var options = { 
    title : 'plot size on Level 2',
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
      document.getElementById('sizeL2')); 
  chart.draw(data, options); 

} 
