const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Halo dari Node.js App!');
});

// ⬇️ Hanya jalankan server bila file dieksekusi langsung
if (require.main === module) {
  app.listen(PORT, () =>
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`)
  );
}

// ⬇️ Export app supaya bisa di‑require oleh test
module.exports = app;
