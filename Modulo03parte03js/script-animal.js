// function to add ID
function addId(functionTag,idToAdd){
    let element = document.querySelector(functionTag)
    element.id = idToAdd
}
addId('header', 'the-header');
addId('main','the-main');
addId('footer','the-footer');

function createTag(nameTag,textInsideTag,locatedTagId,newTagId){
    let newElement = document.createElement(nameTag);
    newElement.id = newTagId;
    let insideText = document.createTextNode(textInsideTag);
    newElement.appendChild(insideText);
    document.getElementById(locatedTagId).appendChild(newElement);
}
function createImg(imgSrc,locatedTagId,newTagId){
    let newElement = document.createElement('img');
    newElement.id = newTagId;
    newElement.src= imgSrc;
    document.getElementById(locatedTagId).appendChild(newElement);
}
function createA(nameTag,textInsideTag,locatedTagId,newTagId,linkToA){
    let newElement = document.createElement(nameTag);
    newElement.id = newTagId;
    newElement.href= linkToA;
    let insideText = document.createTextNode(textInsideTag);
    newElement.appendChild(insideText);
    document.getElementById(locatedTagId).appendChild(newElement);
}

function fillHeader(headerTag){
    createTag('div',' ',headerTag,'caixa-apresentacao-inicial');
    createTag('div',' ','caixa-apresentacao-inicial','caixa-dados-usuario');
    createTag('p','Felipe Tessarollo Ramos ','caixa-dados-usuario','nome');
    createTag('p','25 anos','caixa-dados-usuario','idade');
    createTag('p','Colatina-ES','caixa-dados-usuario','estado');
    createTag('p','Aspirante a dev','caixa-dados-usuario','asp-dev');
    createTag('figure',' ','caixa-apresentacao-inicial','figure-1');
    createImg('assets/fotofelipe-pretobranco.png','figure-1','foto-felipe')
}   
fillHeader('the-header')

function fillMain(mainTag){
    createTag('h1','O elefante', mainTag, 'nome-animal')
    createTag('figure',' ',mainTag,'figure-2');
    createImg('assets/elephant.jpg','figure-2','img-elephant')
    createTag('p','Elefante é o termo genérico e popular pelo qual são denominados os membros da família Elephantidae, um grupo de mamíferos proboscídeos elefantídeos, de grande porte, do qual há três espécies no mundo atual, duas africanas (Loxodonta sp.) e uma asiática (Elephas sp.). Há ainda os mamutes (Mammuthus sp.), hoje extintos. Até recentemente, acreditava-se que havia apenas duas espécies vivas de elefantes, o elefante-africano e o elefante-asiático, uma espécie menor. Entretanto, estudos recentes de DNA sugerem que havia, na verdade, duas espécies de elefante-africano: Loxodonta africana, da savana, e Loxodonta cyclotis, que vive nas florestas. Os elefantes são os maiores animais terrestres da actualidade, com a massa entre 4 a 6 toneladas e medindo em média quatro metros de altura, podem levantar até 10.000 kg. As suas características mais distintivas são as presas de marfim.',mainTag, 'texto-animal')
    createA('a','Clique aqui para aprender mais sobre elefantes',mainTag,'elefants-a','https://pt.wikipedia.org/wiki/Elefante')
}
fillMain('the-main')

function fillFooter(footerTag){
    createTag('span','© 2021 Felipe Tessarollo Ramos',footerTag,'footer-text')
}
fillFooter('the-footer')