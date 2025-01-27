// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamically create 'About' section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.innerHTML = `
        <h2>About Us</h2>
        <p>Welcome to Tech Blog! We're passionate about exploring the latest innovations in technology. From breakthroughs in quantum computing to the newest gadgets, we delve into topics that shape our future.</p>
    `;
    document.querySelector('main').appendChild(aboutSection);

    // Dynamically create 'Contact' section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.innerHTML = `
        <h2>Contact Us</h2>
        <p>Have questions, comments, or just want to say hello? We'd love to hear from you!</p>
        <form id="contact-form">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="5" required></textarea><br><br>
            
            <button type="submit">Send Message</button>
        </form>
    `;
    document.querySelector('main').appendChild(contactSection);

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
