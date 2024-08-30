// Funções de resposta para cada tema
const responses = {
    'Reset de senhas': [
        "Para resetar sua senha, acesse o portal de segurança.",
        "Digite seu usuário e siga as instruções na tela.",
        "Se não conseguir, entre em contato com o suporte técnico.",
        "Você pode resetar senhas para sistemas internos e externos."
    ],
    'Desbloqueios': [
        "Para desbloquear seu acesso, acesse o portal de desbloqueios.",
        "Preencha o formulário com seu ID de usuário.",
        "Se você foi bloqueado por tentativas falhas, aguarde 15 minutos.",
        "Você pode desbloquear acessos ao sistema, e-mails, e redes internas."
    ],
    'Sistemas': [
        "Aqui você pode consultar informações sobre sistemas internos.",
        "Para acessar o sistema, utilize seu login e senha corporativos.",
        "Se o sistema estiver fora do ar, verifique o status de manutenção.",
        "Problemas frequentes podem ser resolvidos limpando o cache do navegador."
    ],
    'Chamados': [
        "Para abrir um chamado, acesse o portal de suporte.",
        "Descreva detalhadamente o problema que você está enfrentando.",
        "Nosso time de suporte responderá em até 24 horas.",
        "Você pode acompanhar o status do seu chamado online."
    ]
};

let selectedOption = "";

// Função para iniciar o chat com a opção selecionada
function selectOption(option) {
    selectedOption = option;
    document.querySelector(".chat-content").innerHTML = `<div class="message bot">Você selecionou: ${option}. Como posso ajudar?</div>`;
    document.getElementById("userInput").disabled = false;
    document.querySelector(".btn-primary").disabled = false;
    document.getElementById("menuOptions").style.display = 'none';
}

// Função para enviar a mensagem do usuário
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        setTimeout(() => {
            const botResponse = generateResponse(userInput);
            addMessage(botResponse, "bot");
        }, 1000);
    }
    document.getElementById("userInput").value = "";
}

// Função para gerar resposta do chatbot com base na opção selecionada
function generateResponse(userInput) {
    const availableResponses = responses[selectedOption];
    return availableResponses[Math.floor(Math.random() * availableResponses.length)];
}

// Função para adicionar uma mensagem na tela
function addMessage(text, sender) {
    const chatContent = document.querySelector(".chat-content");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}



// POP-UP DE ENVIO DO FORMULÁRIO - CONTATOS
document.getElementById("contatoForm").addEventListener("submit", function(event){
    event.preventDefault(); 
    alert("Obrigada! A sua mensagem foi enviada com sucesso."); 
    this.reset(); 
});
