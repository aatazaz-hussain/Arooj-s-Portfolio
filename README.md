# Arooj Kanwal — Video Editor & Creative Designer Portfolio

A modern, cinematic and responsive personal portfolio website for **Arooj Kanwal**, showcasing video editing, creative design, motion graphics, product advertisements, documentary-style storytelling and short-form content.

The portfolio is designed with a **dark navy + electric blue visual identity**, smooth animations, interactive project filtering, video previews and a responsive layout for desktop, tablet and mobile devices.

---

## ✨ Overview

This portfolio website presents Arooj Kanwal's creative work through an immersive, motion-focused experience.

It includes:

* 🎬 Video editing portfolio
* 🎞️ Cinematic reels
* 📽️ Documentary projects
* 🧴 Product advertisements
* 👗 Fashion brand advertisements
* 📢 Promotional videos
* 🎨 Motion graphics
* 🎵 Sound-focused editing
* 🌈 Color grading
* ⚡ Interactive animations
* 🖱️ 3D hover effects
* 🎥 Local video previews
* 🔍 Project filtering
* 📱 Responsive mobile design
* 💼 Hiring and collaboration section

---

# 🚀 Features

## 1. Interactive Hero Section

The landing section introduces Arooj Kanwal as:

> Video Editor • Creative Designer

The hero section includes:

* Animated background
* Glowing particles
* Electric-blue visual effects
* Animated orbiting elements
* Interactive cursor glow
* 3D tilt interaction
* Call-to-action buttons
* Portfolio statistics

### Hero CTA

Visitors can:

* View the portfolio
* Explore available work
* Navigate directly to the contact section

---

## 2. Responsive Navigation

The website includes a fixed glassmorphism navigation bar.

Navigation sections:

* Home
* Work
* Tools
* About
* Process
* Contact

The navigation automatically adapts for smaller screens.

---

## 3. Animated Scroll Progress

A thin progress bar appears at the top of the page.

It dynamically indicates how far the visitor has scrolled through the portfolio.

---

## 4. Portfolio Showcase

The **Selected Work** section contains the main creative projects.

Current projects include:

### Luxury Lifestyle Reel

**Category:**

* Reel
* Cinematic

**Format:**

* 9:16

**Focus:**

* Short-form editing
* Music synchronization
* Clean cuts
* Zoom effects
* Luxury visual pacing

---

### Cinematic Travel Reel

**Category:**

* Reel
* Cinematic

**Format:**

* 9:16

**Focus:**

* Slow motion
* Speed ramps
* Cinematic grading
* Atmospheric storytelling

---

### Short Documentary

**Category:**

* Documentary
* Cinematic

**Format:**

* 16:9

**Focus:**

* Narration
* B-roll
* Emotional sequencing
* Storytelling
* Sound design

---

### CONATURAL Serum Product Advertisement

**Category:**

* Product
* Cinematic

**Focus:**

* Product visualization
* Macro shots
* Liquid visuals
* Cinematic lighting
* Premium pacing
* Color grading

---

### Fashion Brand Advertisement

**Category:**

* Promotional
* Motion Graphics

**Format:**

* 9:16

**Focus:**

* Editorial composition
* Cut-out models
* Typography
* Kinetic motion
* Fashion advertising

---

### Fashion Brand Promotional Video

**Category:**

* Promotional
* Motion Graphics

**Format:**

* 16:9

**Focus:**

* Fashion footage
* Commercial editing
* Typography
* Motion graphics
* Brand storytelling

---

### Documentary

**Category:**

* Documentary

**Format:**

* 16:9

**Focus:**

* Narration
* Atmospheric B-roll
* Music
* Sound design
* Story-driven editing

---

### Video Editing Showreel

**Category:**

* Showreel
* Motion Graphics

**Duration:**

* Approximately 35 seconds

The showreel demonstrates:

* Color grading
* Slow motion
* Speed ramps
* Reverse effects
* Beat synchronization
* Transitions
* Motion graphics
* Sound design
* Creative editing

---

# 🎯 Portfolio Filtering

Visitors can filter projects according to category.

Available filters:

* All
* Reels
* Cinematic
* Documentary
* Product
* Promotional
* Motion Graphics
* Showreel

The filtering system is implemented using JavaScript and does not require an external library.

