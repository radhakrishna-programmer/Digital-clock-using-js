let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let session=document.getElementById("session");
let x=setInterval(()=>{
    let time=new Date();
    hours.innerHTML=(time.getHours()>12?time.getHours()-12:"");
    minutes.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
    seconds.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
    session.innerHTML=(time.getHours()>12?"PM":"AM");
},1000);

