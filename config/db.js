const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
