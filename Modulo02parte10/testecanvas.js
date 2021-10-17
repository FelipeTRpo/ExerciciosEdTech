var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var windowheight = 600;
var windowwidth = 800;

var uppressed1 =false;
var downpressed1=false;
var uppressed2 =false;
var downpressed2=false;
canvas.width = windowwidth;
canvas.height = windowheight;

function drawborder(){
    context.beginPath();
    context.moveTo(0,0);
    context.lineWidth=3;
    context.lineTo(windowwidth,0);
    context.lineTo(windowwidth,windowheight);
    context.lineTo(0,windowheight);
    context.lineTo(0,0);
    context.strokeStyle="black";
    context.stroke();
}
class Score{
    constructor(xpos, ypos, radius, color, inicialscore){
        this.xpos= xpos;
        this.ypos= ypos;
        this.radius= radius;
        this.color= color;
        this.score= inicialscore;

    }
    draw(context){
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillStyle = this.color;
        context.fillText(this.score, this.xpos, this.ypos);
        context.strokeStyle = this.color;
        context.fillStyle= this.color;
        context.arc(this.xpos, this.ypos, this.radius,0,Math.PI *2,false);
        context.stroke();
        context.closePath();
    }
    update(){
        this.draw(context);
    }
}
//Desenhar a bola
class Ball{
    constructor(xpos, ypos, radius, color, speed){
        this.xpos= xpos;
        this.ypos= ypos;
        this.radius= radius;
        this.color= color;
        this.speed= speed;

        this.dx= 2*speed;
        this.dy= 1*speed;

    }
    draw(context){
        context.clearRect(0,0,windowwidth,windowheight);
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle= this.color;
        context.arc(this.xpos, this.ypos, this.radius,0,Math.PI *2,false);
        context.fill();
        context.closePath();
    }
//movimento e colisao da bola
    update(){
        
        if(this.xpos +this.dx > windowwidth-this.radius ){
            this.xpos= windowwidth/2;
            this.ypos= windowheight/2;
            this.dx= this.speed*2;
            this.dy= this.speed;
            scorep2.score+=1
        }
        if( this.xpos + this.dx < this.radius ){
            this.xpos= windowwidth/2;
            this.ypos=windowheight/2;
            this.dx= this.speed*2;
            this.dy= this.speed;
            scorep1.score+=1
        }

        if(this.ypos +this.dy > windowheight-this.radius ){
            this.dy= -this.dy;
            if(this.dy>0){
                this.dy += 1;

            }else{
                this.dy+= -1;
            }
        }
        if( this.ypos + this.dy < this.radius ){
            this.dy= -this.dy;
            if(this.dy>0){
                this.dy += 1;

            }else{
                this.dy+= -1;
            }
            
        }
        this.draw(context);
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}
//Desenhar o jogador 1
class Playerblock{
    constructor(xpos, ypos, height, width, color, speed){
        this.xpos= xpos;
        this.ypos= ypos;
        this.height = height;
        this.width = width;
        this.color= color;
        this.speed= speed;
        this.dx= 1*speed;
        this.dy= 1*speed;


        
    }
    draw(context){
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle= this.color;
        context.moveTo(this.xpos,this.ypos);
        context.lineTo(this.xpos+this.width,this.ypos);
        context.lineTo(this.xpos+this.width,this.ypos+this.height);
        context.lineTo(this.xpos,this.ypos+this.height);
        context.lineTo(this.xpos,this.ypos);
        context.fill();
        context.closePath();
    }
    //controle e colisao do jogador
    update(){
        this.draw(context);
        if(this.ypos+this.height >windowheight ){
            this.ypos = windowheight-this.height-this.speed
        }
        if(this.ypos <0){
            this.ypos = this.ypos +this.speed
        }
    }
}

//funcionamento
let firstball = new Ball(400, 300, 10, "black", 3);
let player1 = new Playerblock(20, 255, 90, 10, "blue", 8);
let player2 = new Playerblock(780, 255, 90, 10, "red", 8);
let scorep1 = new Score(350, 40, 30, "blue", 0);
let scorep2 = new Score(450, 40, 30, "red", 0);
firstball.draw(context);
player1.draw(context);
player2.draw(context);
scorep1.draw(context);
scorep2.draw(context);

let updatecanvas = function(){
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
//controle de pressionamento de teclas para os jogadores
function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        uppressed1 = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downpressed1 = true;
    }
    if(e.key == "8" || e.key == "8") {
        uppressed2 = true;
    }
    else if(e.key == "2" || e.key == "2") {
        downpressed2 = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        uppressed1 = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downpressed1 = false;
    }
    if(e.key == "8" || e.key == "8") {
        uppressed2 = false;
    }
    else if(e.key == "2" || e.key == "2") {
        downpressed2 = false;
    }
}
    //update dos objetos
    requestAnimationFrame(updatecanvas);

    firstball.update();
    scorep1.update();
    scorep2.update();
    player1.update();
    player2.update();
    drawborder();

    //movimento player
    if(uppressed1) {
        player1.ypos -= player1.speed;
    }
    else if(downpressed1) {
        player1.ypos += player1.speed;
    }
    if(uppressed2) {
        player2.ypos -= player2.speed;
    }
    else if(downpressed2) {
        player2.ypos += player2.speed;
    }
    //colisao bola e player
    if(firstball.xpos > player1.xpos && firstball.xpos < player1.xpos+player1.width && firstball.ypos > player1.ypos && firstball.ypos< player1.ypos+player1.height ){
        firstball.dx= -firstball.dx;
        if(firstball.dx>0){
            firstball.dx += 1;

        }else{
            firstball.dx+= -1;
        }
    }
    if(firstball.xpos> player2.xpos && firstball.xpos< player2.xpos+player2.width && firstball.ypos > player2.ypos && firstball.ypos< player2.ypos+player2.height ){
        firstball.dx= -firstball.dx;
        if(player2.dx>0){
            firstball.dx += 1;

        }else{
            firstball.dx+= -1;
        }
    }
}

updatecanvas();