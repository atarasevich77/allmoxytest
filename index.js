const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// IMPORT MODELS
require('./models/Product');

const app = express();

mongoose.set('useCreateIndex', true);
// mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`,
//     { useNewUrlParser: true },
// );
// mongoose.connect(process.env.MONGODB_URI || `mongodb+serv://admin:19vilka76@cluster0-4mcts.mongodb.net/todo`);
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/allmoxytest`);

mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database');
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

app.use(bodyParser.json());
//IMPORT ROUTES
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});