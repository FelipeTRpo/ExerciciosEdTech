function runGame(){
    //get number of laps
    let lapTimes = document.querySelector('input[name="tipo-corrida"]:checked').value;
    class Car{
        constructor(minSpeed, maxSpeed, sliping, color, ownerName){
            this.minSpeed= minSpeed;
            this.maxSpeed= maxSpeed;
            this.sliping= sliping;
            this.color= color;
            this.ownerName = ownerName;
        }
    }
    let carOne = new Car(150, 230, 0.03, 'blue', 'Pedro');
    let carTwo = new Car(120, 260, 0.05, 'red', 'Juca');
    let carThree = new Car(180, 220, 0.01, 'pink', 'Edna');
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
    if(carOneLapSum>carThreeLapSum & carOneLapSum>carTwoLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carOne.ownerName;
    }
    if(carTwoLapSum>carThreeLapSum & carTwoLapSum>carOneLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carTwo.ownerName;
    }
    if(carThreeLapSum>carOneLapSum & carThreeLapSum>carTwoLapSum){
        document.getElementById('ganhador').innerHTML = "O vencedor é o " + carThree.ownerName;
    }
}