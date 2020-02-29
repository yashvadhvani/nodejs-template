/* eslint-disable no-console */
/* MONGOOSE SETUP */
const mongoose = require('mongoose');

const connectionURL = `mongodb://127.0.0.1:27017/notes`;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to mongo db');
});
module.exports = db;