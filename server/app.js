const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/static', express.static(__dirname + '/storage'));


mongoose.connect(process.env.DB_STRING_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
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
app.use('/api/comments', require('./routes/comments.router.js'));
app.use('/api/items', require('./routes/items.router.js'));

app.listen(process.env.PORT, () => {
    console.log(`[>  Server started on port ${process.env.PORT}  <]`);
})
