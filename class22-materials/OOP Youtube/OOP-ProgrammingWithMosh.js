function Stopwatch() {
  //private variables
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("SW already started");
    }

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("SW has not started");
    }

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    //divided by 1000 to convert ms to seconds
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  //read only property
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
