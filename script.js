tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '#0EA5E9'
          },
          boxShadow: {
            soft: '0 10px 30px rgba(0,0,0,.08)'
          }
        }
      }
    };

(function () {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })();

// ===== SET CURRENT YEAR IN FOOTER =====
    // Function: setCurrentYear()
    // Purpose: Display current year in copyright notice
    document.getElementById('year').textContent = new Date().getFullYear();

    // ===== THEME TOGGLE FUNCTIONALITY =====
    // Function: toggleTheme()
    // Purpose: Switch between light and dark mode
    // Triggers: Click on theme toggle button
    // Storage: Saves preference to localStorage
    document.getElementById('themeToggle').addEventListener('click', () => {
      const root = document.documentElement;
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // ===== APPOINTMENT FORM SUBMISSION =====
    // Function: handleFormSubmit(e)
    // Purpose: Process appointment form and show confirmation
    // Triggers: Form submit event
    // Features: Form validation, success message display
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Collect form data
      const formData = {
        full_name: document.getElementById('full_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service_type: document.getElementById('service_type').value,
        preferred_date: document.getElementById('preferred_date').value,
        message: document.getElementById('message').value
      };

      // Simulate form submission (in production, send to backend)
      console.log('Appointment Request:', formData);

      // Show success message
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = '✓ Request Sent!';
      submitButton.classList.add('opacity-75');
      submitButton.disabled = true;

      // Reset form after 2 seconds
      setTimeout(() => {
        this.reset();
        submitButton.textContent = originalText;
        submitButton.classList.remove('opacity-75');
        submitButton.disabled = false;

        // Show confirmation message
        alert('Thank you! We\'ve received your appointment request. We\'ll contact you shortly to confirm.');
      }, 2000);
    });

    // ===== SMOOTH SCROLL BEHAVIOR =====
    // Function: Smooth scroll to anchor links
    // Purpose: Enhance user experience with smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });