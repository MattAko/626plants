// Express imports
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

/*
  Firebase setup:
  This step required 'npm install firebase-admin --save'
  Url's will be imported from secrets.json
*/
const admin = require('firebase-admin')
const secrets = require('./secrets/secrets.json')
const serviceAccount = require('./secrets/serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: secrets.firebaseStorage
})

const bucket = admin.storage().bucket()
const destFileName = 'dummy.txt';
const filePath = './dummy.txt'

const options = {
  destination: 'new-dummy.txt',
  metadata: {
    metadata:{
      event: 'Fall trip to zoo'
    }
  }
}

bucket.upload(filePath, options, (err, file) => {
  console.log('hopefully it uploaded')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  Import routes, with the prefix '/api'
*/
const myRoutes = require('./routes');
app.use('/api', myRoutes)

const adminRoutes = require('./routes-admin');
app.use('/api', adminRoutes);