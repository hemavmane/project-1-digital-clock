function updatetime(){
var datetime = new Date();
var hours = datetime.getHours();
var minutes = datetime.getMinutes();
var seconds= datetime.getSeconds();
var am_or_pm = document.getElementById("am-or-pm");


if(hours>=12){
 am_or_pm.innerHTML= "PM"
}
else{
 am_or_pm.innerHTML= "AM"
}


if(hours>=12){
    hours = hours-12;
}


document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;



}

setInterval(updatetime,1000);