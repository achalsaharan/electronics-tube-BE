require('dotenv').config();
const express = require('express');
const cors = require('cors');

//xx middlewares and utility functions
const { initializeDBConnection } = require('./db/db.connect.js');
const routeNotFoundHandler = require('./middlewares/routeNotFoundHandler');
const allErrorsHandler = require('./middlewares/allErrorsHandler');

//xx router handlers
const auth = require('./routes/auth.router');
const users = require('./routes/users.router');
const videos = require('./routes/videos.router');
const likedVideos = require('./routes/likedVideos.router');
const playLists = require('./routes/playlists.router');
const notes = require('./routes/notes.router');

// setup
const app = express();
initializeDBConnection();

app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('video library backend');
});

app.use('/auth', auth);
app.use('/users', users);
app.use('/videos', videos);
app.use('/likedvideos', likedVideos);
app.use('/playlists', playLists);
app.use('/notes', notes);

// 404 route handler
app.use(routeNotFoundHandler);

// Error handler
app.use(allErrorsHandler);

const PORT = process.env.PORT || 3998;
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
