// Desenvolvido por Danilo Formanski e Vinicius Albino 

const botaoDark = document.getElementById('toggle-dark');
const chatbox = document.getElementById("chatbox");
const inputText = document.getElementById("input-text");
const sendButton = document.getElementById("send-button");
const receiveButton = document.getElementById("receive-button");

// Mantem o botão ativo se o thema estiver como dark
if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});

function addMessage(text, sender) {
  //Cria o elemento da div
  var messageBox = document.createElement('div');
  messageBox.className = (sender === "user") ? "messageBox user" : "messageBox";

  // Adicione aqui o código onde cria o Titulo da mensagem
  var messageTitle = document.createElement("p");
  messageTitle.textContent = (sender === "user") ? "Você diz:" : "Atendente diz:";
  //messageTitle.style.textAlign = (sender === "user") ? "right" : "left";
  messageTitle.className = "titulo-msg";
  // chatbox.appendChild(messageTitle);

  // Adicione aqui o código onde cria o parágrafo da mensagem enviada
  var message = document.createElement("p");
  message.textContent = text;
  message.className = "msg";
  // message.style.padding = "5px";
  // message.style.borderRadius = "5px";
  // message.style.backgroundColor = (sender === "user") ? "#e6f2ff" : "#f2f2f2";
  // message.style.textAlign = (sender === "user") ? "right" : "left";
  // chatbox.appendChild(message);
  messageBox.addEventListener("click", removeItem);

  messageBox.appendChild(messageTitle);
  messageBox.appendChild(message);
  chatbox.appendChild(messageBox);
}

// Temporario
function removeItem(event) {

  const msgTarget = event.target;

  chatbox.removeChild(msgTarget);
}

//Primeira função para mandar mensagem

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


//Segunda função para mandar mensagem

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
  }})

//Terceira fução para mandar mensagem