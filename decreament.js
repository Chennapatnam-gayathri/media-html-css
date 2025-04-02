let timer=document.getElementById("timer");
let timeup=document.getElementById("timeup")
let is_running = false;
function ten(){
    if(is_running){
        return
    }
    is_running=true;
    timer.innerHTML="10:00";
    timer.style.color="black";
    timeup.innerHTML = "";
let min=10;
let sec=59;
let time=setInterval(() => {
    sec--;
    if(sec===0){
        min--;
        sec=59;

    }
    if(min===2){
        timer.style.color="red"
    }
    timer.innerHTML=(min<10?"0"+min:min)+ ":" +(sec<10?"0" + sec:sec);
    if(min===0){
        clearInterval(time);
        timer.innerHTML="00:00";
        is_running=false;
        timeup.innerHTML="time is up !"
    }
    
}, 1000);

}
function twenty(){
    if(is_running){
        return
    }
    is_running=true;
    timer.innerHTML="20:00";
    timer.style.color="black";
    timeup.innerHTML = "";
    let min=20;
    let sec=59;
    let time=setInterval(()=>{
        sec--;
        if(sec===0){
            min--;
            sec=59;
        }
        if(min===2){
        timer.style.color="red"
        }
        timer.innerHTML=(min<10?"0"+min:min)+ ":" +(sec<10?"0"+sec:sec);
        if(min===0){
            clearInterval(time);
            timer.innerHTML="00:00"
            is_running=false;
            timeup.innerHTML="time is up !"

        }
    },1000)
    
    
}
function thirty(){
    if(is_running){
        return
    }
    is_running=true;
    timer.innerHTML="30:00";
    timer.style.color="black";
    timeup.innerHTML = "";
    let min=30;
    let sec=59;
    let time=setInterval(function(){
        sec--;
        if(sec===0){
            min--;
            sec=59;
        }
        if(min===2){
            timer.style.color="red"
            }
        timer.innerHTML=(min<10?"0" + min:min)+ ":"+(sec<10?"0" + sec:sec);
        if(min===0){
            clearInterval(time);
            timer.innerHTML="00:00";
            is_running=false;
            timeup.innerHTML="time is up !"
        }

    },1000)
}