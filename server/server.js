const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'Public');
const port = process.env.PORT || 3000;

// serve all assets from public folder
app.use(express.static(publicPath));

// serve always the index to avoid error on refresh
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is running');
});
