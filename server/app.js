const mongoose = require('mongoose')
const express = require('express');

require('dotenv').config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_STRING_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) { throw err}
    else {
        console.log('[>  Database is alive  <]');
    }
})
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/admin', require('./routes/admin.router'));

app.listen(process.env.PORT, () => {
    console.log(`[>  Server started on port ${process.env.PORT}  <]`);
})
