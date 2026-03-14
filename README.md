# Maximus Chatbot Prototype 🤖

A premium, embeddable customer support chatbot widget designed for the Maximus website. This prototype demonstrates a modern AI-like interface using vanilla HTML, CSS, and JavaScript, featuring a comprehensive knowledge base of Maximus services and contact information.

## 🚀 Demo
The prototype includes a mock Maximus homepage to demonstrate the chatbot in a realistic context.

- **URL**: [https://github.com/Sumangupta3/chat-bot-prototype](https://github.com/Sumangupta3/chat-bot-prototype)

## ✨ Features
- **Premium UI**: Sleek glassmorphism design with Maximus brand colors (#00263E navy, #0078D4 blue).
- **Fluided Animations**: Smooth open/close transitions, pulse effects on the toggle button, and typing indicators.
- **Smart Knowledge Base**: Detailed information on:
  - **Technology Services** (AI, Cybersecurity, Cloud, Digital Modernization)
  - **Customer Experience** (Contact Centers, Digital Government)
  - **Health Services** (Clinical, Eligibility & Enrollment)
  - **Program Services** (Case Management, Consulting)
  - **Contact Information** (Department-specific emails and phone numbers)
  - **Careers** (Job portal links and HR contacts)
- **Interactive Elements**:
  - **Quick Action Chips**: One-tap access to common topics.
  - **Inline Contact Form**: Submit inquiries directly within the chat window with real-time validation.
- **Fully Responsive**: Optimized for both desktop and mobile viewports.

## 🛠️ Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Layout, glassmorphism, and keyframe animations.
- **JavaScript (ES6+)**: Custom chatbot engine with keyword matching and state management.
- **Google Fonts**: Inter.

## 🏃 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sumangupta3/chat-bot-prototype.git
   cd chat-bot-prototype
   ```

2. **Start a local server**:
   You can use Python's built-in server:
   ```bash
   python3 -m http.server 8080
   ```

3. **View the prototype**:
   Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🌐 Deployment (GitHub Pages)

To host this prototype for free using GitHub Pages:

1. Go to your repository on GitHub: **[chat-bot-prototype](https://github.com/Sumangupta3/chat-bot-prototype)**.
2. Click on **Settings** (top tab).
3. Select **Pages** from the left sidebar.
4. Under **Build and deployment > Branch**, ensure `main` branch and `/ (root)` folder are selected.
5. Click **Save**.
6. Wait a minute, and GitHub will provide a URL (usually `https://sumangupta3.github.io/chat-bot-prototype/`).

## 🧩 How to Embed
To add this chatbot to any website, simply include the CSS and JS files before the closing `</body>` tag:

```html
<!-- Add the stylesheet -->
<link rel="stylesheet" href="path/to/style.css">

<!-- Add the script -->
<script src="path/to/chatbot.js"></script>
```

## 📂 Project Structure
- `index.html`: The main entry point featuring the mock Maximus site.
- `style.css`: All premium UI and animation styles.
- `chatbot.js`: The chatbot logic, knowledge base, and form handling.

---
*Created as a prototype for Maximus service integration.*
