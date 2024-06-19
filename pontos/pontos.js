window.alert('Bem vindo, vamos verificar a sua pontuação nesse jogo!!');
var ponto = (prompt('Quantos pontos você tem?'));
if(ponto >= 100){
document.write(`Parabéns!!! você fez ${ponto} pontos e ganhou o jogo`)}
else{
document.write('Tente novamente');
}