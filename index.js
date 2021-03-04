function start() {
  setInterval(() => {
    console.log("work!");
    setInterval(() => {
      console.log("take a break!");
    }, 25 * 60 * 1000);
  }, 30 * 60 * 1000);
}

start();