---

# 🎥 Video System

The portfolio uses local MP4 files instead of externally hosted videos.

Videos are loaded dynamically when they approach the visitor's viewport.

This helps reduce unnecessary initial loading.

### Video functionality includes:

* Lazy loading
* Autoplay while visible
* Pause when leaving viewport
* Hover playback
* Sound on hover
* Full video modal
* Video controls
* Responsive video sizing
* Error detection

---

# 🖼️ Video Preview System

Each portfolio card contains a video preview.

Videos are initially not loaded immediately.

The JavaScript detects when a video approaches the viewport and then loads it.

This is implemented using:

```javascript
IntersectionObserver
```

This approach helps improve page performance when multiple large MP4 files are included.

---

# 🔍 Project Modal

Clicking a portfolio project opens a full-screen modal.

The modal provides:

* Large video player
* Video controls
* Sound
* Project title
* Playback status
* Close button

The modal can be closed by:

* Clicking the close button
* Clicking outside the modal
* Pressing `Escape`

---

# 🛠️ Creative Tools

The portfolio highlights three primary creative tools:

## Canva

Used for:

* Social media graphics
* Presentations
* Promotional designs
* Branded visuals

## Photoshop

Used for:

* Image editing
* Thumbnail design
* Photo manipulation
* Advertising creatives

## CapCut

Used for:

* Video editing
* Short-form content
* Transitions
* Effects
* Sound design
* Cinematic storytelling
* Motion graphics

---

# 👩‍🎨 About

The About section introduces:

**Arooj Kanwal**

**Role:**

> Video Editor & Creative Designer

The section highlights skills including:

* Video Editing
* Reels
* Color Grading
* YouTube Editing
* Product Ads
* Motion Graphics
* Sound Design
* Visual Storytelling

It also communicates availability for:

* Job opportunities
* Internships
* Professional collaborations

---

# 🔄 Creative Workflow

The website presents a four-stage editing workflow.

## 01 — Discover

Understand:

* The idea
* Target audience
* Desired result

## 02 — Plan

Shape:

* Footage selection
* Pacing
* References
* Visual direction

## 03 — Create

Edit:

* Cutting
* Animation
* Color grading
* Sound mixing
* Visual refinement

## 04 — Deliver

Polish and export:

* Platform-ready video
* Clean final version
* Appropriate formatting

---

# 📩 Contact Section

The website includes a hiring and collaboration section.

Visitors can select:

* Job Opportunity
* Internship
* Professional Collaboration

The form currently works as a **front-end demo**.

At the moment, it does not send emails to a server or database.

When submitted, the button temporarily changes to:

> Inquiry Ready ✓

To make the form actually send messages, a backend or form service needs to be connected.

---

# 🎨 Design System

The website uses a dark futuristic visual style.

### Primary Background

```text
#030b18
```

### Secondary Background

```text
#071426
```

### Primary Blue

```text
#087cff
```

### Cyan

```text
#00cfff
```

### White

```text
#f7fbff
```

### Muted Text

```text
#9fb0c4
```

The overall visual language uses:

* Dark navy backgrounds
* Electric blue highlights
* Cyan glow
* Glassmorphism
* Soft gradients
* Subtle borders
* Particle effects
* Motion graphics
* Cinematic lighting

---

# ✨ Animation & Interaction

The website contains several CSS and JavaScript animations.

### Included effects

* Scroll reveal
* Cursor glow
* Floating HUD elements
* Animated particles
* Orbiting circles
* Moving light sweep
* Marquee text
* Hover animations
* 3D tilt cards
* Video hover playback
* Modal transitions
* Scroll progress indicator
* Button shine effects

---

# 📱 Responsive Design

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive breakpoints are implemented using CSS media queries.

### Desktop

Multiple-column portfolio layouts are used.

### Tablet

Content switches to fewer columns.

### Mobile

The website becomes a single-column layout with:

* Smaller typography
* Stacked sections
* Mobile-friendly buttons
* Responsive video cards
* Simplified navigation
* Smaller hero artwork

---

# 📁 Project Structure

The project is currently structured as a simple static website:

