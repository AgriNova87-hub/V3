/* AgriNova Language System
   Supports English, Tamil and Hindi.
   Selection is saved in the browser and works across all AgriNova pages.
*/
(function () {
  "use strict";

  const translations = {
    en: {},
    ta: {
      "Home":"முகப்பு","Live Weather":"நேரடி வானிலை","Motor Selection":"மோட்டார் தேர்வு","Dashboard":"டாஷ்போர்டு",
      "Govt Schemes":"அரசுத் திட்டங்கள்","Farm Calculator":"விவசாய கணிப்பான்","Smart Alerts":"ஸ்மார்ட் எச்சரிக்கைகள்",
      "Motor":"மோட்டார்","Irrigation":"நீர்ப்பாசனம்","Schemes":"திட்டங்கள்","Calculator":"கணிப்பான்",
      "IoT-Powered Farming Platform":"IoT அடிப்படையிலான விவசாய தளம்","Next-Gen Farming.":"அடுத்த தலைமுறை விவசாயம்.",
      "Smarter Yields.":"சிறந்த விளைச்சல்.","Open Dashboard":"டாஷ்போர்டை திறக்கவும்","Explore Tools":"கருவிகளைப் பார்க்கவும்",
      "FARMING SUITE":"விவசாய கருவிகள்","Integrated":"ஒருங்கிணைந்த","Agri Tools":"விவசாய கருவிகள்",
      "Everything you need to optimize field operations and water management.":"வயல் செயல்பாடுகள் மற்றும் நீர் மேலாண்மையை மேம்படுத்த தேவையான அனைத்தும்.",
      "Live Weather":"நேரடி வானிலை","Smart Irrigation":"ஸ்மார்ட் நீர்ப்பாசனம்","Govt Schemes":"அரசுத் திட்டங்கள்",
      "Farm Calculator":"விவசாய கணிப்பான்","IoT Control Hub":"IoT கட்டுப்பாட்டு மையம்","ABOUT PLATFORM":"தளம் பற்றி",
      "About":"பற்றி","SMART FARM DASHBOARD":"ஸ்மார்ட் விவசாய டாஷ்போர்டு","Farm":"விவசாயம்",
      "Simple monitoring and irrigation control for your farm.":"உங்கள் விவசாயத்திற்கான எளிய கண்காணிப்பு மற்றும் நீர்ப்பாசன கட்டுப்பாடு.",
      "DEVICE":"சாதனம்","Connecting...":"இணைக்கப்படுகிறது...","Soil Moisture":"மண் ஈரப்பதம்",
      "Waiting for sensor":"சென்சாருக்காக காத்திருக்கிறது","Temperature":"வெப்பநிலை","DHT11 temperature":"DHT11 வெப்பநிலை",
      "Humidity":"ஈரப்பதம்","DHT11 humidity":"DHT11 ஈரப்பதம்","Motor Status":"மோட்டார் நிலை",
      "Waiting for controller":"கட்டுப்படுத்திக்காக காத்திருக்கிறது","IRRIGATION":"நீர்ப்பாசனம்","Motor Control":"மோட்டார் கட்டுப்பாடு",
      "AUTO":"தானியங்கி","MANUAL":"கையேடு","Moisture Threshold":"ஈரப்பத வரம்பு",
      "Motor turns ON below this level and OFF at or above it.":"இந்த அளவுக்கு கீழே சென்றால் மோட்டார் இயங்கும்; அதற்கு சமமாக அல்லது மேலாக இருந்தால் நிற்கும்.",
      "Save Threshold":"வரம்பை சேமிக்கவும்","Control the motor manually from the buttons below.":"கீழே உள்ள பொத்தான்கள் மூலம் மோட்டாரை கையேடாக கட்டுப்படுத்தவும்.",
      "Turn ON":"இயக்கவும்","Turn OFF":"நிறுத்தவும்",
      "REAL-TIME FORECAST":"நேரடி வானிலை முன்னறிவிப்பு","Live Farm":"நேரடி பண்ணை","Weather":"வானிலை",
      "Check localized climate conditions to plan irrigation and harvesting.":"நீர்ப்பாசனம் மற்றும் அறுவடையை திட்டமிட உள்ளூர் காலநிலையைப் பார்க்கவும்.",
      "Search":"தேடுக","Fetching weather data...":"வானிலை தரவு பெறப்படுகிறது...","Wind Speed":"காற்றின் வேகம்",
      "Feels Like":"உணரப்படும் வெப்பநிலை","Smart":"ஸ்மார்ட்","FARM MONITORING":"பண்ணை கண்காணிப்பு",
      "Smart Farm Alerts":"ஸ்மார்ட் பண்ணை எச்சரிக்கைகள்","Refresh":"புதுப்பிக்கவும்","Active Alerts":"செயலில் உள்ள எச்சரிக்கைகள்",
      "Critical":"முக்கியமானவை","Warnings":"எச்சரிக்கைகள்","Farm Looks Good":"பண்ணை நன்றாக உள்ளது",
      "No important conditions require your attention right now.":"தற்போது உங்கள் கவனம் தேவைப்படும் முக்கிய நிலைமைகள் எதுவும் இல்லை.",
      "PUMP MATCHING ENGINE":"பம்ப் தேர்வு இயந்திரம்","Smart Motor Selection":"ஸ்மார்ட் மோட்டார் தேர்வு",
      "Enter Farm Details":"பண்ணை விவரங்களை உள்ளிடவும்","Farm Area (Acres)":"பண்ணை பரப்பளவு (ஏக்கர்)",
      "Water Required (Liters/Day)":"தேவையான நீர் (லிட்டர்/நாள்)","Budget (₹)":"பட்ஜெட் (₹)",
      "Recommend Motor":"மோட்டாரை பரிந்துரைக்கவும்","Motor Recommendation":"மோட்டார் பரிந்துரை",
      "Recommended Motor :":"பரிந்துரைக்கப்படும் மோட்டார் :","Estimated Price :":"மதிப்பிடப்பட்ட விலை :",
      "Recommended Brand :":"பரிந்துரைக்கப்படும் பிராண்ட் :","Budget Status :":"பட்ஜெட் நிலை :",
      "NATIONAL INITIATIVES":"தேசிய திட்டங்கள்","Government Agri Schemes":"அரசு விவசாயத் திட்டங்கள்","Learn More":"மேலும் அறிய",
      "PM-KISAN":"PM-KISAN","PM Fasal Bima Yojana":"PM பயிர் காப்பீட்டுத் திட்டம்",
      "PM Krishi Sinchayee Yojana":"PM கிரிஷி சிஞ்சாயி திட்டம்","Soil Health Card":"மண் நல அட்டை","e-NAM Platform":"e-NAM தளம்",
      "FINANCIAL & RESOURCE ESTIMATION":"நிதி மற்றும் வள மதிப்பீடு","Smart Farm Calculators":"ஸ்மார்ட் விவசாய கணிப்பான்கள்",
      "Water Requirement":"நீர் தேவை","Farm Area (Acres)":"பண்ணை பரப்பளவு (ஏக்கர்)",
      "Water Required Per Acre (Liters)":"ஒரு ஏக்கருக்குத் தேவையான நீர் (லிட்டர்)","Calculate Water":"நீரை கணக்கிடவும்",
      "Waiting for calculation...":"கணக்கீட்டுக்காக காத்திருக்கிறது...","Farm Expenses":"பண்ணை செலவுகள்",
      "Seed Cost (₹)":"விதை செலவு (₹)","Fertilizer Cost (₹)":"உர செலவு (₹)","Labour Cost (₹)":"தொழிலாளர் செலவு (₹)",
      "Electricity Cost (₹)":"மின்சார செலவு (₹)","Other Expenses (₹)":"மற்ற செலவுகள் (₹)","Calculate Expense":"செலவை கணக்கிடவும்",
      "Profit Calculator":"லாப கணிப்பான்","Total Income (₹)":"மொத்த வருமானம் (₹)",
      "Your Smart Agriculture Assistant":"உங்கள் ஸ்மார்ட் விவசாய உதவியாளர்","Clear Chat":"உரையாடலை அழிக்கவும்",
      "AgriAI Demo Mode — Responses are generated locally.":"AgriAI டெமோ முறை — பதில்கள் உள்ளூரில் உருவாக்கப்படுகின்றன.",
      "Quick Questions":"விரைவு கேள்விகள்","🌱 Soil Moisture":"🌱 மண் ஈரப்பதம்","💧 Irrigation":"💧 நீர்ப்பாசனம்",
      "🌾 Crops":"🌾 பயிர்கள்","☀️ Weather":"☀️ வானிலை","🧪 Fertilizer":"🧪 உரம்","⚙️ Motor":"⚙️ மோட்டார்",
      "🔌 ESP32":"🔌 ESP32","📊 Dashboard":"📊 டாஷ்போர்டு","Send ➤":"அனுப்பவும் ➤",
      "Language":"மொழி","English":"ஆங்கிலம்","Tamil":"தமிழ்","Hindi":"இந்தி"
    },
    hi: {
      "Home":"होम","Live Weather":"लाइव मौसम","Motor Selection":"मोटर चयन","Dashboard":"डैशबोर्ड",
      "Govt Schemes":"सरकारी योजनाएँ","Farm Calculator":"कृषि कैलकुलेटर","Smart Alerts":"स्मार्ट अलर्ट",
      "Motor":"मोटर","Irrigation":"सिंचाई","Schemes":"योजनाएँ","Calculator":"कैलकुलेटर",
      "IoT-Powered Farming Platform":"IoT आधारित कृषि प्लेटफ़ॉर्म","Next-Gen Farming.":"अगली पीढ़ी की खेती.",
      "Smarter Yields.":"बेहतर उपज.","Open Dashboard":"डैशबोर्ड खोलें","Explore Tools":"टूल्स देखें",
      "FARMING SUITE":"कृषि टूल्स","Integrated":"एकीकृत","Agri Tools":"कृषि टूल्स",
      "Everything you need to optimize field operations and water management.":"खेत संचालन और जल प्रबंधन को बेहतर बनाने के लिए आवश्यक सभी सुविधाएँ।",
      "Smart Irrigation":"स्मार्ट सिंचाई","IoT Control Hub":"IoT नियंत्रण केंद्र","ABOUT PLATFORM":"प्लेटफ़ॉर्म के बारे में",
      "About":"हमारे बारे में","SMART FARM DASHBOARD":"स्मार्ट फार्म डैशबोर्ड","Farm":"खेत",
      "Simple monitoring and irrigation control for your farm.":"आपके खेत के लिए सरल निगरानी और सिंचाई नियंत्रण।",
      "DEVICE":"डिवाइस","Connecting...":"कनेक्ट हो रहा है...","Soil Moisture":"मिट्टी की नमी",
      "Waiting for sensor":"सेंसर की प्रतीक्षा","Temperature":"तापमान","DHT11 temperature":"DHT11 तापमान",
      "Humidity":"आर्द्रता","DHT11 humidity":"DHT11 आर्द्रता","Motor Status":"मोटर स्थिति",
      "Waiting for controller":"कंट्रोलर की प्रतीक्षा","IRRIGATION":"सिंचाई","Motor Control":"मोटर नियंत्रण",
      "AUTO":"स्वचालित","MANUAL":"मैनुअल","Moisture Threshold":"नमी सीमा",
      "Motor turns ON below this level and OFF at or above it.":"इस स्तर से नीचे मोटर चालू होगी और इसके बराबर या ऊपर बंद होगी।",
      "Save Threshold":"सीमा सहेजें","Control the motor manually from the buttons below.":"नीचे दिए बटन से मोटर को मैन्युअल रूप से नियंत्रित करें।",
      "Turn ON":"चालू करें","Turn OFF":"बंद करें",
      "REAL-TIME FORECAST":"रीयल-टाइम मौसम पूर्वानुमान","Live Farm":"लाइव फार्म","Weather":"मौसम",
      "Check localized climate conditions to plan irrigation and harvesting.":"सिंचाई और कटाई की योजना बनाने के लिए स्थानीय मौसम की स्थिति देखें।",
      "Search":"खोजें","Fetching weather data...":"मौसम डेटा प्राप्त हो रहा है...","Wind Speed":"हवा की गति",
      "Feels Like":"महसूस होने वाला तापमान","FARM MONITORING":"फार्म निगरानी","Smart Farm Alerts":"स्मार्ट फार्म अलर्ट",
      "Refresh":"रिफ्रेश","Active Alerts":"सक्रिय अलर्ट","Critical":"गंभीर","Warnings":"चेतावनियाँ",
      "Farm Looks Good":"फार्म ठीक है","No important conditions require your attention right now.":"अभी आपके ध्यान की आवश्यकता वाली कोई महत्वपूर्ण स्थिति नहीं है।",
      "PUMP MATCHING ENGINE":"पंप चयन इंजन","Smart Motor Selection":"स्मार्ट मोटर चयन","Enter Farm Details":"फार्म विवरण दर्ज करें",
      "Farm Area (Acres)":"फार्म क्षेत्र (एकड़)","Water Required (Liters/Day)":"आवश्यक पानी (लीटर/दिन)","Budget (₹)":"बजट (₹)",
      "Recommend Motor":"मोटर सुझाएँ","Motor Recommendation":"मोटर सुझाव","Recommended Motor :":"अनुशंसित मोटर :",
      "Estimated Price :":"अनुमानित कीमत :","Recommended Brand :":"अनुशंसित ब्रांड :","Budget Status :":"बजट स्थिति :",
      "NATIONAL INITIATIVES":"राष्ट्रीय पहल","Government Agri Schemes":"सरकारी कृषि योजनाएँ","Learn More":"और जानें",
      "PM Fasal Bima Yojana":"PM फसल बीमा योजना","PM Krishi Sinchayee Yojana":"PM कृषि सिंचाई योजना",
      "Soil Health Card":"मृदा स्वास्थ्य कार्ड","e-NAM Platform":"e-NAM प्लेटफ़ॉर्म",
      "FINANCIAL & RESOURCE ESTIMATION":"वित्तीय और संसाधन अनुमान","Smart Farm Calculators":"स्मार्ट फार्म कैलकुलेटर",
      "Water Requirement":"पानी की आवश्यकता","Water Required Per Acre (Liters)":"प्रति एकड़ आवश्यक पानी (लीटर)",
      "Calculate Water":"पानी की गणना करें","Waiting for calculation...":"गणना की प्रतीक्षा...","Farm Expenses":"फार्म खर्च",
      "Seed Cost (₹)":"बीज लागत (₹)","Fertilizer Cost (₹)":"उर्वरक लागत (₹)","Labour Cost (₹)":"श्रम लागत (₹)",
      "Electricity Cost (₹)":"बिजली लागत (₹)","Other Expenses (₹)":"अन्य खर्च (₹)","Calculate Expense":"खर्च की गणना करें",
      "Profit Calculator":"लाभ कैलकुलेटर","Total Income (₹)":"कुल आय (₹)",
      "Your Smart Agriculture Assistant":"आपका स्मार्ट कृषि सहायक","Clear Chat":"चैट साफ़ करें",
      "AgriAI Demo Mode — Responses are generated locally.":"AgriAI डेमो मोड — उत्तर स्थानीय रूप से बनाए जाते हैं।",
      "Quick Questions":"त्वरित प्रश्न","🌱 Soil Moisture":"🌱 मिट्टी की नमी","💧 Irrigation":"💧 सिंचाई",
      "🌾 Crops":"🌾 फसलें","☀️ Weather":"☀️ मौसम","🧪 Fertilizer":"🧪 उर्वरक","⚙️ Motor":"⚙️ मोटर",
      "🔌 ESP32":"🔌 ESP32","📊 Dashboard":"📊 डैशबोर्ड","Send ➤":"भेजें ➤",
      "Language":"भाषा","English":"अंग्रेज़ी","Tamil":"तमिल","Hindi":"हिंदी"
    }
  };

  const normalize = s => String(s).replace(/\s+/g, " ").trim();

  function translateNode(node, dict) {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) return;
    const raw = normalize(node.nodeValue);
    if (!raw) return;
    if (dict[raw]) {
      node.nodeValue = node.nodeValue.replace(raw, dict[raw]);
    }
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "ta" ? "ta" : lang === "hi" ? "hi" : "en";

    document.querySelectorAll("[data-original-text]").forEach(el => {
      const original = el.getAttribute("data-original-text");
      el.textContent = dict[original] || original;
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      if (!n.parentElement?.hasAttribute("data-original-text")) {
        const original = normalize(n.nodeValue);
        if (original && !n.parentElement?.closest("#agriLanguageSwitcher")) {
          n.nodeValue = dict[original] || original;
        }
      }
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder], button[aria-label]").forEach(el => {
      const attr = el.hasAttribute("placeholder") ? "placeholder" : "aria-label";
      const original = el.getAttribute("data-original-" + attr) || el.getAttribute(attr);
      if (!el.getAttribute("data-original-" + attr)) el.setAttribute("data-original-" + attr, original);
      el.setAttribute(attr, dict[original] || original);
    });

    const title = document.title;
    if (!document.documentElement.dataset.originalTitle) {
      document.documentElement.dataset.originalTitle = title;
    }
    const originalTitle = document.documentElement.dataset.originalTitle;
    document.title = dict[originalTitle] || originalTitle;

    const selector = document.getElementById("agriLanguageSelect");
    if (selector) selector.value = lang;
    localStorage.setItem("agrinovaLanguage", lang);
  }

  function addSwitcher() {
    if (document.getElementById("agriLanguageSwitcher")) return;

    const box = document.createElement("div");
    box.id = "agriLanguageSwitcher";
    box.innerHTML = `
      <label for="agriLanguageSelect" class="agri-lang-label">🌐</label>
      <select id="agriLanguageSelect" aria-label="Language">
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
        <option value="hi">हिन्दी</option>
      </select>`;
    document.body.appendChild(box);

    const style = document.createElement("style");
    style.textContent = `
      #agriLanguageSwitcher{
        position:fixed;top:82px;right:18px;z-index:99999;
        display:flex;align-items:center;gap:6px;
        background:rgba(255,255,255,.96);padding:7px 9px;
        border:1px solid #dce9df;border-radius:12px;
        box-shadow:0 5px 18px rgba(18,61,36,.16);
        font-family:Arial,sans-serif;
      }
      #agriLanguageSwitcher select{
        border:0;outline:0;background:transparent;color:#123d24;
        font-weight:700;font-size:13px;cursor:pointer;
      }
      #agriLanguageSwitcher .agri-lang-label{font-size:16px;line-height:1}
      @media(max-width:700px){
        #agriLanguageSwitcher{top:72px;right:10px;padding:6px 8px}
        #agriLanguageSwitcher select{font-size:12px}
      }
    `;
    document.head.appendChild(style);

    document.getElementById("agriLanguageSelect").addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }

  function rememberOriginals() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const p = n.parentElement;
      if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(p.tagName)) return;
      const original = normalize(n.nodeValue);
      if (original && (translations.ta[original] || translations.hi[original])) {
        n.nodeValue = n.nodeValue.replace(original, original);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    addSwitcher();
    rememberOriginals();
    applyLanguage(localStorage.getItem("agrinovaLanguage") || "en");

    const observer = new MutationObserver(mutations => {
      const lang = localStorage.getItem("agrinovaLanguage") || "en";
      if (lang === "en") return;
      const dict = translations[lang] || {};
      mutations.forEach(m => m.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) translateNode(node, dict);
        else if (node.nodeType === Node.ELEMENT_NODE && !node.closest("#agriLanguageSwitcher")) {
          const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
          const list = [];
          while (walker.nextNode()) list.push(walker.currentNode);
          list.forEach(n => translateNode(n, dict));
        }
      }));
    });
    observer.observe(document.body, {childList:true, subtree:true});
  });
})();