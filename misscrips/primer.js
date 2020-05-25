// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'imagene/logo.png') {
    myImage.setAttribute ('src','imagene/logo2.png');
  } else {
    myImage.setAttribute ('src','imagene/logo.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'bienvenid@ a mi pagina, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'bienvenid@ a mi pagina, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
