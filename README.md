# 💒 María & Jaime — Wedding Website

Wedding website for María & Jaime · 7 November 2026 · Pamplona, España
Built with Node.js + Express. Deployable to Vercel (free tier) in minutes.

---

## Project Structure

```
mj/
├── server.js          ← Express server (local + Vercel)
├── vercel.json        ← Vercel deployment config
├── package.json
├── .gitignore
├── Images/            ← Couple photos (MJ 1–5.jpg)
└── public/
    ├── index.html     ← Full wedding website
    ├── style.css      ← Forest palette + Playfair Display
    └── main.js        ← Countdown, gallery, FAQ, RSVP
```

---

## Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- A terminal (Command Prompt, PowerShell, or bash)

### Steps

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the server
npm start

# 3. Open your browser at:
#    http://localhost:3000
```

To auto-reload on file changes during development:

```bash
npm run dev
```

---

## Deploying to Vercel (Free)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (create a free account if needed).
2. Click **New repository** → name it `mj-wedding` → set it to **Private** → click **Create**.
3. In your terminal, inside the project folder, run:

```bash
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mj-wedding.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your GitHub username.

---

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Find and select your `mj-wedding` repository.
4. Vercel will auto-detect the settings from `vercel.json` — **no changes needed**.
5. Click **Deploy**.

That's it! In about 60 seconds Vercel will give you a live URL like:

```
https://mj-wedding.vercel.app
```

---

### Step 3 — Update your site anytime

Every time you push a change to GitHub, Vercel redeploys automatically:

```bash
git add .
git commit -m "Updated schedule times"
git push
```

---

## Custom Domain (Optional)

If you want a personal URL like `mariayjaime.com`:

1. Buy a domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com) (~10 €/year).
2. In Vercel → your project → **Settings → Domains** → Add your domain.
3. Follow the DNS instructions Vercel provides (takes ~10 minutes to go live).

---

## RSVP — Important Note for Vercel

Vercel runs the server as a **serverless function**, meaning it cannot write files to disk.
RSVPs submitted on the live site **will not be saved to a file** — but they **are logged** and visible in the Vercel dashboard under **Logs**.

### Option A — Read RSVPs from Vercel Logs (simplest)

After deployment, go to:
**Vercel Dashboard → your project → Logs**

Each RSVP is printed like:
```
✉  RSVP | 2026-10-01T10:00:00.000Z | Ana García <ana@gmail.com> | attending: yes | guests: 2
```

### Option B — Use Formspree (recommended, free up to 50 RSVPs/month)

1. Go to [formspree.io](https://formspree.io) → create a free account.
2. Create a new form → copy the form endpoint URL.
3. In `public/index.html`, replace the `<form>` tag:

```html
<!-- Replace this line: -->
<form class="rsvp-form" id="rsvpForm">

<!-- With this: -->
<form class="rsvp-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove the JavaScript `fetch` block in `public/main.js` (the `initRsvp` function).
5. Formspree will email you every RSVP automatically — no server needed.

### Option C — Google Sheets (free, unlimited)

Use [SheetMonkey](https://sheetmonkey.io) or [Google Apps Script](https://script.google.com) to receive form submissions directly into a Google Sheet. Free and unlimited.

---

## Environment Variables (if needed later)

If you add email notifications or a database, set secrets in Vercel:

**Vercel Dashboard → Project → Settings → Environment Variables**

Then access them in `server.js` as `process.env.MY_SECRET`.

---

## Checklist Before Going Live

- [ ] Update **Our Story** text in `public/index.html` with your real story
- [ ] Confirm the **schedule times** are accurate
- [ ] Add the real address of **La Finca El Peregrino** (Google Maps link)
- [ ] Test the **RSVP form** works end-to-end
- [ ] Test on **mobile** (iPhone + Android)
- [ ] Choose your **RSVP strategy** (Vercel logs / Formspree / Google Sheets)
- [ ] Share the URL with your guests!

---

## Local RSVP Admin

When running locally (`npm start`), RSVPs are saved to `rsvps.json`.
You can view them at: [http://localhost:3000/api/rsvps](http://localhost:3000/api/rsvps)

---

*Made with love for María & Jaime · Pamplona 2026*
