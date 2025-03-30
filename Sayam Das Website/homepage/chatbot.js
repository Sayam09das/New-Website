document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const clearChatButton = document.getElementById('clear-chat');
    const closeChatButton = document.getElementById('close-chat');

    let isPopupVisible = false;

    const predefinedResponses = {
        "hi": "Hello! How can I help you today?",
        "who are you": "I'm Sayam AI, your personal assistant for this website.",
        "what are projects like": "Projects vary depending on the field. In web development, projects involve designing, coding, testing, and deploying applications. Sayam has worked on projects like AI chatbots, web apps, and APIs.",
        "what can you do": "I can provide information about Sayam's skills, projects, and experience. Ask me anything!",
        "tell me about sayam": "Sayam is a full-stack developer and Software Engineer skilled in JavaScript, Node.js, Express, MongoDB, C , Python and more. He is currently studying at Adamas University.",
        "default": "I'm not sure about that. Could you rephrase your question?"
    };

    chatIcon.addEventListener('click', function() {
        toggleChatBox();
    });

    closeChatButton.addEventListener('click', function() {
        toggleChatBox();
    });

    clearChatButton.addEventListener('click', function() {
        chatMessages.innerHTML = '';
        addBotMessage("Chat cleared. How can I assist you?");
    });

    sendButton.addEventListener('click', function() {
        sendUserMessage();
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    function toggleChatBox() {
        chatBox.classList.toggle('open');
        chatBox.style.display = chatBox.classList.contains('open') ? 'flex' : 'none';
    }

    function sendUserMessage() {
        const message = userInput.value.trim().toLowerCase();
        if (!message) return;
        addUserMessage(message);
        userInput.value = '';

        setTimeout(() => {
            const response = predefinedResponses[message] || predefinedResponses["default"];
            addBotMessage(response);
        }, 500);
    }

    function addUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.innerHTML = `<div class="message-content">${text}</div>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addBotMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        messageElement.innerHTML = `<div class="bot-avatar">🤖</div><div class="message-content">${text}</div>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    addBotMessage("Hello! I'm Sayam's AI assistant. Ask me anything about Sayam's skills, projects, or experience!");
});