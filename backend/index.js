// Express imports
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/admin', (req, res) => {
  res.sendFile('./admin/index.html')
})

/*
  Import routes, with the prefix '/api'
*/
const myRoutes = require('./routes');
app.use('/api', myRoutes)

const adminRoutes = require('./routes-admin');
app.use('/api', adminRoutes);