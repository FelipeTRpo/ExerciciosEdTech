let sizeChooser = (function(){
    let theNumber = 16
    return {
        numberUp: function(){
        theNumber ++;
        document.getElementById('historia').style.fontSize = theNumber + 'px';
    },
    
        numberDown: function(){
        theNumber --;
        document.getElementById('historia').style.fontSize = theNumber + 'px';
    }
}
}
)()



