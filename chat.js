// Função para exibir a mensagem no chat
function displayMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('p-4', 'rounded-lg', 'text-white', 'mb-2');
    
    if (isUser) {
      messageDiv.classList.add('bg-purple-600'); // Estilo para a mensagem do usuário
    } else {
      messageDiv.classList.add('bg-black'); // Estilo para a resposta do bot
    }
    
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para o final
  }
  
  // Função para lidar com a entrada do usuário
  function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
      displayMessage(userInput, true); // Exibe a mensagem do usuário
      document.getElementById('user-input').value = ''; // Limpa o campo de entrada
      
      // Gerar a resposta do bot
      getBotResponse(userInput);
    }
  }

  //Objeto reutilizável     
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
  
  
 // Função para gerar a resposta do bot
 function getBotResponse(userInput) {
    let botResponse = '';
    const userMessage = userInput.toLowerCase();
  
    if (userMessage.includes('oi') || userMessage.includes('olá') || userMessage.includes('menu')) {
      botResponse = '👋 Olá, furioso(a)! Eu sou o FuriaBot. Como posso ajudar?\n\n' +
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
  
    } else if (userMessage.includes('próximos jogos') || userMessage.includes('1')) {
      botResponse = '📅 Próximos jogos da FURIA:\n- ' + furiaData.proximosJogos.join('\n- ') + '\n\n📌 Você pode digitar "menu" para ver novamente os comandos.';
  
    } else if (userMessage.includes('line-up') || userMessage.includes('jogadores') || userMessage.includes('2')) {
      botResponse = '🧑‍🤝‍🧑 Line-up atual da FURIA:\n- ' + furiaData.lineup.join('\n- ') + '\n\n📌 Você pode digitar "menu" para ver novamente os comandos.';
  
    } else if (userMessage.includes('últimos resultados') || userMessage.includes('3')) {
      botResponse = '🏆 Últimos resultados:\n- ' + furiaData.ultimosResultados.join('\n- ') + '\n\n📌 Você pode digitar "menu" para ver novamente os comandos.';
  
    } else if (userMessage.includes('notícias') || userMessage.includes('4')) {
      botResponse = '📰 Notícias recentes:\n- ' + furiaData.noticias.join('\n- ') + '\n\n📌 Você pode digitar "menu" para ver novamente os comandos.';
  
    } else if (userMessage.includes('comandos disponíveis')) {
      botResponse = '❓ Comandos disponíveis:\n1. Próximos jogos\n2. Line-up\n3. Últimos resultados\n4. Notícias';
  
     // Novas perguntas adicionadas
  } else if (userMessage.includes('campeonato') || userMessage.includes('próximo campeonato')) {
    botResponse = '📆 O próximo campeonato é o IEM Dallas 2025.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('última vitória')) {
    botResponse = '✅ A última vitória foi contra a Liquid por 2x1 no ESL Pro League.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('ranking')) {
    botResponse = '🌍 A FURIA está atualmente em 11º lugar no ranking HLTV.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('capitão')) {
    botResponse = '🎯 O capitão da FURIA é o arT.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('coach') || userMessage.includes('treinador')) {
    botResponse = '🧠 O coach atual é guerri.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('mapa favorito')) {
    botResponse = '🗺️ O mapa favorito da FURIA é Mirage.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('resultado contra') || userMessage.includes('vs')) {
    botResponse = '📊 FURIA vs NAVI: derrota por 1x2 no último confronto.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('títulos') || userMessage.includes('campeonatos ganhos')) {
    botResponse = '🏅 A FURIA já conquistou 5 títulos internacionais.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('assistir') || userMessage.includes('transmissão')) {
    botResponse = '🎥 Você pode assistir os jogos pelo canal da ESL na Twitch ou no YouTube.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('configuração') || userMessage.includes('pc dos jogadores')) {
    botResponse = '🖥️ Os jogadores usam setups com RTX 3080, 240Hz, e periféricos da FURIA Gear.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('mais antigos') || userMessage.includes('veteranos')) {
    botResponse = '📜 Os jogadores mais antigos são KSCERATO e yuurih.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('mvp')) {
    botResponse = '⭐ O último MVP foi KSCERATO no jogo contra Liquid.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('major') && userMessage.includes('vai participar')) {
    botResponse = '🔥 Sim! A FURIA está classificada para o próximo Major.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('quantos') && userMessage.includes('major')) {    
    botResponse = '🏆 A FURIA já participou de 6 Majors.\n📌 Digite "menu" para voltar às opções.';

  } else if (userMessage.includes('loja') || userMessage.includes('comprar')) {
    botResponse = '🛒 Você pode comprar produtos oficiais na loja.furia.gg\n📌 Digite "menu" para voltar às opções.';

  } else {
    botResponse = '🤖 Não entendi! Tente digitar "menu" para ver as opções disponíveis.';
  }
  
    displayMessage(botResponse);
  }
    
  
  // Evento de clique no botão de enviar
  document.getElementById('send-button').addEventListener('click', handleUserInput);
  
  // Evento de pressionamento de tecla para enviar a mensagem ao pressionar Enter
  document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleUserInput();
    }
  });
  