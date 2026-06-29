# 🎬 Netflix Clone

A front-end clone of the Netflix landing page, built using **HTML, CSS, and vanilla JavaScript**. This project recreates the look and feel of Netflix's homepage — hero banner, trending carousel, feature highlights, and an interactive FAQ section — and is fully responsive across desktop, tablet, and mobile screens.

## 🔗 Live Demo
https://netflix-clone-liard-chi-46.vercel.app/

## ✨ Features

- **Hero Section** – Full-width banner with a custom SVG curved divider, gradient overlay, and a "Get Started" email signup form
- **Navbar** – Logo, language selector, and sign-in button
- **Trending Now Carousel** – Horizontally scrollable movie cards with rank numbers and poster images, navigated using left/right arrow buttons that auto-hide at the start/end of the scroll
- **More Reasons to Join** – Highlight cards showcasing key Netflix features (multi-device support, downloads, kids profiles, etc.)
- **Accordion-style FAQ Section** – Click a question to expand its answer; clicking another question closes the previous one automatically
- **Fully Responsive Design** – Custom media queries for tablets (≤1024px, ≤768px) and mobile (≤480px) screens
- **Smooth Scrolling & Hover Animations** – Card scaling on hover and smooth scroll behavior on the carousel

## 🛠️ Built With

- **HTML5** – Semantic page structure
- **CSS3** – Flexbox layout, gradients, custom SVG curves, responsive media queries
- **JavaScript (Vanilla)** – DOM manipulation for the carousel arrows and FAQ accordion (no frameworks or libraries used)

## 📁 Project Structure

```
Netflix-clone/
├── images/          # Logos, posters, and icons used across the site
├── index.html       # Main page markup
├── style.css        # All styling and responsive media queries
└── script.js        # Carousel scroll logic and FAQ accordion logic
```

## 🚀 Getting Started

No build tools or dependencies are required — this is a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Daksh-Garg007/Netflix-clone.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd Netflix-clone
   ```
3. **Open `index.html` in your browser**

   You can simply double-click `index.html`, or use a local development server such as the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for live reloading.

## 📱 Responsive Breakpoints

| Breakpoint        | Target Device |
|-------------------|----------------|
| `max-width: 1024px` | Tablets (landscape) |
| `max-width: 768px`  | Tablets (portrait) |
| `max-width: 480px`  | Mobile phones |

## 🧩 How It Works

- **Carousel logic** (`script.js`) listens to the `scroll` event on `.trending-container` to show/hide the left and right arrows depending on scroll position, and uses `scrollBy()` for smooth horizontal navigation.
- **FAQ logic** (`script.js`) tracks whether a clicked question's answer is already open, closes all other open answers, and toggles the clicked one — giving a single-open accordion behavior.

## 📌 Notes

This project is for **educational purposes only**, built to practice HTML/CSS layout techniques and basic JavaScript DOM interaction. It is **not affiliated with or endorsed by Netflix**, and all Netflix branding/imagery used belongs to its respective owner.

## 🙋‍♂️ Author

**Daksh Garg**
GitHub: [@Daksh-Garg007](https://github.com/Daksh-Garg007)