```text
Arooj_Kanwal_Portfolio/
│
├── index.html
│
├── Cinematic Travel.mp4
├── conatural product ad.mp4
├── documentary.mp4
├── fashion brand _ advertisement.mp4
├── fashion-brand-promotional.mp4
├── Luxury Lifestyle Reel.mp4
├── short documentary.mp4
└── showreel.mp4
```

> The current HTML also references an `assets/` folder for visual backgrounds such as `hero-office.png`, `ai-office.png`, `serum-product.png`, `tech-network.png`, and `fashion-poster.jpg`. If those assets are not present, the corresponding background images will not appear, although the video functionality can still work.

---

# ⚠️ Important Video File Requirement

The MP4 files are referenced using relative paths.

For example:

```html
<source data-src="./Luxury%20Lifestyle%20Reel.mp4" type="video/mp4">
```

Therefore, the video files should remain in the same directory as `index.html` unless the paths in the HTML are changed.

### Correct structure

```text
portfolio/
│
├── index.html
├── Luxury Lifestyle Reel.mp4
├── Cinematic Travel.mp4
├── short documentary.mp4
├── documentary.mp4
├── conatural product ad.mp4
├── fashion brand _ advertisement.mp4
├── fashion-brand-promotional.mp4
└── showreel.mp4
```

---

# 💻 How to Run the Website

Because this is a static HTML website, no Node.js, npm or framework installation is required.

## Method 1 — Open Directly

The simplest method:

1. Extract the ZIP file.
2. Open the `Arooj_Kanwal_Portfolio` folder.
3. Double-click:

```text
index.html
```

4. The website will open in your browser.

---

# 🌐 Recommended Method — Local Server

For better video loading and browser compatibility, use a local development server.

## Using VS Code

Open the project folder in Visual Studio Code.

Install the **Live Server** extension.

Then:

1. Open `index.html`.
2. Right-click inside the file.
3. Select:

```text
Open with Live Server
```

The website will open at a local address similar to:

```text
http://127.0.0.1:5500/
```

---

# 🧑‍💻 Running With Python

If Python is installed, open Command Prompt or PowerShell inside the portfolio folder.

Run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# 🔧 How to Add a New Portfolio Video

To add another project:

### 1. Add the MP4 file

Place it inside the same folder as `index.html`.

Example:

```text
my-new-project.mp4
```

### 2. Add a project card

Add an HTML card inside:

```html
<div class="projects">
```

Example:

```html
<article
    class="project wide reveal"
    data-cat="reel cinematic"
    data-tilt
    data-title="My New Project"
    data-video="./my-new-project.mp4"
>
    <div class="thumb lifestyle">
        <video
            class="video-preview"
            muted
            playsinline
            preload="none"
        >
            <source
                data-src="./my-new-project.mp4"
                type="video/mp4"
            >
        </video>

        <span class="live-overlay">
            Playable preview
        </span>

        <span class="badge">
            REEL • 9:16
        </span>
    </div>

    <div class="project-body">
        <h3>My New Project</h3>

        <p>
            Short description of the project and editing approach.
        </p>

        <div class="tags">
            <span class="tag">CapCut</span>
            <span class="tag">Cinematic</span>
            <span class="tag">9:16</span>
        </div>
    </div>
</article>
```

---

# 🏷️ Project Categories

The `data-cat` attribute determines which filter displays a project.

For example:

```html
data-cat="reel cinematic"
```

means the project appears under:

* Reels
* Cinematic
* All

Another example:

```html
data-cat="product"
```

means the project appears under:

* Product
* All

Available categories:

```text
reel
cinematic
documentary
product
promo
motion
showreel
```

---

# 🔗 Updating Social Media Links

The current social links are placeholders:

```html
<a class="social" href="#">LinkedIn</a>
<a class="social" href="#">Instagram</a>
<a class="social" href="#">TikTok</a>
<a class="social" href="#">YouTube</a>
```

Replace `#` with the actual profile URLs.

Example:

```html
<a
    class="social"
    href="YOUR-LINKEDIN-URL"
    target="_blank"
>
    LinkedIn
</a>
```

Repeat the same process for:

* LinkedIn
* Instagram
* TikTok
* YouTube

---

# 📧 Connecting the Contact Form

The current contact form is only a front-end demonstration.

It does **not** currently send emails.

The JavaScript currently prevents the default submission:

