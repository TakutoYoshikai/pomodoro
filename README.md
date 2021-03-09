# pomodoro
The pomodoro program.

### Usage
**install**
```bash
npm install --save TakutoYoshikai/pomodoro
```

**example**
```javascript
const Pomodoro = require("pomodoro");
const pomodoro = new Poromodo(<work time ms>, <break time ms>, {
  work: function() {
    //do something
  },
  takeBreak: function() {
    //do something
  }
});
pomodoro.start();
pomodoro.stop();
```

### License
MIT License
