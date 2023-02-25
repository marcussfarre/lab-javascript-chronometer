class Chronometer {
  currentTime;
  intervalId;

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    console.log('hey');
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);
      callback();
    }, 1000);
  }

  getMinutes() {
    console.log(this.currentTime  === 0 ? 0 : Math.floor(this.currentTime / 60));
    return this.currentTime === 0 ? 0 : Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime === 0 ? 0 : this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    return stringValue.length === 1 ? `0${stringValue}` : stringValue;
  }

  stop() {
    this.intervalId = clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    document.getElementById('minDec').innerHTML = 0;
    document.getElementById('minUni').innerHTML = 0;
    document.getElementById('secDec').innerHTML = 0;
    document.getElementById('secUni').innerHTML = 0;
    document.getElementById('milDec').innerHTML = 0;
    document.getElementById('milUni').innerHTML = 0;
    document.getElementById('splits').innerHTML = '';
  }

  split() {
    return `${computeTwoDigitNumber(getMinutes())}:${computeTwoDigitNumber(getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
