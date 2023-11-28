const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./models/index');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });
});
