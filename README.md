# 🌐 Personal Portfolio Website

A modern, responsive personal portfolio showcasing my skills, projects, and journey as a developer. Designed with a clean UI, smooth animations, and Web3Forms-powered contact functionality.

---

## ✨ Features
- Fully responsive and mobile-friendly  
- Smooth animations and interactive UI  
- Projects section with live demos  
- Web3Forms integration for secure email submissions  
- Fast, lightweight, and minimal design  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **Web3Forms** (for email/contact form)

---

## 📬 Contact Form (Web3Forms)
The contact form is powered by **Web3Forms**, allowing users to send messages directly without backend setup.

Example form structure:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
