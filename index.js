const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// IMPORT MODELS
require('./models/Product');

const app = express();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
console.log(uri);
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/allmoxytest`);

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