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
  message.style.padding = "5px";
  message.style.borderRadius = "5px";
  message.style.backgroundColor = (sender === "user") ? "#e6f2ff" : "#f2f2f2";
  message.style.textAlign = (sender === "user") ? "right" : "left";
  chatbox.appendChild(message);

}

function receiveMessage() {
  const chatbox = document.getElementById("chatbox");
  const inputText = document.getElementById("input-text");
  const sendButton = document.getElementById("send-button");
  const receiveButton = document.getElementById("receive-button");
  var text = inputText.value;
  if (text !== "") {
    addMessage(text, "sender");
    inputText.value = "";
}};

function sendMessage() {
  const chatbox = document.getElementById("chatbox");
  const inputText = document.getElementById("input-text");
  const sendButton = document.getElementById("send-button");
  const receiveButton = document.getElementById("receive-button");
  var text = inputText.value;
  if (text !== "") {
    addMessage(text, "user");
    inputText.value = "";
  }};
