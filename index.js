const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// IMPORT MODELS
require('./models/Product');

const app = express();
app.use(bodyParser.json());

dotenv.config();
const connection = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_NODE_0},${process.env.MONGO_NODE_1},${process.env.MONGO_NODE_2}/${process.env.MONGO_DB_NAME}?ssl=true&authSource=admin&replicaSet=${process.env.MONGO_REPLICA_SET}&retryWrites=true&w=majority`;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.log(err));

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