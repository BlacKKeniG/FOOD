export default function timer() {
     //timer
     const millsecAtDay = 86400000;
     const millsecAtHour = 3600000;
     const millsecAtMinut = 60000;
     const millsecAtsecond = 1000;
     const unitsInTimeSpan = 60;
     const hoursAtDay = 24;
     const deadline = '2023-01-01';  
     
     displayTimetoEnd(deadline);
     
     function getTimeRemaining(endTime){
         const timeToEnd = Date.parse(endTime) - new Date();
         const days = Math.floor(timeToEnd / millsecAtDay);
         const hours = Math.floor((timeToEnd / millsecAtHour) % hoursAtDay);
         const minuts = Math.floor((timeToEnd / millsecAtMinut) % unitsInTimeSpan);
         const seconds = Math.floor((timeToEnd / millsecAtsecond) % unitsInTimeSpan);
         
         return {
             totalTimeToEnd: timeToEnd,
             days: days, 
             hours: hours,
             minets: minuts,
             seconds: seconds,
         }; 
     }
     
     function displayTimetoEnd(endTime){
         const daysBlock = document.querySelector('#days');
         const hoursBlock = document.querySelector('#hours');
         const minutsBlock = document.querySelector('#minutes');
         const secondsBlock = document.querySelector('#seconds');
 
         const timerToEndId = setInterval(updateClock, 1000);
         updateClock();
         
         function updateClock(){
             const timeToEnd = getTimeRemaining(endTime);
             if(timeToEnd.totalTimeToEnd > 0) {
                 daysBlock.innerHTML = getZero(timeToEnd.days);
                 hoursBlock.innerHTML = getZero(timeToEnd.hours);
                 minutsBlock.innerHTML = getZero(timeToEnd.minets);
                 secondsBlock.innerHTML = getZero(timeToEnd.seconds);
             } else {
                 daysBlock.innerHTML = getZero(0);
                 hoursBlock.innerHTML = getZero(0);
                 minutsBlock.innerHTML = getZero(0);
                 secondsBlock.innerHTML = getZero(0);
                 clearInterval(timerToEndId);
             }
         }
     } 
 
     function getZero(num) {
         return (num < 10) ? `0${num}` : num;
     }
}

