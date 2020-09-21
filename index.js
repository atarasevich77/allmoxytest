const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// IMPORT MODELS
require('./models/Product');

const app = express();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
);
mongoose.set('useCreateIndex', true);
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/allmoxytest`);

// const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
// mongoose.set('useCreateIndex', true);
// mongoose.connect(url, {useNewUrlParser: true}, function(err, db) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('connected to ' + url);
//         db.close();
//     }
// })

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