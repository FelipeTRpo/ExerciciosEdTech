// const $ = require( "jquery" )( window );
$("#btn").on("click",requisitionOn)
async function requisitionOn(){
    let reqId = document.getElementById("input").value;
    const firstReq = await (await fetch(`https://rickandmortyapi.com/api/character/${reqId}`)).json();
    const secondReq = await (await fetch(`https://rickandmortyapi.com/api/character/?name=${firstReq.name}`)).json();
    $("#req1").html(JSON.stringify(firstReq));
    $("#req2").html(JSON.stringify(secondReq.results));
}