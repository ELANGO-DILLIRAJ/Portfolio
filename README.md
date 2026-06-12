# Spotlight@Elango — Personal Portfolio

A sleek, dark-themed, multi-page personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features an interactive canvas particle background, glassmorphic UI design, animated skill bars, and a fully responsive layout.

---

## 🌐 Live Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero profile, academic timeline, certification previews, and a contact form |
| **Technical Skills** (`tech-skills.html`) | Skills categorized under AI, Mathematics, and Programming with animated progress bars |
| **Soft Skills** (`soft-skills.html`) | Leadership, technical speaking, and public speaking showcases |
| **Projects & Certifications** (`certifications-projects.html`) | Project cards and deep-dive certification takeaways with practical usage |
| **Personal Interests** (`interests.html`) | Interactive gallery of hobbies and passions |

---

## ✨ Features

- 🎨 **Dark Glassmorphic Theme** — Semi-transparent cards with `backdrop-filter: blur()`, glowing cyan/purple accents
- 🌌 **Interactive Particle Network** — Canvas-based ambient background that reacts to mouse movement
- ⌨️ **Typing Effect** — Dynamic hero tagline cycling through multiple phrases
- 📊 **Animated Skill Bars** — Progress bars that animate on scroll via `IntersectionObserver`
- 📱 **Fully Responsive** — Optimized for Desktop, Tablet, and Mobile viewports
- 🧭 **Multi-Page Navigation** — Clean page-based architecture with active link highlights
- 📜 **Scroll Reveal Animations** — Content fades in as you scroll down
- 📬 **Contact Form** — Glassmorphic form with client-side validation

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic page structure and SEO metadata |
| **CSS3** | Custom properties, Flexbox/Grid, glassmorphism, animations, responsive breakpoints |
| **JavaScript** | Canvas particle system, typing effect, scroll observers, form handling |
| **Google Fonts** | Outfit (headings), Inter (body), Fira Code (labels/code) |

---

## 📂 Project Structure

```
Portfolio/
├── index.html                  # Homepage
├── tech-skills.html            # Technical Skills page
├── soft-skills.html            # Soft Skills page
├── certifications-projects.html # Projects & Certifications page
├── interests.html              # Personal Interests page
├── styles.css                  # Unified stylesheet & design system
├── app.js                      # Shared JavaScript (particles, animations, nav)
├── README.md
└── assets/
    ├── profile.jpg             # Profile photo
    └── certificates/
        ├── udemy-genai.jpg
        ├── simplilearn-copilot.jpg
        ├── guvi-chatgpt.png
        ├── simplilearn-adv-genai.png
        └── google-cloud-genai.png
```

---

## 🚀 Getting Started

No build tools or frameworks required. Simply open `index.html` in any modern browser:

```bash
# Clone the repository
git clone https://github.com/ELANGO-DILLIRAJ/Portfolio.git

# Open in browser
start index.html
```

Or use a local server for the best experience:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080c14` (Deep Midnight Slate) |
| Card BG | `rgba(15, 23, 42, 0.55)` with `backdrop-filter: blur(12px)` |
| Accent Cyan | `#00f2fe` |
| Accent Purple | `#7f00ff` |
| Text Primary | `#f8fafc` |
| Text Secondary | `#94a3b8` |
| Border Radius | `8px / 14px / 20px / 28px` |

---

## 👤 About

**Elango Dilliraj**
B.Tech — Artificial Intelligence & Data Science
J.N.N Institute of Engineering, Chennai

- 📧 [n.d.elango2007@gmail.com](mailto:n.d.elango2007@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/elangodilliraj)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).