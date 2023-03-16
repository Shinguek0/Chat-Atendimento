// Pega o checkbox
const botaoDark = document.getElementById('toggle-dark');
const chatbox = document.getElementById("chatbox");
const inputText = document.getElementById("input-text");
const sendButton = document.getElementById("send-button");
const receiveButton = document.getElementById("receive-button");

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

// Liga a função ao checkbox
botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});

function addMessage(text, sender) {
  // Adicione aqui o código onde cria o Titulo da mensagem
  var messageAtendente = document.createElement("p");
  messageAtendente.textContent = (sender === "user") ? "Você diz:" : "Atendente diz:";
  messageAtendente.style.fontSize = "14px";
  messageAtendente.style.textAlign = (sender === "user") ? "right" : "left";
  chatbox.appendChild(messageAtendente);

  // Adicione aqui o código onde cria o parágrafo da mensagem enviada
  var message = document.createElement("p");
  message.textContent = text;
  message.className = (sender === "user") ? "message-user" : "message";
  // message.style.padding = "5px";
  // message.style.borderRadius = "5px";
  // message.style.backgroundColor = (sender === "user") ? "#e6f2ff" : "#f2f2f2";
  // message.style.textAlign = (sender === "user") ? "right" : "left";
  chatbox.appendChild(message);

}

// function receiveMessage() {
//   var text = inputText.value;
//   if (text !== "") {
//     addMessage(text, "sender");
//     inputText.value = "";
// }};

// function sendMessage() {
//   var text = inputText.value;
//   if (text !== "") {
//     addMessage(text, "user");
//     inputText.value = "";
//   }};

sendButton.addEventListener("click", function() {
  var text = inputText.value;
  if (text !== "") {
    addMessage(text, "user");
    inputText.value = "";
    
  }});

receiveButton.addEventListener("click", function() {
  var text = inputText.value;
  if (text !== "") {
    addMessage(text, "sender");
    inputText.value = "";
    
  }});

document.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
     // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    sendButton.click();
  }
})