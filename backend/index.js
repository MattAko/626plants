// Express imports
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
  Import routes, with the prefix '/api'
*/
const myRoutes = require('./routes/routes');
app.use('/api', myRoutes)

const adminRoutes = require('./routes/routes-admin');
const { get } = require("./routes/routes");
app.use('/api', adminRoutes);


// Admin files
app.get('/admin/*', (req, res) => {
  res.sendFile(__dirname + './admin')
})

// Server admin static files
app.use('/admin', express.static('admin'))

// Serve public files
app.use('/public', express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + './')
})