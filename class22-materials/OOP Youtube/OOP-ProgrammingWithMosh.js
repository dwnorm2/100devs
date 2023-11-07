// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: () => console.log("draw"),
// };

// circle.draw();

function createCircle(radius) {
  return {
    // radius: radius, (this is old way)
    radius, //new way of saying radius: radius
    draw: () => console.log("draw"),
  };
}

const circle = createCircle(1);

//constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => onsole.log("draw");
}

const another = new Circle(1);
//new creates empty object and sets "this" to point to objcet
