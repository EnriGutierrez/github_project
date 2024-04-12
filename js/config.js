// Import the Firebase SDK
const firebase = require('firebase/app');
require('firebase/database');

// Initialize Firebase
const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

firebase.initializeApp(config);

// Get a reference to the database
const database = firebase.database();

// Define a function to save data to the database
function saveData(data) {
  // Generate a new key for the data
  const newKey = database.ref('data').push().key;

  // Set the data at the new key
  const updates = {};
  updates['/data/' + newKey] = data;

  return database.ref().update(updates)
   .then(() => {
      console.log('Data saved successfully');
      return newKey;
    })
   .catch(error => {
      console.error('Error saving data:', error);
      return null;
    });
}

// Example usage
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

saveData(data)
 .then(key => {
    console.log('Saved data with key:', key);
  });