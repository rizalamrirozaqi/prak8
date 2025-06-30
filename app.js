const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Jenkins demo!' });
});

// ✅ Server hanya dijalankan kalau file dieksekusi langsung,
//    sehingga saat di‑require oleh unit‑test tidak membuka port.
if (require.main === module) {
  app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  );
}

module.exports = app;   // diekspor agar bisa di‑test
