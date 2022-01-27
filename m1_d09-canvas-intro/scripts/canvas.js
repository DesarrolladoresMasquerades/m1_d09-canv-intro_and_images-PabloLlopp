const canvas = document.querySelector("canvas")

canvas.width = 600;
canvas.height = 300;

const ctx = canvas.getContext("2d")





setInterval(() => {
    ctx.fillStyle = "pink"
    ctx.fillRect (100, 100, 100, 100)
}, 1000);

setInterval(() => {
    ctx.strokeStyle = "white"
    ctx.beginPath();
    for (let i = 0; i < 100; i++){
        for (let j= 0;j < 100; j++){
    let move = ctx.arc(Math.random() * 50 * i * j, 50 * j, 30, 0, Math.PI * 2, false)}}
    ctx.stroke()
}, 1000);

setInterval(() => {
    ctx.fillStyle = "black"
    ctx.fillRect (0, 0, 100, 100)
    ctx.fillRect (0, 100, 100, 100)
    ctx.fillRect (0, 200, 100, 100)
    ctx.fillRect (100, 200, 100, 100)
    ctx.fillStyle = "lightblue"
    ctx.fillRect (100, 0, 100, 100)
    ctx.fillRect (200, 0, 100, 100)
    ctx.fillRect (200, 200, 100, 100)
    ctx.fillRect (200, 100, 100, 100)
}, 10);

setInterval(() => {
    ctx.fillStyle = "pink"
    ctx.fillRect (300, 0, 300, 300)
}, 10);




function delLef() {
    
}



function right(){ 
setInterval(() => {
    ctx.fillStyle = "pink"
    ctx.fillRect (400, 100, 100, 100)
}, 1000);

setInterval(() => {
    ctx.strokeStyle = "white"
    ctx.beginPath();
    for (let i = 0; i < 100; i++){
        for (let j= 0;j < 100; j++){
    let move = ctx.arc(Math.random() * 50 * i * j, 50 * j, 30, 0, Math.PI * 2, false)}}
    ctx.stroke()
}, 1000);

setInterval(() => {
    ctx.fillStyle = "black"
    ctx.fillRect (300, 0, 100, 100)
    ctx.fillRect (400, 0, 100, 100)
    ctx.fillRect (500, 0, 100, 100)
    ctx.fillRect (300, 100, 100, 100)
    ctx.fillStyle = "lightblue"
    ctx.fillRect (300, 200, 100, 100)
    ctx.fillRect (400, 200, 100, 100)
    ctx.fillRect (500, 200, 100, 100)
    ctx.fillRect (500, 100, 100, 100)
}, 10);}

const btn = document.getElementById("btn")

btn.addEventListener(
    "click",
    right,
    delLef
)

/*
setInterval(() => {
    for (let i = 0; i <100; i++){
        if (i % 2 === 0) left()
        if (i % 2 !== 0) right()
    }
},  1000);
*/

/*
ctx.fillStyle = "darkred"
ctx.fillRect (100, 100, 100, 100)
ctx.fillRect (200, 200, 100, 100)
ctx.fillRect (300, 300, 100, 100)
ctx.fillRect (300, 100, 100, 100)
ctx.fillRect (100, 300, 100, 100)

ctx.fillStyle = "pink"
ctx.fillRect (90, 100, 10, 10)
ctx.fillRect (80, 110, 20, 20)
ctx.fillRect (70, 130, 30, 30)
ctx.fillRect (60, 160, 40, 40)
ctx.fillRect (60, 200, 40, 40)
ctx.fillRect (60, 240, 40, 40)
ctx.fillRect (60, 260, 40, 40)
ctx.fillRect (60, 300, 40, 40)
ctx.fillRect (70, 340, 30, 30)
ctx.fillRect (80, 370, 20, 20)
ctx.fillRect (90, 390, 10, 10)

ctx.fillRect (40, 180, 40, 40)
ctx.fillRect (40, 220, 40, 40)
ctx.fillRect (40, 260, 40, 40)
ctx.fillRect (20, 240, 40, 40)
ctx.fillRect (20, 200, 40, 40)
ctx.fillRect (0, 220, 40, 40)



ctx.fillRect (0, 400, 100, 100)
ctx.fillRect (100, 0, 100, 100)
ctx.fillRect (200, 0, 100, 100)
ctx.fillRect (300, 0, 100, 100)
ctx.fillRect (400, 0, 100, 100)
ctx.fillRect (400, 100, 100, 100)
ctx.fillRect (400, 200, 100, 100)
ctx.fillRect (400, 300, 100, 100)
ctx.fillRect (400, 400, 100, 100)
ctx.fillRect (100, 400, 100, 100)
ctx.fillRect (200, 400, 100, 100)
ctx.fillRect (300, 400, 100, 100)


//line




//Arc / Circle


setInterval(() => {
    for (let i = 0; i < Math.random() * 600; i++) {
        for (let j = 0; j < Math.random() * 500; j++) {
   
   ctx.strokeStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' + (Math.floor(255 - 42.5 * j)) + ', 100)';
   
   ctx.beginPath();
   ctx.arc(Math.random() * 300, Math.random() * 300, Math.random() * 30, 0,  Math.PI * 2, false)
   ctx.stroke()
}}
}, 500);

*/