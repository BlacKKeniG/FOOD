export default function calulator() {
     //calculator

     const result = document.querySelector('.calculating__result span');

     const userData = {
         sex: 'female',
         height: 0,
         weight: 0,
         age: 0,
         ratio: 1.375,
         dailyRate: 0,
     };
 
     function setUserDataToLocalStarage() {
         localStorage.setItem('userData', JSON.stringify(userData));
     }
 
     function initLocalUserSetings(){
         if(localStorage.getItem('userData')) {
             
             Object.assign(userData, JSON.parse(localStorage.getItem('userData')));
             
             document.querySelectorAll('.calculating__choose-item_active').forEach(item => item.classList.remove('calculating__choose-item_active'));
 
             document.querySelector(`[data-gender='${userData.sex}']`).classList.add('calculating__choose-item_active');
             document.querySelector('#height').value = userData.height;
             document.querySelector('#weight').value = userData.weight;
             document.querySelector('#age').value = userData.age;
             document.querySelector(`[data-ratio='${userData.ratio}']`).classList.add('calculating__choose-item_active');
         }
     } initLocalUserSetings();
 
     function calcTotal() {
         if(!userData.sex || !userData.height || !userData.weight || !userData.age || !userData.ratio){
             result.textContent = '____';
             return;
         }
         if(userData.sex === "female") {
             userData.dailyRate = Math.round((447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)) * userData.ratio);
         }
         else if(userData.sex === "male") {
             userData.dailyRate = Math.round((88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age)) * userData.ratio);
         }
         result.textContent = userData.dailyRate;
         setUserDataToLocalStarage();
     } calcTotal();
 
     function removeActivityClassForAll(fildsList, activityСlassName){
         fildsList.forEach(item => {
             item.classList.remove(activityСlassName);
         });
     }
 
     function getSelectedUserData(selectionBlock) {
         const selectionFilds = document.querySelectorAll(`${selectionBlock} > *`);
         selectionFilds.forEach(item => {
 
             item.addEventListener('click', event => {
                 if(event.target.hasAttribute('data-ratio')) {
                     userData.ratio = event.target.getAttribute('data-ratio');
                 } 
                 else if(event.target.hasAttribute('data-gender')) {
                     userData.sex = event.target.getAttribute('data-gender');
                 } 
                 removeActivityClassForAll(selectionFilds, 'calculating__choose-item_active');
                 event.target.classList.add('calculating__choose-item_active');
                 calcTotal();
             });
         });
     }
     
     function getInputUserData(inputBlockParent) {
         const selectionFilds = document.querySelectorAll(`${inputBlockParent} > *`);
         selectionFilds.forEach(item => {
             item.addEventListener('input', event => {
 
                 if(event.target.value.match(/\D/g) || event.target.value < 0) {
                     event.target.style.border = '1px solid red';
                 } else {
                     event.target.style.border = 'none';
                 }
 
                 switch(event.target.getAttribute('id')) {
                     case 'height':
                         userData.height = +event.target.value;
                         console.log(userData.height);
                         break;
                     case 'weight':
                         userData.weight = +event.target.value;
                         console.log(userData.weight);
                         break;
                     case 'age':
                         userData.age = +event.target.value;
                         console.log(userData.age);
                         break;
                 }
                 calcTotal();
             });
         });
     }
 
     getSelectedUserData('#gender');
     getInputUserData('#physical-data');
     getSelectedUserData('#activity-level');
}

