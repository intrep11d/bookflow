require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./models'); // This imports the 'db' object from './models/index.js'
const userRoutes = require('./routes/userRoutes'); // Routes for user actions
const adminRoutes = require('./routes/adminRoutes'); // Routes for admin actions
const staffRoutes = require('./routes/staffRoutes'); // Routes for staff actions
const authorRoutes = require('./routes/authorRoutes'); // Routes for author actions
const genreRoutes = require('./routes/genreRoutes'); // Routes for genre actions
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware for parsing JSON 
app.use('/api/users', userRoutes); // Prefix all user routes
app.use('/api', adminRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/staff', staffRoutes);
// Correct the path for your book routes if necessary
app.use('/api/books', bookRoutes);
app.use('/api/genre', genreRoutes);


// Now use the sequelize instance from the 'db' object
db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });
});
