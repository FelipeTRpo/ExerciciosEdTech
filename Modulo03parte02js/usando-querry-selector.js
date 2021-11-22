function modColor(idTag,newColor){
    let element = document.querySelector(idTag);
    element.style.color = newColor;
}
function modFontSize(idTag,newSize){
    let element = document.querySelector(idTag);
    element.style.fontSize = newSize;
}
function modLineHeight(idTag,newLineHeight){
    let element = document.querySelector(idTag);
    element.style.lineHeight = newLineHeight;
}
function modPaddingTop(idTag,newPaddingTop){
    let element = document.querySelector(idTag);
    element.style.paddingTop = newPaddingTop;
}

modFontSize('#nome','50px');
modColor('#nome', '#00ADB5');
modFontSize('#nome-banda-favorita','50px');
modLineHeight('#nome-banda-favorita','2.5em');
modFontSize('.texto-musicas-favoritas','30px')
modPaddingTop('#texto-banda-favorita', '30px')
modLineHeight('.texto-musicas-favoritas','2.5em');
modLineHeight('#lista-de-musicas','1.5em');
modLineHeight('#texto-banda-favorita','1.5em');
modLineHeight('#link-para-consulta','1.5em');
