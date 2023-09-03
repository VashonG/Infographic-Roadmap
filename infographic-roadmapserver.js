const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contentRoutes = require('./routes/contentRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('dbString', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/content', contentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));