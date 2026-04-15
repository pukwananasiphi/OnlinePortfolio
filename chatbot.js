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

  // Web Development Focus
if (msg.includes("web") || msg.includes("frontend") || msg.includes("backend")) {
  return "Nasiphi is passionate about web development, building responsive, user-friendly applications using modern tools like JavaScript, Flask, and Supabase 🌐✨";
}

if (msg.includes("frontend")) {
  return "She enjoys crafting clean and interactive user interfaces using HTML, CSS, TailwindCSS, and JavaScript 🎨";
}

if (msg.includes("backend") || msg.includes("api")) {
  return "On the backend, she builds scalable systems using Flask and integrates APIs to create dynamic applications ⚙️";
}

// Data Analytics Focus
if (msg.includes("data") || msg.includes("analytics")) {
  return "Nasiphi is growing her data analytics skills — working with datasets, dashboards, and insights to support decision-making 📊";
}

if (msg.includes("excel") || msg.includes("spreadsheet")) {
  return "She uses Excel for data cleaning, analysis, and reporting — including formulas, dashboards, and automation 📈";
}

if (msg.includes("power bi") || msg.includes("dashboard")) {
  return "She’s exploring Power BI to build interactive dashboards that turn raw data into meaningful insights 📊✨";
}

if (msg.includes("sql") || msg.includes("database")) {
  return "She works with databases like Supabase, learning how to structure, query, and manage data effectively 🗄️";
}

// AI & Automation
if (msg.includes("automation")) {
  return "Automation is one of her strengths — she uses tools like Power Automate to streamline workflows and reduce manual effort ⚡";
}

if (msg.includes("ai project") || msg.includes("machine learning")) {
  return "She’s building AI-driven projects, exploring concepts like sentiment analysis and generative models 🤖";
}

if (msg.includes("chatbot")) {
  return "She builds intelligent chatbots that combine logic, personality, and user-focused design — just like this one 💬✨";
}

if (msg.includes("generative ai")) {
  return "She’s actively learning Generative AI, experimenting with models and real-world applications 🚀";
}

// Problem Solving & Thinking
if (msg.includes("problem") || msg.includes("solve")) {
  return "She approaches problems with a solution-driven mindset — breaking them down and building step-by-step fixes 🧠";
}

if (msg.includes("logic") || msg.includes("thinking")) {
  return "Her logical thinking is one of her strongest assets — especially when designing systems and debugging code 💡";
}

// Work Ethic
if (msg.includes("work ethic") || msg.includes("discipline")) {
  return "She’s consistent, disciplined, and committed to growth — always showing up and improving daily 💪";
}

if (msg.includes("learn") || msg.includes("learning")) {
  return "She’s a fast learner who adapts quickly to new tools, technologies, and environments 📚";
}

// Collaboration & Teamwork
if (msg.includes("team") || msg.includes("collaborate")) {
  return "She thrives in team environments — communicating clearly and contributing meaningfully to shared goals 🤝";
}

if (msg.includes("communication")) {
  return "Her communication skills help bridge technical and non-technical gaps effectively 🗣️";
}

// Career Positioning
if (msg.includes("hire") || msg.includes("why hire")) {
  return "Nasiphi brings a mix of technical skill, adaptability, and passion for impact — making her a valuable addition to any forward-thinking team 💼";
}

if (msg.includes("intern") || msg.includes("experience")) {
  return "She is gaining hands-on experience through internships and programs, applying her skills to real-world challenges 🚀";
}

if (msg.includes("portfolio")) {
  return "Her portfolio showcases real-world projects focused on AI, automation, and web development — built with purpose and precision 💻";
}

// Growth & Development
if (msg.includes("growth") || msg.includes("improve")) {
  return "She is constantly improving her skills — especially in AI, data analytics, and full-stack development 📈";
}

if (msg.includes("future skills")) {
  return "She’s focusing on future-ready skills like AI engineering, data analytics, and scalable system design 🔮";
}

// Tools & Technologies
if (msg.includes("tools") || msg.includes("technologies")) {
  return "She works with tools like Python, JavaScript, Flask, Supabase, Power BI, and Power Automate 🛠️";
}

if (msg.includes("python")) {
  return "Python is one of her core languages — used for automation, AI, and backend development 🐍";
}

if (msg.includes("javascript")) {
  return "JavaScript helps her bring web applications to life with dynamic and interactive features ⚡";
}

// Real-world Impact
if (msg.includes("impact")) {
  return "She’s passionate about building solutions that create real impact — especially in education and mental health 💙";
}

if (msg.includes("real world")) {
  return "Her projects are designed with real-world use in mind — solving practical problems with smart tech 💡";
}

// Leadership Potential
if (msg.includes("leader") || msg.includes("leadership")) {
  return "She is developing leadership skills by taking initiative, mentoring peers, and driving projects forward 🌟";
}

// Adaptability
if (msg.includes("adapt") || msg.includes("flexible")) {
  return "She adapts quickly to new challenges and technologies — a key strength in fast-changing tech environments 🔄";
}

// Confidence & Growth Mindset
if (msg.includes("confidence")) {
  return "She’s building confidence through consistent learning, practice, and real-world application 💫";
}

if (msg.includes("mindset")) {
  return "Her growth mindset pushes her to keep learning, experimenting, and evolving every day 🌱";
}

// Availability
if (msg.includes("available") || msg.includes("opportunity")) {
  return "She is open to opportunities in AI, data analytics, and web development — ready to contribute and grow 🚀";
}

// Default career-focused fallback
if (msg.includes("career") || msg.includes("work")) {
  return "Nasiphi is building a strong career at the intersection of AI, data analytics, and web development — focused on impact and innovation 💼✨";
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