 const canvas = document.getElementById('canvas');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 const c = canvas.getContext('2d');

// //fillRect(x,y,width,height)
// c.fillStyle = "red"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "yellow"
// c.fillRect(200, 200, 100, 100)
// c.fillStyle = "green"
// c.fillRect(300, 300, 100, 100)

// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue"
// c.stroke();

// // Arc/Circle
// //c.beginPath();
// //c.arc(300,300, 30, 0, Math.PI * 2, false);
// //c.stroke();

// for (let i = 0; i < 276; i++) {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }

class Circle {
    constructor(x,y,xvelocity,yvelocity){
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.yvelocity = yvelocity;
        this.xvelocity = xvelocity;

    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
    }
    update(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.xvelocity = -this.xvelocity;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.yvelocity = -this.yvelocity;
        }
        this.x += this.xvelocity;
        this.y += this.yvelocity;
        
        this.draw()
    }
}
//Create the circle
const circles = [
    new Circle(200,200,30,30),
    new Circle(300,300,10,10),
    new Circle(300,300,20,20),
]


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    circles.forEach((circle) => circle.update());
}
animate();