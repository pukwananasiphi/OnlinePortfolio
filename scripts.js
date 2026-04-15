// Main JavaScript file for Nasiphi Pukwana's Portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }


  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact-form");
    contactForm.addEventListener("submit", function(e) {
        console.log("Submit button clicked!");
    });
});

async function chatbotReply(userInput) {
    const botResponse = await getBotResponse(userInput);
    return botResponse;
}

  
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Scroll Animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  function checkReveal() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', checkReveal);
  checkReveal();
  
  // Animated Skills
  const animateSkills = function() {
    const skills = document.querySelectorAll('.animated-skill');
    
    skills.forEach(skill => {
      const percentage = skill.getAttribute('data-percentage');
      const bar = skill.querySelector('.skill-bar');
      
      if (bar) {
        setTimeout(() => {
          bar.style.width = percentage + '%';
        }, 300);
      }
    });
  };
  
  animateSkills();
  
  // Image Slideshow
  const slideshow = document.querySelector('.slideshow');
  
  if (slideshow) {
    const slides = slideshow.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // Hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    
    // Function to switch slides
    function nextSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
    
    // Set interval for slideshow
    setInterval(nextSlide, 3000);
  }



  // Project Category Filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  // Default to first category active
  if (categoryBtns.length > 0) {
    categoryBtns[0].classList.add('active');
    filterProjects(categoryBtns[0].dataset.category);
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      filterProjects(btn.dataset.category);
    });
  });

  function filterProjects(category) {
    projectCards.forEach(card => {
      const cardCategory = card.dataset.category;
      if (cardCategory === category) {
        card.classList.remove('filtered-out');
      } else {
        card.classList.add('filtered-out');
      }
    });
  }

  // Active Nav Link
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (currentLocation === linkPath || 
        (currentLocation === '/' && linkPath === '/index.html') ||
        (currentLocation.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
  
});

