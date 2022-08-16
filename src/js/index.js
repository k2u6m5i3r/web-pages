//  index.js
// получаю элемены для работы

// END получаю элемены для работы
// work for time&date
const time = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
  // элемент для фона
const bg = document.querySelector('body');
  // элкмент для слайдера следующий
const slideNext = document.querySelector('.slide-next');
  // элкмент для слайдера предыдущий
const slidePrev = document.querySelector('.slide-prev'); 

// console.log(slidePrev);

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


// фоновое изображение замена
let randomNum = 1;
function getRandomNum(){
  randomNum = Math.ceil(Math.random()*20);
}
function setBg(){
  //https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/night/03.jpg
  //getRandomNum();//получаю случайное число
  let url = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"+getTimeOfDay()+"/"+String(randomNum).padStart(2, "0")+".jpg')";
  bg.style.backgroundImage = url;
  const img = new Image();
  img.src = url; 
  img.onload = () => {      
    body.style.backgroundImage = `url(${url})`;
  }; 
}
setBg();
function getSlideNext(){
  if(randomNum == 20){
    randomNum = 1;
  } else {
    randomNum++;
  }
  setBg();
}
function getSlidePrev(){
  if(randomNum == 1){
    randomNum = 20;
  } else {
    randomNum--;
  }
  setBg();
}  
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// END // фоновое изображение замена

