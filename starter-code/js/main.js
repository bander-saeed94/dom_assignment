/*
    Utilize the date class and also the css property rotate, float or flex
    
*/

$(document).ready(function(){
    let is24 = false;
    setInterval(()=>{
        
        var date = new Date();
        var hours24 = date.getHours(); 
        let ampm = hours24 > 12 ? "PM": "AM";
        hours12 = hours24 >= 12? hours24 - 12: hours24;//will be 0 -11
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hours24 = hours24.toString().length == 2 ? hours24: "0" + hours24;
        hours12 = hours12.toString().length == 2 ? hours12: "0" + hours12;
        minutes = minutes.toString().length == 2 ? minutes: "0" + minutes;
        seconds = seconds.toString().length == 2 ? seconds: "0" + seconds;

        if(is24){
            $(".digi_clock").html(`<h1>${hours24}:${minutes}:${seconds}</h1>`)
        } else {
            $(".digi_clock").html(`<h1>${hours12}:${minutes}:${seconds} ${ampm}</h1>`)
        }
        $(".analogue_clock_hours").css({'transform' : 'rotate('+ hourToDeg(hours12,minutes) +'deg)'});
        $(".analogue_clock_minutes").css({'transform' : 'rotate('+ minOrSecToDeg(minutes) +'deg)'});
        $(".analogue_clock_seconds").css({'transform' : 'rotate('+ minOrSecToDeg(seconds) +'deg)'});


    }, 1000)

    $("#2412").click(()=>{
        is24 = !is24;
    })
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