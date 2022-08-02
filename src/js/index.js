//  index.js

// work for time&date
const time = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();// обновление даты для полуночи
    showGreeting();// обновить время приветствия!
    setTimeout(showTime, 1000);
}
showTime();

  function showDate(){
    const date = new Date();
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('de-De', options);
    dateBlock.textContent = currentDate;
}
showDate();
//END work for time&date
// Приветствие

const nameUserBlock = document.querySelector('.name');        //имя пользователя
function showGreeting(){
  const greetingBlock = document.querySelector('.greeting');  //получаю блок с временим суток
  greetingBlock.textContent = `Good ${getTimeOfDay()}`;
}

function getTimeOfDay(){
  const date = new Date();
  const hours = date.getHours();
  let ans="";
  if(hours >= 6 && hours < 12){
    ans = "morning";
  }
  if(hours >= 12 && hours < 18){
    ans = "afternoon";
  }
  if(hours >= 18 && hours < 24){
    ans = "evening"; 
  }
  if(hours >= 0 && hours < 6){
    ans = "night"; 
  }
  return ans;
}


function setLocalStorage() {
  localStorage.setItem('name', nameUserBlock.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    nameUserBlock.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)
// END приветствие