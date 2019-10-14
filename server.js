/* ----------------------------------------------- *
 *                API Server                       *
 * ----------------------------------------------- */
// Importing the core modules ------------------- //
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// BASE CONFIGURATIONS -------------------------- //
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

// HELPER FUNCTIONS ---------------------------- //
function loadRoutes() {
  // --- UNPROTECTED ROUTES --- //
  // Health check route to make sure everything is working.
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Updated API server is up and running!', // <-- Change this line
    });
  });
  // --- PROTECTED ROUTES --- //

  // base route is /api/v1
  app.use('/api/v1', router);
}

function startServer() {
  loadRoutes();
  const port = process.env.PORT || 8001;
  // Start listening for incoming requests.
  app.listen(port, () => {
    console.info(`Updated API server up and running on port ${port}`); // <-- Change this line
  });
}

// START THE SERVER ----------------------------- //
startServer();

// Export the express app as a handler property of module.exports
module.exports = app;
