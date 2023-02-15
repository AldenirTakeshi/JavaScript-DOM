function escalar() {
  const nameJogador = document.getElementById("nameJogador").value;
  const posicao = document.getElementById("posicao").value;
  const camisa = document.getElementById("camisa").value;

  const confirmation = confirm(
    `Deseja realmente escalar o jogador ${nameJogador} camisa ${camisa} na posicao de ${posicao}`
  );
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const JogadorLi = document.createElement("li");
    JogadorLi.innerText = `Jogador ${nameJogador} Camisa ${camisa} jogando como ${posicao}`;
    JogadorLi.id = "player-" + camisa;

    document.getElementById("nameJogador").value = "";
    document.getElementById("posicao").value = "";
    document.getElementById("camisa").value = "";
    teamList.append(JogadorLi);
  }
}
