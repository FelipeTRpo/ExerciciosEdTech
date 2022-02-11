$("#btn").on("click",function(){
    if($("#cep").val().split("").length === 9 && $("#cep").val().split("")[5] ==="-" ){
        let cepDigitado = $("#cep").val().split("-").join("")
        $.ajax({url:`https://cep.awesomeapi.com.br/json/${cepDigitado}`}).done((data)=>{
            $("#endereco").html(`<p>Endereço: <br /> Rua: ${data.address}<br />Bairro: ${data.district}<br />Cidade: ${data.city}<br />Estado: ${data.state}<p/>`)
            $("#map").html(`<iframe src="https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed" width="600" height="450" style="border:0;" ></iframe>`)
        });
}else{
    $("#endereco").html("Digite um CEP valido")
}
});