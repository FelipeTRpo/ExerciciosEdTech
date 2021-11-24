let caixaCount = 0;
const checkstarId = ['estrela1','estrela2','estrela3','estrela4','estrela5'] 
const labelStarId = ['label1','label2','label3','label4','label5',]
const svgstarId = ['svg1','svg2','svg3','svg4','svg5']
const starCount = ['assets/estrela-1.png','assets/estrela-2.png','assets/estrela-3.png','assets/estrela-4.png','assets/estrela-5.png',]

let initialChecked = document.getElementById(checkstarId[0]);
initialChecked.checked = true;



for(let i=0; i<5; i++ ){
    let element= document.getElementById(checkstarId[i])
    element.checked =true;
    let label = document.getElementById(svgstarId[i])
    label.setAttribute("fill","yellow");
    
}



function setStar(starNum){
    
    for(let i=0; i<5; i++ ){
        let label =document.getElementById(svgstarId[i])
        let element= document.getElementById(checkstarId[i])
        if (i<=starNum){
            element.checked =true;
            label.setAttribute("fill","yellow");
        }else{
            element.checked = false;
            label.setAttribute("fill","white");
        }
    }
    
}

function recValue(){
    let checkedCounter = -1;
    for(let i=0;i<5;i++){
        let element= document.getElementById(checkstarId[i])
        if(element.checked==true){
            checkedCounter++;
        }
    }
    let caixa = document.createElement('div');
    caixa.classList.add('classe-caixa-resposta');
    caixa.id = "caixaResposta" + caixaCount;
    //criação nome
    let nameElement = document.querySelector('#nome-usuario');
    let textName = nameElement.value;
    let newElementName = document.createElement('p');
    let insideTextName = document.createTextNode('Nome: '+textName );
    newElementName.appendChild(insideTextName);
    caixa.appendChild(newElementName);
    //criação estrela
    let newImg = document.createElement('img');
    newImg.src= starCount[checkedCounter];
    caixa.appendChild(newImg)
    //criação comentario
    let avaliationElement = document.querySelector('#avaliacao');
    let textAvaliation = avaliationElement.value;
    let newElementComent = document.createElement('p');
    let insideText = document.createTextNode(textAvaliation );
    newElementComent.appendChild(insideText);

    caixa.appendChild(newElementComent);
    document.getElementById('respostas').appendChild(caixa);

    caixaCount++;
}

