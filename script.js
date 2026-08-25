document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const chatbotClose = document.getElementById("chatbotClose");
  const chatSend = document.getElementById("chatSend");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatbotMessages");

  if (chatbotToggle) {
    chatbotToggle.onclick = () => chatbotWindow.classList.toggle("hidden");
    chatbotClose.onclick = () => chatbotWindow.classList.add("hidden");

    const sendMessage = () => {
      const text = chatInput.value.trim();
      if (!text) return;

      // Render User Message
      const userDiv = document.createElement("div");
      userDiv.className = "chat-msg user";
      userDiv.innerHTML = `<p>${text}</p>`;
      chatMessages.appendChild(userDiv);

      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulated AgriAI Response
      setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-msg bot";
        
        let response = "I can help with irrigation schedules, weather forecasts, and crop management strategies!";
        if (text.toLowerCase().includes("water") || text.toLowerCase().includes("irrigation")) {
          response = "For optimal yield, target a soil moisture level between 40% and 60% using the AgriNova Dashboard.";
        } else if (text.toLowerCase().includes("motor") || text.toLowerCase().includes("pump")) {
          response = "Check out our Motor Selection page to calculate the right HP rating for your field size!";
        }

        botDiv.innerHTML = `<p>${response}</p>`;
        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 600);
    };

    chatSend.onclick = sendMessage;
    chatInput.onkeypress = (e) => { if (e.key === "Enter") sendMessage(); };
  }
});