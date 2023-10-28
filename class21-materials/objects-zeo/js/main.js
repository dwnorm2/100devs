//Create a stopwatch object that has four properties and three methods
let stopWatch = {};
stopWatch.currentTime = 3;
stopWatch.color = "red";
stopWatch.shape = "circle";
stopWatch.timeZone = "CST";

stopWatch.tellTime = function () {
  console.log(`time is ${stopWatch.currentTime}`);
};

stopWatch.tellTime();

stopWatch.showTimeZone = function () {
  console.log(`time zone is ${stopWatch.timeZone}`);
};

stopWatch.showTimeZone();

stopWatch.add5Seconds = function () {
  stopWatch.currentTime += 5;
  console.log(stopWatch.currentTime);
};

stopWatch.add5Seconds();
stopWatch.currentTime;
