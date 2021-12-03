let plays=[[0,0,0],[0,0,0],[0,0,0]];
let isMark=[[0,0,0],[0,0,0],[0,0,0]];
player=1;
//player 2 = X player 1 = O
function markHere(pos1,pos2){
    if(isMark[pos1][pos2]==0){
        //troca visual de lugar jogado
        if(player==2){
        plays[pos1][pos2] = 2;
        document.getElementById('btn-'+pos1+'-'+pos2).innerHTML= "X"
        }
        if(player==1){
        plays[pos1][pos2] = 1;
        document.getElementById('btn-'+pos1+'-'+pos2).innerHTML= "O"
        }
        //verificação de vitoria para X
        if(plays[0][0] == 2 & plays[1][0] == 2 & plays[2][0] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+0).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][1] == 2 & plays[1][1] == 2 & plays[2][1] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+1).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][2] == 2 & plays[1][2] == 2 & plays[2][2] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+2).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][0] == 2 & plays[0][1] == 2 & plays[0][2] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+0+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[1][0] == 2 & plays[1][1] == 2 & plays[1][2] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+1+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[2][0] == 2 & plays[2][1] == 2 & plays[2][2] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+2+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][0] == 2 & plays[1][1] == 2 & plays[2][2] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][2] == 2 & plays[1][1] == 2 & plays[2][0] == 2){
            document.getElementById('vencedor').innerHTML = "O jogador X ganhou "
            document.getElementById('btn-'+0+'-'+2).style.color = 'white';
            document.getElementById('btn-'+1+'-'+1).style.color = 'white';
            document.getElementById('btn-'+2+'-'+0).style.color = 'white';
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        //verificação de vitoria para O
        if(plays[0][0] == 1 & plays[1][0] == 1 & plays[2][0] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+0).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][1] == 1 & plays[1][1] == 1 & plays[2][1] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+1).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][2] == 1 & plays[1][2] == 1 & plays[2][2] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+2).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][0] == 1 & plays[0][1] == 1 & plays[0][2] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+0+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[1][0] == 1 & plays[1][1] == 1 & plays[1][2] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+1+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[2][0] == 1 & plays[2][1] == 1 & plays[2][2] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+2+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][0] == 1 & plays[1][1] == 1 & plays[2][2] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            for(let i =0; i<3; i++){
                document.getElementById('btn-'+i+'-'+i).style.color = 'white';
            }
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }
        if(plays[0][2] == 1 & plays[1][1] == 1 & plays[2][0] == 1){
            document.getElementById('vencedor').innerHTML = "O jogador O ganhou "
            document.getElementById('btn-'+0+'-'+2).style.color = 'white';
            document.getElementById('btn-'+1+'-'+1).style.color = 'white';
            document.getElementById('btn-'+2+'-'+0).style.color = 'white';
            isMark=[[1,1,1],[1,1,1],[1,1,1]];
        }

        //troca de player
        if(player==1){
            document.getElementById('jogador-agora').innerHTML= "Vez do X"
            player = 2;
        }else{
            document.getElementById('jogador-agora').innerHTML= "Vez do O"
            player = 1;
        }
        isMark[pos1][pos2]=1;
    }
    
    
}

function resetar() {
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            plays[i][j] = 0;
            isMark[i][j] = 0;
            document.getElementById('btn-'+i+'-'+j).innerHTML= " "
            document.getElementById('btn-'+i+'-'+j).style.color = 'black';
        }
    }
    player = 2;
    document.getElementById('vencedor').innerHTML = ""
    document.getElementById('jogador-agora').innerHTML= "Comece com X"
    
}
