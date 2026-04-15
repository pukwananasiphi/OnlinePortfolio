 document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chatIcon');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.querySelector('.close-chatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessageBtn = document.getElementById('sendMessage');

    // Chatbot toggle
    chatIcon.addEventListener('click', () => {
      chatbotContainer.classList.add('active');
      document.body.classList.add('chat-open');
    });

    closeChatbot.addEventListener('click', () => {
      chatbotContainer.classList.remove('active');
      document.body.classList.remove('chat-open');
    });

  function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("how are you") || msg.includes("how do you feel")) {
    return "I'm just a little code, but I feel happy helping you explore Nasiphi’s world. 💙";
  }

  if (msg.includes("nasiphi") && msg.includes("feel")) {
    return "From what I know, Nasiphi is passionate, dedicated, and deeply curious. Her work shows her heart in every detail 💫";
  }

  if (msg.includes("who is nasiphi") || msg.includes("nasiphi pukwana")) {
  return "Nasiphi Pukwana is a passionate, driven tech talent from South Africa with a love for AI, automation, and uplifting others. 💙";
 }   


  if (msg.includes("background") || msg.includes("where did") || msg.includes("study")) {
    return "She studied at Walter Sisulu University, tutored at Walter Sisulu University, and competed at CHPC — always learning and growing. 📚💪";
  }

  if (msg.includes("skills") || msg.includes("good at") || msg.includes("tech")) {
    return "She’s skilled in JavaScript, Python, Supabase, Flask, and automation tools like Power Automate. A real tech gem 💻✨";
  }

  if (msg.includes("capaciti")) {
    return "Nasiphi is thriving in the CAPACITI program, building systems like a Digital Attendance app with real-world tools 💼";
  }

  if (msg.includes("inspire") || msg.includes("motivate")) {
    return "She inspires others by showing up, learning fast, and leading by example. Every day is a chance to grow 🌻";
  }

  if (msg.includes("challenges") || msg.includes("overcome") || msg.includes("struggle")) {
    return "She’s faced obstacles like imposter syndrome and complex tech stacks, but she keeps rising. 🌄 That’s her strength.";
  }

  if (msg.includes("dream") || msg.includes("goal")) {
    return "Her dream is to lead in AI and build solutions that improve lives — especially in mental health and education 💡🧠";
  }

  if (msg.includes("bye") || msg.includes("goodbye")) {
    return "Take care, and thank you for exploring Nasiphi’s journey with me. You're always welcome back 💙";
  }

  if (msg.includes("thank")) {
    return "You're very welcome! I'm here to guide you through Nasiphi’s world anytime 🌟";
  }
   if (msg.includes("how are you") || msg.includes("how do you feel")) {
    return "I feel excited to tell you about Nasiphi — a woman in tech who's quietly building something amazing 🌻💡";
  }

  // Who is Nasiphi?
  if (msg.includes("who is nasiphi") || msg.includes("nasiphi pukwana")) {
    return "Nasiphi Pukwana is a passionate, driven tech talent from South Africa with a love for AI, automation, and uplifting others. 💙";
  }

  // Tutorship
  if (msg.includes("tutor") || msg.includes("teaching") || msg.includes("wsu")) {
    return "She was a tutor at Walter Sisulu University (WSU), bridging the gap between students and lecturers — she truly believes in sharing knowledge 🤝📘";
  }

  // CAPACITI top candidate
  if (msg.includes("capaciti") && msg.includes("top")) {
    return "Yes! She was recognised as one of the **Top 2 candidates** in her CAPACITI cohort for her dedication, growth, and technical excellence 💪🎖️";
  }

  // What is CAPACITI
  if (msg.includes("capaciti")) {
    return "CAPACITI is a digital skills development programme, and Nasiphi is thriving in it — building real-world apps, mastering Supabase, Python, and more 🚀";
  }

  // Competitions
  if (msg.includes("competition") || msg.includes("chpc"))  {
    return "She participated in the CHPC competition — representing her institution in a high-performance computing challenge. She's not afraid to step up 💻🔥";
  }

  // Hackathons
  if (msg.includes("hackathon")) {
    return "Hackathons are her jam! She’s joined AI-focused challenges, pushing her limits to build smart, ethical, and creative tech solutions 💡⚙️";
  }

  // Projects
  if (msg.includes("project") || msg.includes("build")) {
    return "Her standout project is a CAPACITI Digital Attendance System with real-time QR scanning, Supabase integration, analytics, and full mobile support 📱📊";
  }

  // Tech stack / skills
  if (msg.includes("skills") || msg.includes("stack") || msg.includes("tools")) {
    return "Her toolbox includes JavaScript, Python, Flask, Supabase, TailwindCSS, Power Automate, and she's diving into Generative AI and Power BI 💻🧠";
  }

  // AI work
  if (msg.includes("ai") || msg.includes("artificial intelligence")) {
    return "She's exploring AI through projects like sentiment-aware chatbots, Python quizzes, and Variational Autoencoders — the future is bright 🤖✨";
  }

  // Career goals
  if (msg.includes("dream") || msg.includes("goal") || msg.includes("future")) {
    return "Her dream is to use AI and automation to solve real-world problems — especially in education, mental health, and youth empowerment 🧠❤️";
  }

  // Challenges
  if (msg.includes("challenge") || msg.includes("overcome")) {
    return "She’s overcome imposter syndrome, technical blockers, and burnout. But her resilience and passion keep pushing her forward. 🌄";
  }

  // Inspirational tone
  if (msg.includes("inspire") || msg.includes("motivate")) {
    return "She inspires others by being authentic, consistent, and always learning. Her journey is proof that growth comes from showing up every day 💫";
  }

  // Friendly responses
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hey there! 👋 Curious about Nasiphi's tech journey, projects, or achievements?";
  }

  if (msg.includes("thank")) {
    return "You're welcome! 😊 I'm here to help you understand Nasiphi's amazing journey.";
  }

  if (msg.includes("bye") || msg.includes("goodbye")) {
    return "Farewell for now 🌈 — and remember, great things come from consistent effort. Just like Nasiphi’s story.";
  }


  // Default
  return "That’s a beautiful question — I'm still learning how to answer it, but I’d love to help. Try asking about Nasiphi’s journey, goals, or projects 🌿";
}


    function addMessage(content, className) {
      const message = document.createElement('div');
      message.classList.add('chatbot-message', className);
      message.textContent = content;
      chatbotMessages.appendChild(message);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    async function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;

      addMessage(message, 'user-message');
      chatbotInput.value = '';

      const botTyping = document.createElement('div');
      botTyping.classList.add('chatbot-message', 'bot-message');
      botTyping.textContent = 'Typing...';
      chatbotMessages.appendChild(botTyping);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

      setTimeout(() => {
        const reply = getBotReply(message);
        chatbotMessages.removeChild(botTyping);
        addMessage(reply, 'bot-message');
      }, 600);
    }

    sendMessageBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  });