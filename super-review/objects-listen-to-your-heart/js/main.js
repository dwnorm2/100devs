//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = "black";
stopwatch.size = "large";
stopwatch.time = 0;
stopwatch.brand = "coolBrand";

stopwatch.tellTime = function () {
  console.log(`Current time: ${stopwatch.time}`);
};

stopwatch.addTime = function (time) {
  stopwatch.time += time;
};

stopwatch.subTime = function (time) {
  stopwatch.time -= time;
};

stopwatch.addTime(10);
stopwatch.subTime(3);
stopwatch.tellTime();
