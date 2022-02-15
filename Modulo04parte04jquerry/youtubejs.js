$( "#tabs" ).tabs({active:false,collapsible:true});
$( "#accordion1" ).accordion({active:false,collapsible:true});
$( "#accordion2" ).accordion({active:false,collapsible:true});
$( "#accordion3" ).accordion({active:false,collapsible:true});
$( "#accordion4" ).accordion({active:false,collapsible:true});
$( "#accordion5" ).accordion({active:false,collapsible:true});

const vidID = ["xuCn8ux2gbs","n3Xv_g3g-mA","0FH9cgRhQ-k","UjtOGPJ0URM","y8XvQNt26KI"]
let player1;
let player2;
let player3;
let player4;
let player5;
      
$("#vid1").on("click",function(){
    player1 = new YT.Player('player1', {
        height: '360',
        width: '640',
        videoId: vidID[0],
        events:{
            'onReady':onPlayerReady
        }
      });
    function onPlayerReady(){
        let data = player1.getVideoData();
        $("#vid1").html(data.title);
        $("#nome1").html(data.title);
        $("#autor1").html(data.author);
        if(data.author===""){
            $("#autor1").html("Informação nao disponivel");
        }
        $("#tempo1").html(`${Math.trunc(player1.getDuration()/60)}:${player1.getDuration()%60}`);
        $("#url1").html(`<a href="${player1.getVideoUrl()}">${player1.getVideoUrl()}<a/>`);
      }
    player2.destroy();
    player3.destroy();
    player4.destroy();
    player5.destroy();
})
$("#vid2").on("click",function(){
    player2 = new YT.Player('player2', {
        height: '360',
        width: '640',
        videoId: vidID[1],
        events:{
            'onReady':onPlayerReady
        }
      });
      function onPlayerReady(){
        let data = player2.getVideoData();
        $("#vid2").html(data.title);
        $("#nome2").html(data.title);
        $("#autor2").html(data.author);
        if(data.author===""){
            $("#autor2").html("Informação nao disponivel");
        }
        $("#tempo2").html(`${Math.trunc(player2.getDuration()/60)}:${player2.getDuration()%60}`);
        $("#url2").html(`<a href="${player2.getVideoUrl()}">${player2.getVideoUrl()}<a/>`);
      }
      player1.destroy();
      player3.destroy();
      player4.destroy();
      player5.destroy();
})
$("#vid3").on("click",function(){
    player3 = new YT.Player('player3', {
        height: '360',
        width: '640',
        videoId: vidID[2],
        events:{
            'onReady':onPlayerReady
        }
      });
      function onPlayerReady(){
        let data = player3.getVideoData();
        $("#vid3").html(data.title);
        $("#nome3").html(data.title);
        $("#autor3").html(data.author);
        if(data.author===""){
            $("#autor3").html("Informação nao disponivel");
        }
        $("#tempo3").html(`${Math.trunc(player3.getDuration()/60)}:${player3.getDuration()%60}`);
        $("#url3").html(`<a href="${player3.getVideoUrl()}">${player3.getVideoUrl()}<a/>`);
      }
      player2.destroy();
      player1.destroy();
      player4.destroy();
      player5.destroy();
})
$("#vid4").on("click",function(){
    player4 = new YT.Player('player4', {
        height: '360',
        width: '640',
        videoId: vidID[3],
        events:{
            'onReady':onPlayerReady
        }
      });
      function onPlayerReady(){
        let data = player4.getVideoData();
        $("#vid4").html(data.title);
        $("#nome4").html(data.title);
        $("#autor4").html(data.author);
        if(data.author===""){
            $("#autor4").html("Informação nao disponivel");
        }
        $("#tempo4").html(`${Math.trunc(player4.getDuration()/60)}:${player4.getDuration()%60}`);
        $("#url4").html(`<a href="${player4.getVideoUrl()}">${player4.getVideoUrl()}<a/>`);
      }
      player2.destroy();
      player3.destroy();
      player1.destroy();
      player5.destroy();
})
$("#vid5").on("click",function(){
    player5 = new YT.Player('player5', {
        height: '360',
        width: '640',
        videoId: vidID[4],
        events:{
            'onReady':onPlayerReady
        }
      });
      function onPlayerReady(){
        let data = player5.getVideoData();
        $("#vid5").html(data.title);
        $("#nome5").html(data.title);
        $("#autor5").html(data.author);
        if(data.author===""){
            $("#autor5").html("Informação nao disponivel");
        }
        $("#tempo5").html(`${Math.trunc(player5.getDuration()/60)}:${player5.getDuration()%60}`);
        $("#url5").html(`<a href="${player5.getVideoUrl()}">${player5.getVideoUrl()}<a/>`);
      }
      player2.destroy();
      player3.destroy();
      player4.destroy();
      player1.destroy();
})