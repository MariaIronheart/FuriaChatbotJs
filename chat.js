// Função para exibir a mensagem no chat
function displayMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('p-4', 'rounded-lg', 'text-white', 'mb-2');
    
    if (isUser) {
      messageDiv.classList.add('bg-purple-600', 'text-xl'); // Estilo para a mensagem do usuário
    } else {
      messageDiv.classList.add('bg-black', 'text-xl'); // Estilo para a resposta do bot
    }
    
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}

// Função para normalizar o texto 
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[.,!?]/g, "") // Remove pontuações
    .trim();
}

// Função para lidar com a entrada do usuário
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
      displayMessage(userInput, true); // Exibe a mensagem do user
      document.getElementById('user-input').value = ''; // Limpa o campo de entrada
      
      // Gerar a resposta do bot
      getBotResponse(userInput);
    }
}

// Objeto reutilizável     
const furiaData = {
    proximosJogos: [
      "05/05 vs NAVI às 16h",
      "07/05 vs G2 às 18h",
      "10/05 vs Vitality às 20h"
    ],
    lineup: [
      "KSCERATO",
      "yuurih",
      "arT",
      "chelo",
      "FalleN (coach)"
    ],
    ultimosResultados: [
      "FURIA 2x1 Liquid",
      "FURIA 0x2 Heroic",
      "FURIA 2x0 MIBR"
    ],
    noticias: [
      "FURIA anuncia novo treinador",
      "Time se prepara para o Major",
      "Entrevista com KSCERATO disponível no YouTube"
    ]
};

// Mensagem padrão para exibir no final 
const tip = '\n\n📌 Digite "menu" para voltar às opções.';

// Função para gerar a resposta do bot
function getBotResponse(userInput) {
    let botResponse = '';
    const userMessage = normalize(userInput); // Normaliza o texto do usuário
  
    if (/(\boi\b)|(\bolá\b)|(\bmenu\b)/.test(userMessage)) {
      botResponse = 'Como posso ajudar?\n\n' +
      'Digite o número de um comando ou escreva sua dúvida. Aqui vão algumas opções:\n' +
      '1. Próximos jogos\n' +
      '2. Line-up atual\n' +
      '3. Últimos resultados\n' +
      '4. Notícias\n\n' +
      'Outras perguntas que você pode fazer:\n' +
      '- Qual é o próximo campeonato?\n' +
      '- Quem é o capitão?\n' +
      '- Qual a posição da FURIA no ranking?\n' +
      '- Quem foi o MVP do último jogo?\n' +
      '- Quantos Majors a FURIA jogou?\n' +
      '- Onde posso assistir os jogos?\n' +
      '- Onde comprar produtos da FURIA?\n\n' +
      '📌 Dica: você pode digitar "menu" a qualquer momento para voltar aqui.';
      
    // Perguntas
    } else if (/(\bpróximos jogos\b)|(\b1\b)/.test(userMessage)) {
      botResponse = '📅 Próximos jogos da FURIA:\n- ' + furiaData.proximosJogos.join('\n- ') + tip;
  
    } else if (/(\bline-up\b)|(\bjogadores\b)|(\b2\b)/.test(userMessage)) {
      botResponse = '🧑‍🤝‍🧑 Line-up atual da FURIA:\n- ' + furiaData.lineup.join('\n- ') + tip;
  
    } else if (/(\búltimos resultados\b)|(\b3\b)/.test(userMessage)) {
      botResponse = '🏆 Últimos resultados:\n- ' + furiaData.ultimosResultados.join('\n- ') + tip;
  
    } else if (/(\bnotícias\b)|(\b4\b)/.test(userMessage)) {
      botResponse = '📰 Notícias recentes:\n- ' + furiaData.noticias.join('\n- ') + tip;
  
    } else if (/comandos disponíveis/.test(userMessage)) {
      botResponse = '❓ Comandos disponíveis:\n1. Próximos jogos\n2. Line-up\n3. Últimos resultados\n4. Notícias';
  
    } else if (/campeonato|próximo campeonato/.test(userMessage)) {
      botResponse = '📆 O próximo campeonato é o IEM Dallas 2025.' + tip;

    } else if (/última vitória/.test(userMessage)) {
      botResponse = '✅ A última vitória foi contra a Liquid por 2x1 no ESL Pro League.' + tip;

    } else if (/ranking/.test(userMessage)) {
      botResponse = '🌍 A FURIA está atualmente em 11º lugar no ranking HLTV.' + tip;

    } else if (/capitão/.test(userMessage)) {
      botResponse = '🎯 O capitão da FURIA é o arT.' + tip;

    } else if (/coach|treinador/.test(userMessage)) {
      botResponse = '🧠 O coach atual é guerri.' + tip;

    } else if (/mapa favorito/.test(userMessage)) {
      botResponse = '🗺️ O mapa favorito da FURIA é Mirage.' + tip;

    } else if (/resultado contra|vs/.test(userMessage)) {
      botResponse = '📊 FURIA vs NAVI: derrota por 1x2 no último confronto.' + tip;

    } else if (/títulos|campeonatos ganhos/.test(userMessage)) {
      botResponse = '🏅 A FURIA já conquistou 5 títulos internacionais.' + tip;

    } else if (/assistir|transmissão/.test(userMessage)) {
      botResponse = '🎥 Você pode assistir os jogos pelo canal da ESL na Twitch ou no YouTube.' + tip;

    } else if (/configuração|pc dos jogadores/.test(userMessage)) {
      botResponse = '🖥️ Os jogadores usam setups com RTX 3080, 240Hz, e periféricos da FURIA Gear.' + tip;

    } else if (/mais antigos|veteranos/.test(userMessage)) {
      botResponse = '📜 Os jogadores mais antigos são KSCERATO e yuurih.' + tip;

    } else if (/mvp/.test(userMessage)) {
      botResponse = '⭐ O último MVP foi KSCERATO no jogo contra Liquid.' + tip;

    } else if (/major|vai participar/.test(userMessage)) {
      botResponse = '🔥 Sim! A FURIA está classificada para o próximo Major.' + tip;

    } else if (/quantos|major/.test(userMessage)) {    
      botResponse = '🏆 A FURIA já participou de 6 Majors.' + tip;

    } else if (/loja|comprar/.test(userMessage)) {
      botResponse = '🛒 Você pode comprar produtos oficiais na loja.furia.gg' + tip;

    } else {
      botResponse = '🤖 Não entendi! Tente digitar "menu" para ver as opções disponíveis.';
    }
  
    displayMessage(botResponse);
}

// Mensagem de boas-vindas
window.addEventListener('load', () => {
  displayMessage('👋 Olá, furioso(a)! Eu sou o FuriaBot. Digite "menu" para começar.');
});

// Evento botão de enviar
document.getElementById('send-button').addEventListener('click', handleUserInput);


document.getElementById('user-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});
