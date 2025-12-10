const express = require('express');
const path = require('path');

const app = express();

// serve static files from public/ directory
app.use(express.static(path.join(__dirname, "public")));

app.get('/status', (req, res) => {
  res.json({
    message: "App is running",
    version: "1.0.0",
    deployed_at: new Date().toISOString()
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