```javascript
form.onsubmit = e => {
    e.preventDefault();
};
```

To make the form functional, it can later be connected to:

* A custom backend
* PHP
* Node.js
* Formspree
* Web3Forms
* EmailJS
* Another form-processing service

For a simple portfolio website, a form service can be easier than building a complete backend.

---

# 🌍 Deployment

Because this is a static website, it can be hosted using a static hosting service.

Possible deployment platforms include:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages
* Traditional web hosting

No database is required for the current version.

No Node.js server is required for production.

---

# 📦 GitHub Deployment

Create a Git repository:

```bash
git init
```

Add the files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial portfolio website"
```

Connect the GitHub repository:

```bash
git remote add origin YOUR_REPOSITORY_URL
```

Push:

```bash
git branch -M main
git push -u origin main
```

The repository can then be connected to a static hosting platform.

---

# ⚡ Performance Considerations

The portfolio contains several relatively large MP4 files.

For better performance:

### Recommended

* Compress large MP4 files
* Use H.264 encoding
* Keep preview videos reasonably small
* Use lazy loading
* Avoid unnecessarily high resolutions
* Optimize background images
* Use WebP for large background images
* Keep video thumbnails lightweight

The website already uses lazy loading behavior through `IntersectionObserver`.

---

# 🎬 Recommended Video Encoding

For web-friendly MP4 files:

```text
Container: MP4
Video Codec: H.264
Audio Codec: AAC
```

For short-form videos:

```text
1080 × 1920
Aspect Ratio: 9:16
```

For landscape projects:

```text
1920 × 1080
Aspect Ratio: 16:9
```

---

# 🔒 Browser Compatibility

The website uses modern HTML5, CSS3 and JavaScript APIs.

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

A modern Chromium-based browser is recommended for the best experience.

---

# 🧰 Technologies Used

This project does not depend on React, Next.js or other frameworks.

### Frontend

* HTML5
* CSS3
* JavaScript

### Browser APIs

* IntersectionObserver API
* HTML5 Video API
* Canvas API
* DOM API

### CSS Techniques

* CSS Grid
* Flexbox
* CSS Variables
* CSS Gradients
* CSS Animations
* CSS Transforms
* Glassmorphism
* Responsive Media Queries

---

# 📜 License

This portfolio is a personal creative portfolio belonging to **Arooj Kanwal**.

The website code and creative content should not be redistributed as another person's portfolio without permission.

Portfolio videos, creative work, branding and visual assets remain the property of their respective owners/creators.

---

# 👩‍💻 Author

## Arooj Kanwal

**Video Editor & Creative Designer**

### Specializations

* Video Editing
* Short-form Content
* Cinematic Editing
* Color Grading
* Motion Graphics
* Product Advertising
* Documentary Editing
* Promotional Videos
* Sound Design
* Visual Storytelling

---

# 📬 Contact

For:

* Job opportunities
* Internships
* Freelance projects
* Video editing
* Creative collaborations
* Promotional content
* Product advertisements

Please use the contact section of the portfolio.

---

# ⭐ Portfolio Vision

The goal of this portfolio is to present video editing and creative design work through a visual experience rather than a traditional static resume.

The design combines:

**Storytelling + Motion + Editing + Design + Technology**

to create a modern portfolio experience suitable for recruiters, clients, agencies and creative collaborations.

---

## 🚀 Future Improvements

Possible future upgrades include:

* Functional contact form
* Downloadable CV
* Real social media links
* Project detail pages
* Video project descriptions
* Before/after editing comparisons
* Client testimonials
* Services section
* Skills proficiency section
* Resume section
* SEO optimization
* Open Graph/social sharing images
* Custom domain
* Analytics
* CMS integration
* Cloud-hosted videos
* Project search
* More advanced page transitions
* Accessibility improvements

---

## 📌 Quick Start

```text
1. Extract the project
2. Keep index.html and MP4 files together
3. Open index.html
   OR
4. Run Live Server
5. Open the portfolio in your browser
6. Replace placeholder social links
7. Connect the contact form when ready
8. Deploy to GitHub Pages, Netlify, Vercel or another static host
```

---

# 🎥 Built to Showcase Creative Work

**Arooj Kanwal — Video Editor & Creative Designer**

> Turning ideas into visual stories.
