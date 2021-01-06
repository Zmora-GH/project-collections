const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

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
app.use('/api/profile', require('./routes/profile.router.js'));
app.use('/api/themes', require('./routes/theme.router.js'));
app.use('/api/collection', require('./routes/collection.router.js'));
app.use('/api/tag', require('./routes/tag.router.js'));

app.listen(process.env.PORT, () => {
    console.log(`[>  Server started on port ${process.env.PORT}  <]`);
})
