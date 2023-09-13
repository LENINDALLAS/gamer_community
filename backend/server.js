const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const database = process.env.MONGODB_URL.replace(/'/g, '').replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(database, {})

mongoose.connection.once('open', () => console.log('DB connection successfully established....'));
mongoose.connection.on('error', () => console.log('DB connection error'));

app.use('/api/v1', chatRoutes);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
