//your JS code here. If required.
let timerDisplay=document.getElementById("timer");
 let currentDate= new Date();

setInterval(
	 function (){
       currentDate=new Date();
		 timerDisplay.innerHTML=currentDate.toLocaleString();
	 },1000)

	 

 