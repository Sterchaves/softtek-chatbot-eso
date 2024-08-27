// POP-UP Do Formulário de Contato

document.getElementById("contatoForm").addEventListener("submit", function(event){
    event.preventDefault();  
    alert("Obrigada! A sua mensagem foi enviada com sucesso.");  
    this.reset();  
});
