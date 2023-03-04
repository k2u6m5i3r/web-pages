console.log('in JS');

const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', function (event) {
  event.preventDefault();
  console.log(event.key);
  if (event.code.toLowerCase() === 'space') {
    setRandomColors();
  }
})

document.addEventListener('click', function (event) {
  const type = event.target.dataset.type;
  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target
      : event.target.children[0];
    console.log(node);
    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  } else if (type === 'copy') {
    copyToClickboard(event.target.textContent);
  }
})

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return '#' + color;
}

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];
  cols.forEach((col, index) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock');
    const text = col.querySelector('h2');
    const button = col.querySelector('button');
    if (isLocked) {
      colors.push(text.textContent);
      return;
    }
    const color = isInitial
      ? colors[index]
        ? colors[index]
        : chroma.random()
      : chroma.random();
    if (!isInitial) {
      colors.push(color);
    }
    text.textContent = color;
    col.style.background = color;
    setTextColor(text, color);
    setTextColor(button, color);
  })
  updateColorsHash(colors);
}
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

function updateColorsHash(colors = []) {
  document.location.hash = colors.map(col => {
    return col.toString().substring(1);
  })
    .join('-');
}

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash.substring(1).split('-').map(color => `#${color}`);
  }
  return [];
}

setRandomColors(true);


// "#e9e167", "#0079a1", "#382a7c", "#fbef2e", "#2d5f68" 