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

console.log('Bucket is running');

module.exports = bucket;