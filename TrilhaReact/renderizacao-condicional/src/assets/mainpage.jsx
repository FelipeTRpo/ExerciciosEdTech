import React from "react";


// async function fetchChars(){
//     let characters = 0;
//     fetch(`https://rickandmortyapi.com/api/character`).then(resp=> resp.json()).then( resp=> {callbackone(resp)})
//     function callbackone(r){
//         characters = r
//     }
//     console.log(characters)
//     return characters
// }

const char = await(await fetch(`https://rickandmortyapi.com/api/character`)).json()


// const char = fetchChars()
console.log(char)
export default function Mainpage(){

    return(
    <div>
    <h1>Rick and morty characters</h1>
    
    {}
    
    </div>)
    
}