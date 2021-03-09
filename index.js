
const Pomodoro = function(workTimeMs, breakTimeMs, callbacks) {
  const timer1, timer2;
  this.start = function() {
    this.stop();
    timer1 = setInterval(() => {
      callbacks.work();
      timer2 = setTimeout(() => {
        callbacks.takeBreak();
      }, breakTimeMs);
    }, workTimeMs);
  }
  this.stop = function() {
    clearInterval(timer1);
    clearTimeout(timer2);
  }
}

module.exports = Pomodoro;
