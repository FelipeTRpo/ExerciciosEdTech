const playerObjects = [
    {player: "Pedro",expPlayer:0,lvlPlayer:0},
    {player: "Juca",expPlayer:0,lvlPlayer:0},
    {player: "Edna",expPlayer:0,lvlPlayer:0}
];
const CarDatabase = {
    "popular": {
        "vel_max": {"min": 180, "max": 200}, 
        "vel_min": {"min": 110, "max": 130}, 
        "derrapagem": {"min": 0.03, "max": 0.04}
      },
      "sport": {
        "vel_max": {"min": 195, "max": 215}, 
        "vel_min": {"min": 125, "max": 145}, 
        "derrapagem": {"min": 0.02, "max": 0.03}
      },
      "supersport": {
        "vel_max": {"min": 210, "max": 230}, 
        "vel_min": {"min": 140, "max": 160}, 
        "derrapagem": {"min": 0.01, "max": 0.0175}
      }
}
function runGame(){
    console.log(playerObjects[0].lvlPlayer);
    console.log(playerObjects[0].player);
    let lapTimes = document.querySelector('input[name="tipo-corrida"]:checked').value; //get number of laps
    // set points for each tipe of run
    let pointsFirst = 0;
    let pointsSecond = 0;
    let pointsThird = 0;
    if (lapTimes == 10){
        pointsFirst = 200;
        pointsSecond = 120;
        pointsThird = 50;
    }
    if (lapTimes == 70){
        pointsFirst = 220;
        pointsSecond = 130;
        pointsThird = 75;
    }
    if (lapTimes == 160){
        pointsFirst = 250;
        pointsSecond = 150;
        pointsThird = 90;
    }
    
    let carOneChance = Math.random();
    let carTwoChance = Math.random();
    let carThreeChance = Math.random();
    let winLapsOne = 0;
    let winLapsTwo = 0;
    let winLapsThree = 0;
    class Car{
        constructor(minSpeed, maxSpeed, sliping, color, ownerName){
            this.minSpeed= minSpeed;
            this.maxSpeed= maxSpeed;
            this.sliping= sliping;
            this.color= color;
            this.ownerName = ownerName;
        }
    }
    function setCar(carChance,carColor,ownerNameSet,playerLvl){
        let maxSpeedSet =0;
        let minSpeedSet = 0;
        let slipingSet = 0;
        if (carChance<=0.6){
            maxSpeedSet = Math.random() * (CarDatabase.popular.vel_max.max - CarDatabase.popular.vel_max.min) + CarDatabase.popular.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.popular.vel_min.max - CarDatabase.popular.vel_min.min) + CarDatabase.popular.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.popular.derrapagem.max - CarDatabase.popular.derrapagem.min) + CarDatabase.popular.derrapagem.min;
            maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
            minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
        }
        if (carChance>0.6 & carChance<0.95){
            maxSpeedSet = Math.random() * (CarDatabase.sport.vel_max.max - CarDatabase.sport.vel_max.min) + CarDatabase.sport.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.sport.vel_min.max - CarDatabase.sport.vel_min.min) + CarDatabase.sport.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.sport.derrapagem.max - CarDatabase.sport.derrapagem.min) + CarDatabase.sport.derrapagem.min;
            maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
            minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
        }
        if (carChance>=0.95){
            maxSpeedSet = Math.random() * (CarDatabase.supersport.vel_max.max - CarDatabase.supersport.vel_max.min) + CarDatabase.supersport.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.supersport.vel_min.max - CarDatabase.supersport.vel_min.min) + CarDatabase.supersport.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.supersport.derrapagem.max - CarDatabase.supersport.derrapagem.min) + CarDatabase.supersport.derrapagem.min;
            maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
            minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
        }
        let theCar = new Car(minSpeedSet,maxSpeedSet,slipingSet,carColor,ownerNameSet);
        return theCar;
    }
    
    let carOne = setCar(carOneChance,'blue','Pedro',playerObjects[0].lvlPlayer);
    let carTwo = setCar(carTwoChance,'red','Juca',playerObjects[1].lvlPlayer);
    let carThree = setCar(carThreeChance,'pink','Edna',playerObjects[2].lvlPlayer);
    
    for(let i = 0;i<lapTimes;i++){
        let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
        let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
        let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;
        carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
        carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
        carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;
        if(carOneSpeed>carThreeSpeed & carOneSpeed>carTwoSpeed){
            winLapsOne++;
        }
        if(carTwoSpeed>carThreeSpeed & carTwoSpeed>carOneSpeed){
           winLapsTwo++;
        }
        if(carThreeSpeed>carOneSpeed & carThreeSpeed>carTwoSpeed){
           winLapsThree++;
        }
    }
    while(winLapsOne == winLapsThree || winLapsOne == winLapsTwo || winLapsTwo == winLapsThree ){
        let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
        let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
        let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;
        carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
        carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
        carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;
        if(carOneSpeed>carThreeSpeed & carOneSpeed>carTwoSpeed){
            winLapsOne++;
        }
        if(carTwoSpeed>carThreeSpeed & carTwoSpeed>carOneSpeed){
           winLapsTwo++;
        }
        if(carThreeSpeed>carOneSpeed & carThreeSpeed>carTwoSpeed){
           winLapsThree++;
        }
    }
    //vencedor
    if(winLapsOne>winLapsThree & winLapsOne>winLapsTwo){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carOne.ownerName+" com "+winLapsOne+" voltas em primeiro lugar";
        playerObjects[0].expPlayer+= pointsFirst;
        if(winLapsTwo>winLapsThree){
            playerObjects[1].expPlayer+= pointsSecond;
            playerObjects[2].expPlayer+= pointsThird;
        }else{
            playerObjects[2].expPlayer+= pointsSecond;
            playerObjects[1].expPlayer+= pointsThird;
        }
    }
    if(winLapsTwo>winLapsThree & winLapsTwo>winLapsOne){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carTwo.ownerName+" com "+winLapsTwo+" voltas em primeiro lugar";
        playerObjects[1].expPlayer+= pointsFirst;
        if(winLapsOne>winLapsThree){
            playerObjects[0].expPlayer+= pointsSecond;
            playerObjects[2].expPlayer+= pointsThird;
        }else{
            playerObjects[2].expPlayer+= pointsSecond;
            playerObjects[0].expPlayer+= pointsThird;
        }
    }
    if(winLapsThree>winLapsOne & winLapsThree>winLapsTwo){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carThree.ownerName+" com "+winLapsThree+" voltas em primeiro lugar";
        playerObjects[2].expPlayer+= pointsFirst;
        if(winLapsTwo>winLapsOne){
            playerObjects[1].expPlayer+= pointsSecond;
            playerObjects[0].expPlayer+= pointsThird;
        }else{
            playerObjects[0].expPlayer+= pointsSecond;
            playerObjects[1].expPlayer+= pointsThird;
        }
    }
    function lvlUp(char){
        if(char.expPlayer>=450 & char.lvlPlayer<10){
            char.expPlayer -= 450;
            char.lvlPlayer++
        }else if (char.lvlPlayer==10 ){
            char.expPlayer = 450;
            char.lvlPlayer = 10
        }
    }
    playerObjects.forEach(lvlUp)
    //mostrando lvl e xp do jogador
    document.getElementById('jogador-um-xp').innerHTML = carOne.ownerName + " está nível "+playerObjects[0].lvlPlayer+" com "+playerObjects[0].expPlayer+" de experiencia, faltando "+ (450-playerObjects[0].expPlayer)+" de experiencia para o próximo nível";
    document.getElementById('jogador-dois-xp').innerHTML = carTwo.ownerName + " está nível "+playerObjects[1].lvlPlayer+" com "+playerObjects[1].expPlayer+" de experiencia, faltando "+ (450-playerObjects[1].expPlayer)+" de experiencia para o próximo nível";
    document.getElementById('jogador-tres-xp').innerHTML = carThree.ownerName + " está nível "+playerObjects[2].lvlPlayer+" com "+playerObjects[2].expPlayer+" de experiencia, faltando "+ (450-playerObjects[2].expPlayer)+" de experiencia para o próximo nível";
    //mostrando carro sorteado
        //carro1
    if (carOneChance<=0.6){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro popular";
    }
    if (carOneChance>0.6 & carOneChance<0.95){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Sport";
    }
    if (carOneChance>=0.95){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Super Sport";
    }
        //carro2
    if (carTwoChance<=0.6){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro popular";
    }
    if (carTwoChance>0.6 & carTwoChance<0.95){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Sport";
    }
    if (carTwoChance>=0.95){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Super Sport";
    }
        //carro3
    if (carThreeChance<=0.6){
        document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro popular";
    }
    if (carThreeChance>0.6 & carThreeChance<0.95){
        document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro Sport";
    }
    if (carThreeChance>=0.95){
        document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro Super Sport";
    }

}
