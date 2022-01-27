console.log("fireball loaded")

const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d");

const fireball = new Image()
fireball.src = "images/fireBall.png"

/*
fireball.addEventListener(
    "load",
    ()=>ctx.drawImage(
    fireball,
    250, 0,
    100, 45,
    0,0,
    100,
    80
    )
)
*/

const ondaEnergetica ={
    img: fireball,
    x: this.x,
    y: this.y,
    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        
        
        if (this.x > canvas.width || this.y > canvas.height) this.x = this.y = 0;
        ctx.drawImage(
            this.img,
            148, 11,
            200, 200,
            this.x, this.y,
            -200, 200
        )
        
            frameNumber = requestAnimationFrame(this.draw.bind(this))
        
    },
}

canvas.addEventListener(
    "mousemove",
    (event)=> {
        ondaEnergetica.x = event.clientX;
        ondaEnergetica.y = event.clientY;
        ondaEnergetica.draw()
    }
)

//fireball.addEventListener("load",()=>ondaEnergetica.draw())
/*
canvas.addEventListener(
    "click",
    ()=> {
        ondaEnergetica.animating = !ondaEnergetica.animating


        ondaEnergetica.draw()}
)
*/