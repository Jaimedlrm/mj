const express = require('express');
const fs      = require('fs');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Parse JSON bodies ──
app.use(express.json());

// ── Static: website assets ──
app.use(express.static(path.join(__dirname, 'public')));

// ── Static: couple photos served at /images/* ──
app.use('/images', express.static(path.join(__dirname, 'Images')));

// ── POST /api/rsvp  →  append to rsvps.json (local) or log only (Vercel) ──
app.post('/api/rsvp', (req, res) => {
  const { firstName, lastName, email, attending, guests, dietary } = req.body;

  if (!firstName || !email || !attending) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const entry = {
    firstName,
    lastName,
    email,
    attending,
    guests: guests || 1,
    dietary: dietary || '',
    timestamp: new Date().toISOString(),
  };

  // Persist locally; on Vercel the filesystem is read-only so we just log.
  try {
    const rsvpFile = path.join(__dirname, 'rsvps.json');
    let rsvps = [];
    if (fs.existsSync(rsvpFile)) {
      rsvps = JSON.parse(fs.readFileSync(rsvpFile, 'utf8'));
    }
    rsvps.push(entry);
    fs.writeFileSync(rsvpFile, JSON.stringify(rsvps, null, 2));
  } catch (_) {
    // Read-only filesystem (e.g. Vercel) — entry is logged below.
  }

  console.log(`✉  RSVP | ${entry.timestamp} | ${firstName} ${lastName} <${email}> | attending: ${attending} | guests: ${entry.guests}`);
  res.json({ success: true });
});

// ── GET /api/rsvps  →  view all RSVPs (local admin only) ──
app.get('/api/rsvps', (req, res) => {
  try {
    const rsvpFile = path.join(__dirname, 'rsvps.json');
    if (!fs.existsSync(rsvpFile)) return res.json([]);
    res.json(JSON.parse(fs.readFileSync(rsvpFile, 'utf8')));
  } catch (_) {
    res.json([]);
  }
});

// ── Start server (local dev only — Vercel uses module.exports) ──
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n💒  Wedding website running at http://localhost:${PORT}\n`);
  });
}

// Required by Vercel serverless runtime
module.exports = app;
