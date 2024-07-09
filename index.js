import express from 'express';
import dotenv from 'dotenv';


import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5009;

// Construct path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize express
const app = express();

// parse body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// Serve static files
app.use(express.static(path.join(PATH, 'public')));


// use routes


// error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// handle 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});

// listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
