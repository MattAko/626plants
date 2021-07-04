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

const adminRoutes = require('./routes/admin.routes');
const { get } = require("./routes/routes");
app.use('/api', adminRoutes);


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░█████░░░░█░██░██░█████░█░░█░░░░
// ░░░░█░░░█░████░█░█░█░░░█░░░██░█░░░░
// ░░░░█████░█░░█░█░░░█░░░█░░░█░██░░░░
// ░░░░█░░░█░████░█░░░█░█████░█░░█░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

// Send index.html for admin portal on /admin
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin/index.html')
})

// Static files for /admin
app.use('/admin', express.static('admin'))

// SVG's for admin
app.use('/assets/svg', express.static('admin/svg'))


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░████░█░░█░█░░░█░░░███░███░░░░░░
// ░░░░█░░█░█░░█░███░█░░░░█░░█░░░░░░░░
// ░░░░████░█░░█░█░█░█░░░░█░░█░░░░░░░░
// ░░░░█░░░░████░███░███░███░███░░░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

// Static files for /
app.use(express.static('public'))

// Assets used by public page
app.use('/assets', express.static('public/assets'))

// Send public index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})




//ASCII pages made from fsymbols.com/draw