#######################################
# bench2
#######################################

reset
set terminal postscript eps enhanced solid color 
set output "drag_Q2_all.eps"
set xlabel "time"
set ylabel "C_D"
#set xrange [5.315:5.6675]
set xrange [0:0.3525]
set yrange [3.09:3.23]

#plot '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv3_dt4' using ($2+0.0107):4 with lines lw 3 title 'Drag Lv. 3, dt=1/400',\
#     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv4_dt4' using ($2+0.0017):4 with lines lw 3 title 'Drag Lv. 4, dt=1/400',\
#     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv5_dt4' using ($2+0.0004):4 with lines lw 3 title 'Drag Lv. 5, dt=1/400',\
#     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv6_dt3' using ($2       ):4 with lines lw 3 title 'Drag Lv. 6, dt=1/200'
plot '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv3_dt4' using ($2-8.3165625):4 with lines lw 3 lt rgb "red"            title 'Drag Lv. 3, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv4_dt4' using ($2-8.9859375):4 with lines lw 3 lt rgb "blue"           title 'Drag Lv. 4, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv5_dt4' using ($2-5.0203125):4 with lines lw 3 lt rgb "dark-goldenrod" title 'Drag Lv. 5, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv6_dt3' using ($2-8.535625 ):4 with lines lw 3 lt rgb "black"          title 'Drag Lv. 6, dt=1/200'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "drag_Q2_zoom.eps"
set xlabel "time"
set ylabel "C_D"
#set xrange [5.452:5.5675]
set xrange [0.13:0.24]
set yrange [3.15:3.221]

plot '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv3_dt4' using ($2-8.3165625):4 with lines lw 3 lt rgb "red"            title 'Drag Lv. 3, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv4_dt4' using ($2-8.9859375):4 with lines lw 3 lt rgb "blue"           title 'Drag Lv. 4, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv5_dt4' using ($2-5.0203125):4 with lines lw 3 lt rgb "dark-goldenrod" title 'Drag Lv. 5, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv6_dt3' using ($2-8.535625 ):4 with lines lw 3 lt rgb "black"          title 'Drag Lv. 6, dt=1/200'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "lift_Q2_all.eps"
set xlabel "time"
set ylabel "C_L"
#set xrange [5.315:5.6675]
set xrange [0:0.3525]
set yrange [-1.2:1.2]

plot '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv3_dt4' using ($2-8.3165625):5 with lines lw 3 lt rgb "red"            title 'Lift Lv. 3, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv4_dt4' using ($2-8.9859375):5 with lines lw 3 lt rgb "blue"           title 'Lift Lv. 4, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv5_dt4' using ($2-5.0203125):5 with lines lw 3 lt rgb "dark-goldenrod" title 'Lift Lv. 5, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv6_dt3' using ($2-8.535625 ):5 with lines lw 3 lt rgb "black"          title 'Lift Lv. 6, dt=1/200'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "lift_Q2_zoom2.eps"
set xlabel "time"
set ylabel "C_L"
#set xrange [5.465:5.5175]
set xrange [0.14:0.19]
set yrange [0.91:0.99]

plot '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv3_dt4' using ($2-8.3165625):5 with lines lw 3 lt rgb "red"            title 'Lift Lv. 3, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv4_dt4' using ($2-8.9859375):5 with lines lw 3 lt rgb "blue"           title 'Lift Lv. 4, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv5_dt4' using ($2-5.0203125):5 with lines lw 3 lt rgb "dark-goldenrod" title 'Lift Lv. 5, dt=1/400',\
     '../benchmark/results_cc2d_bench2_reference/bdforces_q2_lv6_dt3' using ($2-8.535625 ):5 with lines lw 3 lt rgb "black"          title 'Lift Lv. 6, dt=1/200'

set terminal win
set output

reset
set terminal postscript eps enhanced solid color 
set output "dp_Q2.eps"
set xlabel "time"
set ylabel "p1-p2"
#set xrange [5.315:5.6675]
set xrange [0:0.3525]
set yrange [2.419:2.525]

plot '../benchmark/results_cc2d_bench2_reference/pointvalues_q2_lv3_dt4' using ($2-8.3165625):($7-$12) with lines lw 3 lt rgb "red"            title "P1-P2, Level 3, dt=1/400", \
     '../benchmark/results_cc2d_bench2_reference/pointvalues_q2_lv4_dt4' using ($2-8.9859375):($7-$12) with lines lw 3 lt rgb "blue"           title "P1-P2, Level 4, dt=1/400", \
     '../benchmark/results_cc2d_bench2_reference/pointvalues_q2_lv5_dt4' using ($2-5.0203125):($7-$12) with lines lw 3 lt rgb "dark-goldenrod" title "P1-P2, Level 5, dt=1/400", \
     '../benchmark/results_cc2d_bench2_reference/pointvalues_q2_lv6_dt3' using ($2-8.535625 ):($7-$12) with lines lw 3 lt rgb "black"          title "P1-P2, Level 6, dt=1/200"

set terminal win
set output
