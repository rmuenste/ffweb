#######################################
# bench3
#######################################

reset
set terminal postscript eps enhanced solid color 
set output "results_cc2d_bench3_reference_drag.eps"
set xlabel "time"
set ylabel "C_D"

plot '../benchmark/results_cc2d_bench3_reference/bdforces_lv3' using 2:4 with lines lw 3 lt rgb "red"            title 'Drag Lv. 3',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv4' using 2:4 with lines lw 3 lt rgb "blue"           title 'Drag Lv. 4',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv5' using 2:4 with lines lw 3 lt rgb "dark-goldenrod" title 'Drag Lv. 5',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv6' using 2:4 with lines lw 3 lt rgb "black"          title 'Drag Lv. 6'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "results_cc2d_bench3_reference_drag_zoom.eps"
set xlabel "time"
set ylabel "C_D"
set xrange [3.55:4.3]
set yrange [2.75:2.95]

plot '../benchmark/results_cc2d_bench3_reference/bdforces_lv3' using 2:4 with lines lw 3 lt rgb "red"            title 'Drag Lv. 3',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv4' using 2:4 with lines lw 3 lt rgb "blue"           title 'Drag Lv. 4',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv5' using 2:4 with lines lw 3 lt rgb "dark-goldenrod" title 'Drag Lv. 5',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv6' using 2:4 with lines lw 3 lt rgb "black"          title 'Drag Lv. 6'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "results_cc2d_bench3_reference_drag_zoom2.eps"
set xlabel "time"
set ylabel "C_D"
set xrange [5:6]
set yrange [1.6:2.6]

plot '../benchmark/results_cc2d_bench3_reference/bdforces_lv3' using 2:4 with lines lw 3 lt rgb "red"            title 'Drag Lv. 3',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv4' using 2:4 with lines lw 3 lt rgb "blue"           title 'Drag Lv. 4',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv5' using 2:4 with lines lw 3 lt rgb "dark-goldenrod" title 'Drag Lv. 5',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv6' using 2:4 with lines lw 3 lt rgb "black"          title 'Drag Lv. 6'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "results_cc2d_bench3_reference_lift.eps"
set xlabel "time"
set ylabel "C_L"

plot '../benchmark/results_cc2d_bench3_reference/bdforces_lv3' using 2:5 with lines lw 3 lt rgb "red"            title 'Lift Lv. 3',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv4' using 2:5 with lines lw 3 lt rgb "blue"           title 'Lift Lv. 4',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv5' using 2:5 with lines lw 3 lt rgb "dark-goldenrod" title 'Lift Lv. 5',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv6' using 2:5 with lines lw 3 lt rgb "black"          title 'Lift Lv. 6'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "results_cc2d_bench3_reference_lift_zoom.eps"
set xlabel "time"
set ylabel "C_L"
set xrange [5.68:5.705]
set yrange [0.473:0.478]

plot '../benchmark/results_cc2d_bench3_reference/bdforces_lv3' using 2:5 with lines lw 3 lt rgb "red"            title 'Lift Lv. 3',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv4' using 2:5 with lines lw 3 lt rgb "blue"           title 'Lift Lv. 4',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv5' using 2:5 with lines lw 3 lt rgb "dark-goldenrod" title 'Lift Lv. 5',\
     '../benchmark/results_cc2d_bench3_reference/bdforces_lv6' using 2:5 with lines lw 3 lt rgb "black"          title 'Lift Lv. 6'

set terminal win
set output

