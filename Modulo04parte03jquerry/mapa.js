$("#btn").on("click",function(){
    let cepDigitado = $("#cep").val().split("-").join("")
    console.log(cepDigitado)
    $.ajax({url:`https://cep.awesomeapi.com.br/json/${cepDigitado}`}).done((data)=>{
        console.log(data)
        $("#endereco").html(`<p>Endereço: <br /> Rua: ${data.address}<br />Bairro: ${data.district}<br />Cidade: ${data.city}<br />Estado: ${data.state}<p/>`)
        $("#map").html(`<iframe src="https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed" width="600" height="450" style="border:0;" ></iframe>`)
    });
});