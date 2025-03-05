document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotBox = document.getElementById("chatbot-box");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    console.log(chatbotToggle); // Debugging line to check if button is selected
    console.log(chatbotBox); // Debugging line to check if div is selected

    chatbotToggle.addEventListener("click", function () {
        chatbotBox.classList.toggle("hidden");
    });

    chatbotClose.addEventListener("click", function () {
        chatbotBox.classList.add("hidden");
    });

    chatbotSend.addEventListener("click", function () {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            chatbotMessages.innerHTML += `<div class='user-message'>${userMessage}</div>`;
            chatbotInput.value = "";
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
            setTimeout(() => chatbotReply(userMessage), 1000);
        }
    });

    function chatbotReply(message) {
        let reply;
        switch (message.toLowerCase()) {
            case "hello": reply = "Hi there! How can I help?"; break;
            case "what projects have you worked on?": reply = "Check out my projects <a href='projects.html'>here</a>."; break;
            case "where can i find your resume?": reply = "You can download my resume <a href='resume.html'>here</a>."; break;
            default: reply = "I'm still learning! Ask me about my projects or resume.";
        }
        chatbotMessages.innerHTML += `<div class='bot-message'>${reply}</div>`;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
    }
});
