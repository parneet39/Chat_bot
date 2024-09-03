document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        addMessage("You", userMessage);
        userInput.value = "";

        // Simulate chatbot response (replace with your own logic)
        setTimeout(function () {
            const botResponse = getBotResponse(userMessage);
            addMessage("Chatbot", botResponse);
        }, 500);
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBody.appendChild(messageElement);

        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Replace with your own logic to generate chatbot responses based on user input
        switch (userMessage.toLowerCase()) {
            case "hello":
                return "Hi there! How can I help you?";
            case "how are you?":
                return "I'm just a bot, but I'm here to assist you!";
            case "what's the weather like today?":
                return "I'm sorry, I don't have access to real-time data.";
            default:
                return "I'm not sure how to respond to that.";
        }
    }
});
