function runGame(){
    //get number of laps
    let lapTimes = document.querySelector('input[name="tipo-corrida"]:checked').value;
    let carOneChance = Math.random();
    let carTwoChance = Math.random();
    let carThreeChance = Math.random();
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
            maxSpeedSet = Math.random() * (200 - 180) + 180;
            minSpeedSet = Math.random() * (130 - 110) + 110;
            slipingSet = Math.random() * (0.04 - 0.03) + 0.03;
        }
        if (carChance>0.6 & carChance<0.95){
            maxSpeedSet = Math.random() * (215 - 195) + 195;
            minSpeedSet = Math.random() * (145 - 125) + 125;
            slipingSet = Math.random() * (0.03 - 0.02) + 0.02;
        }
        if (carChance>=0.95){
            maxSpeedSet = Math.random() * (230 - 210) + 210
            minSpeedSet = Math.random() * (160 - 140) + 140;
            slipingSet = Math.random() * (0.0175 - 0.01) + 0.01;
        }
        let theCar = new Car(minSpeedSet,maxSpeedSet,slipingSet,carColor,ownerNameSet);
        return theCar;
    }
    
    let carOne = setCar(carOneChance,'blue','Pedro');
    let carTwo = setCar(carTwoChance,'red','Juca');
    let carThree = setCar(carThreeChance,'pink','Edna');
    let carOneLapSum= 0;
    let carTwoLapSum= 0;
    let carThreeLapSum= 0;
    for(let i = 0;i<lapTimes;i++){
        let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
        let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
        let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;
        carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
        carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
        carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;
        carOneLapSum += carOneSpeed;
        carTwoLapSum += carTwoSpeed;
        carThreeLapSum += carThreeSpeed;
    }
    //vencedor
    if(carOneLapSum>carThreeLapSum & carOneLapSum>carTwoLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carOne.ownerName;
    }
    if(carTwoLapSum>carThreeLapSum & carTwoLapSum>carOneLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carTwo.ownerName;
    }
    if(carThreeLapSum>carOneLapSum & carThreeLapSum>carTwoLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carThree.ownerName;
    }
    //mostrando carro sortiado
    if (carOneChance<=0.6){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro popular";
    }
    if (carOneChance>0.6 & carOneChance<0.95){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Sport";
    }
    if (carOneChance>=0.95){
        document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Super Sport";
    }

    if (carTwoChance<=0.6){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro popular";
    }
    if (carTwoChance>0.6 & carTwoChance<0.95){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Sport";
    }
    if (carTwoChance>=0.95){
        document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Super Sport";
    }

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
