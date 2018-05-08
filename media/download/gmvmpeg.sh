#!/bin/sh
gmvmpeg3 -i u.%.gmv -fls 1,99,2 -x 400 -y 320 --invisible \
         -a pressure.attr       -o pressure

gmvmpeg3 -i u.%.gmv -fls 1,99,2 -x 400 -y 320 --invisible \
         -a streamfunction.attr -o streamfunction

gmvmpeg3 -i u.%.gmv -fls 1,99,2 -x 400 -y 320 --invisible \
         -a temperature.attr    -o temperature
# End sample.sh
