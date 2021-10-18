var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var windowheight = 600;
var windowwidth = 800;

var uppressed1 =false;
var downpressed1=false;
var uppressed2 =false;
var downpressed2=false;
var botpressed1=false;
var botpressed2=false;
var disablebot =0;
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
            this.dx= this.speed*5*(Math.random()-0.5);
            this.dy= this.speed*(Math.random()-0.5);
            scorep1.score+=1;
 
            if(this.dy>0){
                this.dy += this.speed;
            }else{
                this.dy -= this.speed;
                
            }
            if(this.dx>0){
                this.dx += this.speed;
            }else{
                this.dx -= this.speed;
            }
        }
        if( this.xpos + this.dx < this.radius ){
            this.xpos= windowwidth/2;
            this.ypos=windowheight/2;
            this.dx= this.speed*2*(Math.random()-0.5);
            this.dy= this.speed*(Math.random()-0.5);
            scorep2.score+=1 
            if(this.dy>0){
                this.dy += this.speed;
            }else{
                this.dy -= this.speed;
                
            }
            if(this.dx>0){
                this.dx += this.speed;
            }else{
                this.dx -= this.speed;
            }
        
        }

        if(this.ypos +this.dy > windowheight-this.radius ){
            this.dy= -this.dy;
            if(this.dy>0){
                this.dy += 0.5;
            }else{
                this.dy+= -0.5;
            }
            if(this.dx>0){
                this.dx+=1;

            }else{
                this.dx-=1;
            }
        }
        if( this.ypos + this.dy < this.radius ){
            this.dy= -this.dy;
            if(this.dy>0){
                this.dy += 0.5;                
            }else{
                this.dy+= -0.5;
            }
            if(this.dx>0){
                this.dx+=1;

            }else{
                this.dx-=1;
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
let player1 = new Playerblock(20, 255, 90, 10, "blue", 10);
let player2 = new Playerblock(780, 255, 90, 10, "red", 10);
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
    if(e.key == "w" || e.key == "w") {
        uppressed1 = true;
    }
    else if(e.key == "s" || e.key == "s") {
        downpressed1 = true;
    }
    if(e.key == "i" || e.key == "i") {
        uppressed2 = true;
    }
    else if(e.key == "k" || e.key == "k") {
        downpressed2 = true;
    }
    if(e.key == "b" || e.key == "b") {
        botpressed1 = true;
    }
    if(e.key == "n" || e.key == "n") {
        botpressed2 = true;
    }


}
function keyUpHandler(e) {
    if(e.key == "w" || e.key == "w") {
        uppressed1 = false;
    }
    else if(e.key == "s" || e.key == "s") {
        downpressed1 = false;
    }
    if(e.key == "i" || e.key == "i") {
        uppressed2 = false;
    }
    else if(e.key == "k" || e.key == "k") {
        downpressed2 = false;
    }
    if(e.key == "b" || e.key == "b") {
        botpressed1 = false;
    }
    if(e.key == "n" || e.key == "n") {
        botpressed2 = false;
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
    if(firstball.xpos-firstball.dx> player1.xpos && firstball.xpos< player1.xpos-firstball.dx+player1.width && firstball.ypos-firstball.dy > player1.ypos && firstball.ypos-firstball.dy< player1.ypos+player1.height ){
        firstball.dx= -firstball.dx;
        if(firstball.dx>0){
            firstball.dx += 1;

        }else{
            firstball.dx+= -1;
        }
    }
    if(firstball.xpos+firstball.dx> player2.xpos && firstball.xpos< player2.xpos+firstball.dx+player2.width && firstball.ypos+firstball.dy > player2.ypos && firstball.ypos+firstball.dy< player2.ypos+player2.height ){
        firstball.dx= -firstball.dx;
        if(player2.dx>0){
            firstball.dx += 1;

        }else{
            firstball.dx+= -1;
        }
    }
    //bot do player 2
    function p2bot(){
        
        if(firstball.xpos>250 && disablebot==1){
            if(player2.ypos+player2.height/2 != firstball.ypos){
                if(player2.ypos+player2.height/2 > firstball.ypos){
                    player2.ypos-= player2.speed;
                }else{
                    player2.ypos += player2.speed;
                }
            }
            
        }
        //desabilitar o bot
        if(botpressed1) {
            disablebot=1;
            player2.speed=6;
        }
        if(botpressed2){
            disablebot=0;
            player2.speed=10;
        }
    }
    p2bot(); 
}

updatecanvas();