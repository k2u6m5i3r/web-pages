//  index.js

// work for time&date
const time = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
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
