# Prompt: update my portfolio (paste into Claude Code / Cursor inside the `my-portfolio` repo)

Before you paste it:
1. Copy `cv_it.pdf` into the repo's `public/` folder and rename it `Ben-Aziz-Sangare-CV.pdf`.
2. Take 1600×1000 screenshots of each live site below and put them in `public/projects/`.

---

You are updating my personal portfolio (Next.js + TypeScript + Tailwind, deployed on Vercel at https://benazizportfolio.vercel.app). Read the whole repo first and keep the current visual style, which I like. Do NOT add new dependencies unless you really need them.

## Who the site is for now
The site currently sells me as a freelancer ("Available for your projects", "How can I assist you?"). Change it so it speaks to **recruiters and tech leads in Budapest who are hiring a part-time student developer**. They spend about 30 seconds on it, so the most important information must be at the top.

## Changes

### 1. Hero
- Headline: "Junior web developer who ships to production."
- Sub-line: "MSc Computer Science (Autonomous Systems) student at ELTE, Budapest. I build web apps with Next.js and TypeScript, and run the Linux server that hosts them."
- A badge reading "Open to part-time student roles · Budapest".
- Buttons: "Download CV" (links to `/Ben-Aziz-Sangare-CV.pdf`), "See projects", and GitHub.
- Remove the "Digital Loan Management System" card from the hero completely.

### 2. Replace "How Can I Assist You?" with "What I can do"
Three honest cards, with nothing I can't back up in an interview:
- **Front-end:** Next.js, React, TypeScript, Tailwind, responsive UI built from Figma.
- **Deployment & Linux:** Ubuntu VPS, Nginx reverse proxy + SSL, PM2, SSH keys, firewall + fail2ban, staging subdomains.
- **Back-end basics:** REST APIs, PostgreSQL, Postman; Go (Gin) in projects.
Remove the claims about "Core Web Vitals, testing, production hardening".

### 3. New section: "How I host my projects"
Add a simple diagram made with inline SVG or styled divs, not an image:
`Browser → DNS (domain + staging subdomain) → Nginx (SSL, reverse proxy) → PM2 (Next.js app, Go API) → PostgreSQL`
Below it, add a short checklist: SSH key login with a non-root user, root login disabled, firewall rules, fail2ban, Git-based deploys from GitHub. Add the line: "Backups: next on my list." Being honest here is a strength.

### 4. Projects: reorder, rewrite, use real domains
Each card shows: screenshot, title, a one-line problem, **"What I did"** (2–3 bullets), stack tags, a "Live" link and a "Code" link (only when the repo is public). Add a small note on each card: "Built with AI assistance — I handled structure, integration and deployment."
Order:
1. **Models & Hostesses**: booking platform with model showcase, applications and admin dashboard. Next.js, TypeScript, Go, PostgreSQL. Self-hosted on my VPS. Live: https://spy.modelshostesses.com/en (replace the old vercel preview link).
2. **General Consulting Group**: company website, self-hosted. Live: https://generalsconsultinggroups.com/en
3. **Softscreatix**: software company website, self-hosted. Live: https://softscreatix.com/en
4. **Délices Est-Ouest**: snack and catering catalog for a family restaurant, with automatic price calculation and WhatsApp ordering. Live: https://delices-est-ouest.vercel.app
5. **Kly Plus & More**: website for a web agency founded by a friend in Rwanda. Live: https://kpmcompany.vercel.app
6. **AI web-dev training page**: landing page for a training session on building websites with AI in Rwanda. Live: https://softwaretraining-zeta.vercel.app
7. **Clothes shop**: label it as a "UI design study", not a product. Live: https://clothes-shop-frontend-one.vercel.app
Remove the construction-company card unless it has a real client story.
Fix the typos: "snakcs" → "snacks", "Cloth shoping" → "Clothes shop".

### 5. New section: "About"
Four or five short lines: from Burkina Faso, studied in Rwanda, now in Budapest at ELTE; fluent in French and English, learning Hungarian; I started with mobile front-end (React Native) and moved to web; currently strengthening Python, algorithms and data structures at university.

### 6. Contact
Email benazizsangare2@gmail.com, LinkedIn, GitHub (https://github.com/azizben01), "Budapest, Hungary", and the Download CV button again.

### 7. Technical cleanup
- Proper `metadata` (title, description, Open Graph image) and a favicon.
- Check it on a 375px-wide phone: no horizontal scroll, readable text, tappable buttons.
- Use `next/image` for screenshots; every image needs alt text.
- Run `npm run build` and fix every error and warning before you finish.
- At the end, write a short summary of every file you changed and **explain each change to me in simple words**. I need to be able to explain this code in a job interview.
