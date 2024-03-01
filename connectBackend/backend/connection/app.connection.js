let mongoose = require('mongoose');

let connect = mongoose.connect('mongodb://127.0.0.1:27017/connectBackend', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database connection established');
})
.catch((error) => {
    console.log(error);
})

module.exports = connect;