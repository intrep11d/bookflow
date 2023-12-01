const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./models'); // This imports the 'db' object from './models/index.js'
const userRoutes = require('./routes/userRoutes'); // Routes for user actions

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes); // Prefix all user routes
// Correct the path for your book routes if necessary
app.use('/books', bookRoutes);


// Now use the sequelize instance from the 'db' object
db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });
});
