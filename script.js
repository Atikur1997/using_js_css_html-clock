const secondHand=document.querySelector('.sec-hand')
const mindHand=document.querySelector('.min-hand')
const hourdHand=document.querySelector('.hour-hand')


function setDate(){
   const now = new Date();
   const seconds =now.getSeconds();
   const secondsDegrees= ((seconds/60)*360)+90;
   secondHand.style.transform=`rotate(${secondsDegrees}deg)`
   
   const min = now.getMinutes();
   const minDegrees= ((min/60)*360)+90;
   mindHand.style.transform=`rotate(${minDegrees}deg)`

   const hour = now.getHours();
   const hourDegree= ((hour/60)*360)+90;
   hourdHand.style.transform=`rotate(${hourDegree}deg)`
}

setInterval(setDate,1000)