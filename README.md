# Nikhil Kshirasagar — Personal Portfolio Website

A modern, high-performance personal brand and developer portfolio website for **Nikhil Kshirasagar** — Software Engineer specializing in Backend Systems, Full-Stack Development, and AI-Integrated Applications.

Built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**, following the layout, styling, and visual identity of the reference design.

---

## 🚀 Live Preview & Architecture

- **Visual Style:** Minimalist dark mode (`#050505` / `#05070d`) with subtle ambient gradients, cursor glow, interactive spotlight cards, and smooth scroll navigation.
- **Responsive Viewports:** Tested and optimized for Mobile (320px–480px), Tablet (481px–768px), Laptop (769px–1280px), and Desktop (1281px+).
- **SEO & Accessibility:** Fully semantic HTML5 landmarks, meta tags, Open Graph / Twitter previews, dynamic year generation, and accessible form controls.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS + Custom CSS tokens |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Hosting** | [Netlify](https://www.netlify.com/) (configured via `netlify.toml`) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg                   # Custom NK monogram favicon
│   ├── og-image.svg                  # Open Graph social sharing image
│   ├── Nikhil_Kshirasagar_Resume.pdf # Printable recruiter resume PDF
│   ├── resume/
│   │   └── Nikhil_Kshirasagar_Resume.pdf
│   └── images/
│       └── projects/
│           ├── stockpilot.svg        # StockPilot AI UI preview
│           ├── finsight.svg          # FinSight UI preview
│           └── code-editor-pro.svg   # Code Editor Pro Web IDE preview
├── src/
│   ├── components/
│   │   ├── About.jsx                 # About section, focus areas & verified stats
│   │   ├── AnimatedSection.jsx       # Smooth viewport entry wrapper
│   │   ├── BackgroundEffects.jsx     # Ambient background mesh & gradient orbs
│   │   ├── Contact.jsx               # Validated contact form & direct reach channels
│   │   ├── CursorGlow.jsx            # Dynamic spring cursor glow follower
│   │   ├── Education.jsx             # Degree, institution, CGPA & academic rigor
│   │   ├── Experience.jsx            # Internship, community leadership & journey timeline
│   │   ├── Footer.jsx                # Quick links, social handles & dynamic copyright
│   │   ├── Hero.jsx                  # Main introduction, rotating typewriter & core expertise
│   │   ├── Navbar.jsx                # Responsive navbar with desktop pill & mobile menu
│   │   ├── Projects.jsx              # Featured products with 15-point case study accordions
│   │   ├── Resume.jsx                # Recruiter snapshot card & download/preview actions
│   │   ├── RotatingRole.jsx          # Lightweight typewriter role rotator
│   │   ├── ScrollProgress.jsx        # Spring scroll progress indicator bar
│   │   ├── SectionHeader.jsx         # Uniform typography & eyebrow headings
│   │   └── SpotlightCard.jsx         # Mouse-tracking interactive glass card
│   ├── data/
│   │   └── portfolio.js              # Centralized data store for all portfolio content
│   ├── App.css                       # Design tokens, typography & button styles
│   ├── App.jsx                       # Root component composition
│   ├── index.css                     # Global base styles
│   └── main.jsx                      # App entry point
├── .env.example                      # Safe template for optional external services
├── netlify.toml                      # Netlify build and SPA redirect settings
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v20+ (recommended v20.18+ or v22+)
- **npm**: v10+

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Run Linting
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customization Guide

### 1. Updating Portfolio Content
All text, skills, projects, work experience, and personal links are centralized in a single file:
👉 [`src/data/portfolio.js`](file:///Users/nikhilkshirasagar/portfolio/src/data/portfolio.js)

- **Personal Details:** Edit the `profile` object (`name`, `role`, `email`, `phone`, `location`, `github`, `linkedin`, `leetcode`).
- **Skills Groups:** Update the `skillGroups` array to add or categorize technologies.
- **Projects:** Add or edit entries in the `projects` array. Each project includes title, description, verified metrics, tech stack, and a 15-point product case study.
- **Work Experience & Leadership:** Update the `experience`, `leadership`, and `education` arrays.

### 2. Updating Resume PDF
Place your updated resume PDF in:
- `public/resume/Nikhil_Kshirasagar_Resume.pdf` (or `public/Nikhil_Kshirasagar_Resume.pdf`).

### 3. Adding Project Screenshots
To replace the SVG previews with live UI screenshots:
1. Place image files (PNG/JPG/WebP/SVG) in `public/images/projects/`.
2. Update the `image` field of the project in `src/data/portfolio.js`.

### 4. Configuring the Contact Form
By default, the contact form submits via [FormSubmit](https://formsubmit.co/) directly to `nikkhil.theguru@gmail.com` with client-side validation and duplicate-submission protection.
- If network requests fail, the form automatically offers a 1-click fallback to the user's default email client (`mailto:`).
- For EmailJS integration, copy `.env.example` to `.env` and fill in:
  ```env
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```

---

## 🌐 Deploying to Netlify

This project includes a pre-configured [`netlify.toml`](file:///Users/nikhilkshirasagar/portfolio/netlify.toml).

### Option A: Connect GitHub Repository (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete portfolio for Nikhil Kshirasagar"
   git branch -M main
   git remote add origin https://github.com/nikhhh12/portfolio.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Select your portfolio repository. Netlify will auto-detect the build configuration:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy Site**.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 📄 License

Created by **Nikhil Kshirasagar**. All rights reserved.
