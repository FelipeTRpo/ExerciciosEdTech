let moedaEscolhida = "";

$.ajax({url:"https://economia.awesomeapi.com.br/json/all"}).done((data)=>{
    Object.entries(data).forEach((obj)=>{
        $("#select-moeda").append(`<option value="${obj[0]}">${obj[0]}</option>`)
    })
})
$("#select-moeda").on("change",function(){
    moedaEscolhida = $("#select-moeda").val();
    if(moedaEscolhida === "none"){
        $("#cotacao-atual").html("Escolha uma moeda.")
        return false;
    }
    $.ajax({url:`https://economia.awesomeapi.com.br/json/${moedaEscolhida}-BRL`}).done((data)=>{
    $("#cotacao-atual").html(`Cotação atual: ${Object.values(data)[0].code} - ${Object.values(data)[0].codein}<br/> Preço de compra:${Object.values(data)[0].ask}.<br/> Preço de venda: ${Object.values(data)[0].bid}.<br/> Máximo: ${Object.values(data)[0].high}.<br/> Mínimo: ${Object.values(data)[0].low}.<br/> Variação: ${Object.values(data)[0].varBid}.<br/> Porcentagem de variação:${Object.values(data)[0].pctChange}`);
});    
});

$("#btn").on("click",function(){
    const iniDate = $("#data-inicio").val().replaceAll("-","");
    const endDate = $("#data-fim").val().replaceAll("-","");
    console.log(iniDate)
    console.log(endDate)
    $.ajax({url:`https://economia.awesomeapi.com.br/${moedaEscolhida}-BRL/${10**20}?start_date=${iniDate}&end_date=${endDate}`}).done(function (data){
        data.forEach((obj=>{
            const dia = new Date(obj.timestamp*1000).getDate();
            const mes = new Date(obj.timestamp*1000).getMonth() +1;
            const ano = new Date(obj.timestamp*1000).getFullYear();
            const hora = new Date(obj.timestamp*1000).toTimeString().split("GMT")[0];
            $("#resposta").append(`<tr><td>${moedaEscolhida}</td><td>${obj.bid}</td><td>${obj.ask}</td><td>${obj.high}</td><td>${obj.low}</td><td>${obj.varBid}</td><td>${obj.pctChange}</td><td>${dia}/${mes}/${ano} - ${hora}</td></tr>`)
        }))
    });
});