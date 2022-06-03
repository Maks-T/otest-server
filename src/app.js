const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const dataRouter = require('./routers/data-router');

const dbName = 'OTest';

const URI = `mongodb://maxim:123@cluster0-shard-00-00.lixqw.mongodb.net:27017,cluster0-shard-00-01.lixqw.mongodb.net:27017,cluster0-shard-00-02.lixqw.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-5blx0s-shard-0&authSource=admin&retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', dataRouter);

async function startApp() {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
