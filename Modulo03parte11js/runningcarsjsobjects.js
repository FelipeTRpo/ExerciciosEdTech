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
    let lapTimes = document.querySelector('input[name="tipo-corrida"]:checked').value; //get number of laps
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
    function setCar(carChance,carColor,ownerNameSet){
        let maxSpeedSet =0;
        let minSpeedSet = 0;
        let slipingSet = 0;
        if (carChance<=0.6){
            maxSpeedSet = Math.random() * (CarDatabase.popular.vel_max.max - CarDatabase.popular.vel_max.min) + CarDatabase.popular.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.popular.vel_min.max - CarDatabase.popular.vel_min.min) + CarDatabase.popular.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.popular.derrapagem.max - CarDatabase.popular.derrapagem.min) + CarDatabase.popular.derrapagem.min;
        }
        if (carChance>0.6 & carChance<0.95){
            maxSpeedSet = Math.random() * (CarDatabase.sport.vel_max.max - CarDatabase.sport.vel_max.min) + CarDatabase.sport.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.sport.vel_min.max - CarDatabase.sport.vel_min.min) + CarDatabase.sport.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.sport.derrapagem.max - CarDatabase.sport.derrapagem.min) + CarDatabase.sport.derrapagem.min;
        }
        if (carChance>=0.95){
            maxSpeedSet = Math.random() * (CarDatabase.supersport.vel_max.max - CarDatabase.supersport.vel_max.min) + CarDatabase.supersport.vel_max.min;
            minSpeedSet = Math.random() * (CarDatabase.supersport.vel_min.max - CarDatabase.supersport.vel_min.min) + CarDatabase.supersport.vel_min.min;
            slipingSet = Math.random() * (CarDatabase.supersport.derrapagem.max - CarDatabase.supersport.derrapagem.min) + CarDatabase.supersport.derrapagem.min;
        }
        let theCar = new Car(minSpeedSet,maxSpeedSet,slipingSet,carColor,ownerNameSet);
        return theCar;
    }
    
    let carOne = setCar(carOneChance,'blue','Pedro');
    let carTwo = setCar(carTwoChance,'red','Juca');
    let carThree = setCar(carThreeChance,'pink','Edna');
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
    //vencedor
    if(winLapsOne>winLapsThree & winLapsOne>winLapsTwo){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carOne.ownerName;
    }
    if(winLapsTwo>winLapsThree & winLapsTwo>winLapsOne){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carTwo.ownerName;
    }
    if(winLapsThree>winLapsOne & winLapsThree>winLapsTwo){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carThree.ownerName;
    }
    //mostrando carro sortiado
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
