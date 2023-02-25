const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split('');
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split('');
  
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split('');
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split('');
  setSplitBtn(minutes, seconds);
}

function clearSplits() {
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn(minutes, seconds) {
  const list = document.createElement('li');
  list.appendChild(document.createTextNode(`${minutes[0]}${minutes[1]}:${seconds[0]}${seconds[1]}`));
  splitsElement.append(list);
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (!chronometer.intervalId) {
    chronometer.start(printTime);
    setStopBtn();
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (chronometer.intervalId) {
    printSplit();
  } else {
    chronometer.reset();
  }
});
