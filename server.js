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

// ── POST /api/rsvp  →  append to rsvps.json ──
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

  const rsvpFile = path.join(__dirname, 'rsvps.json');
  let rsvps = [];

  if (fs.existsSync(rsvpFile)) {
    try {
      rsvps = JSON.parse(fs.readFileSync(rsvpFile, 'utf8'));
    } catch (_) {
      rsvps = [];
    }
  }

  rsvps.push(entry);
  fs.writeFileSync(rsvpFile, JSON.stringify(rsvps, null, 2));

  console.log(`✉  RSVP from ${firstName} ${lastName} <${email}> — ${attending}`);
  res.json({ success: true });
});

// ── GET /api/rsvps  →  view all RSVPs (admin) ──
app.get('/api/rsvps', (req, res) => {
  const rsvpFile = path.join(__dirname, 'rsvps.json');
  if (!fs.existsSync(rsvpFile)) return res.json([]);
  res.json(JSON.parse(fs.readFileSync(rsvpFile, 'utf8')));
});

app.listen(PORT, () => {
  console.log(`\n💒  Wedding website running at http://localhost:${PORT}\n`);
});
