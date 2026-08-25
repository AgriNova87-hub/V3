const chatBox=document.getElementById("chatBox");
const userInput=document.getElementById("userInput");
const sendBtn=document.getElementById("sendBtn");
const clearChatBtn=document.getElementById("clearChat");
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.querySelector(".nav-links");
const quickButtons=document.querySelectorAll(".quick-btn");

function sendMessage(){
    const message=userInput.value.trim();
    if(!message)return;
    addUserMessage(message);
    userInput.value="";
    showTyping();
    setTimeout(()=>{removeTyping();addAIMessage(getDemoResponse(message));},900);
}
function addUserMessage(message){
    const el=document.createElement("div");
    el.className="message user-message";
    el.innerHTML=`<div class="avatar">👨‍🌾</div><div class="message-content"><div class="sender">You</div><div class="bubble">${escapeHTML(message)}</div></div>`;
    chatBox.appendChild(el);scrollToBottom();
}
function addAIMessage(message){
    const el=document.createElement("div");
    el.className="message ai-message";
    el.innerHTML=`<div class="avatar">🌱</div><div class="message-content"><div class="sender">AgriAI</div><div class="bubble">${message}</div></div>`;
    chatBox.appendChild(el);scrollToBottom();
}
function showTyping(){
    if(document.getElementById("typingMessage"))return;
    const el=document.createElement("div");
    el.className="message ai-message";el.id="typingMessage";
    el.innerHTML=`<div class="avatar">🌱</div><div class="message-content"><div class="sender">AgriAI</div><div class="typing-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>`;
    chatBox.appendChild(el);scrollToBottom();
}
function removeTyping(){const el=document.getElementById("typingMessage");if(el)el.remove();}

function getDemoResponse(message){
    const text=message.toLowerCase();

    if(text.includes("soil moisture")||text.includes("moisture")||text.includes("dry soil")||text.includes("soil is dry"))
        return `🌱 <strong>Soil Moisture</strong><br><br>Soil moisture tells you how much water is available around plant roots.<br><br>In AgriNova, you can set a moisture threshold. For example, with a <strong>40%</strong> threshold, the motor can turn ON below 40% and OFF at 40% or above.`;

    if(text.includes("irrigation")||text.includes("water plants")||text.includes("watering"))
        return `💧 <strong>Smart Irrigation</strong><br><br>Smart irrigation automatically supplies water based on soil moisture conditions.<br><br>AgriNova can use AUTO mode for moisture-based control or MANUAL mode for direct motor control.`;

    if(text.includes("crop")||text.includes("crops")||text.includes("plant"))
        return `🌾 <strong>Crops</strong><br><br>Crop selection depends on soil type, climate, temperature, rainfall and irrigation availability.<br><br>Common crops include rice, maize, cotton, sugarcane, vegetables and pulses.`;

    if(text.includes("weather")||text.includes("rain")||text.includes("temperature")||text.includes("humidity"))
        return `☀️ <strong>Weather</strong><br><br>Weather affects irrigation decisions. High temperature may increase water requirements, while rainfall can reduce the need for irrigation.<br><br>Use AgriNova's Live Weather page along with soil moisture information.`;

    if(text.includes("fertilizer")||text.includes("fertiliser")||text.includes("nutrient"))
        return `🧪 <strong>Fertilizer</strong><br><br>Fertilizer supplies nutrients needed for plant growth. The correct type and quantity depend on the crop, soil condition and growth stage. Soil testing is useful before application.`;

    if(text.includes("motor")||text.includes("pump")||text.includes("motor problem")||text.includes("motor not"))
        return `⚙️ <strong>Motor Check</strong><br><br>If the irrigation motor is not working, check:<br><br>• Power supply<br>• Motor driver or relay<br>• ESP32 control signal<br>• Motor wiring<br>• Common GND connection<br><br>⚠️ Switch OFF power before checking physical wiring.`;

    if(text.includes("esp32")||text.includes("esp"))
        return `🔌 <strong>ESP32</strong><br><br>ESP32 acts as the main controller in AgriNova. It can read the soil moisture sensor and DHT11, then control the motor through a suitable driver or relay.<br><br>Firebase can later connect ESP32 data and control commands with the website.`;

    if(text.includes("dashboard")||text.includes("agrinova")||text.includes("monitor"))
        return `📊 <strong>AgriNova Dashboard</strong><br><br>The dashboard monitors and controls the main smart agriculture functions:<br><br>• Soil Moisture<br>• Temperature<br>• Humidity<br>• Motor Status<br>• AUTO / MANUAL Mode<br>• Moisture Threshold<br>• Irrigation Timer<br>• Weather<br>• Farm Alerts<br><br>Firebase can later connect these functions with the ESP32.`;

    if(text.includes("hello")||text.includes("hi")||text.includes("hey"))
        return `👋 Hello! I'm <strong>AgriAI</strong>.<br><br>I can help with soil moisture, irrigation, crops, weather, fertilizer, motor problems, ESP32 and the AgriNova dashboard.`;

    if(text.includes("help")||text.includes("what can you do"))
        return `🌱 <strong>I can help with:</strong><br><br>• Soil moisture<br>• Smart irrigation<br>• Crop information<br>• Weather<br>• Fertilizer basics<br>• Motor troubleshooting<br>• ESP32<br>• AgriNova dashboard`;

    return `🌱 I'm currently running in <strong>Demo Mode</strong>.<br><br>I can answer questions about soil moisture, irrigation, crops, weather, fertilizer, motor, ESP32 and the AgriNova dashboard.<br><br>Try asking about one of these topics.`;
}

quickButtons.forEach(button=>button.addEventListener("click",()=>{
    userInput.value=button.dataset.question;sendMessage();
}));
userInput.addEventListener("keydown",event=>{
    if(event.key==="Enter"){event.preventDefault();sendMessage();}
});
sendBtn.addEventListener("click",sendMessage);

clearChatBtn.addEventListener("click",()=>{
    chatBox.innerHTML=`<div class="message ai-message"><div class="avatar">🌱</div><div class="message-content"><div class="sender">AgriAI</div><div class="bubble">Hello! 👋 I'm <strong>AgriAI</strong>, your smart agriculture assistant.<br><br>Ask me about soil moisture, irrigation, crops, weather, fertilizer, motors, ESP32, or the AgriNova dashboard.</div></div></div>`;
    userInput.value="";userInput.focus();
});

menuBtn.addEventListener("click",()=>navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("show")));

function scrollToBottom(){chatBox.scrollTop=chatBox.scrollHeight;}
function escapeHTML(text){
    const div=document.createElement("div");div.textContent=text;return div.innerHTML;
}
