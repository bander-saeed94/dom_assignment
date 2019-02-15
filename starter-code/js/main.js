/*
    Utilize the date class and also the css property rotate, float or flex
    
*/

$(document).ready(function(){
    setInterval(()=>{
        
        var date = new Date();
        var hours = date.getHours();
        hours = hours >= 12? hours - 12: hours;//will be 0 -11
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        console.log(hours)
        $(".analogue_clock_hours").css({'transform' : 'rotate('+ hourToDeg(hours,minutes) +'deg)'});
        $(".analogue_clock_minutes").css({'transform' : 'rotate('+ minOrSecToDeg(minutes) +'deg)'});
        $(".analogue_clock_seconds").css({'transform' : 'rotate('+ minOrSecToDeg(seconds) +'deg)'});


    }, 1000)

    function hourToDeg(hour, minutes){
        var deg = (hour * 30)  ;
        var percent = minutes / 60;//will take care of the hour progress
        deg = deg + percent * 30;
        return deg;
    }
    function minOrSecToDeg(minOrSec){
        var deg = (minOrSec * 6) ;
        return deg;
    }
  });