const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 6000;

console.log('✅Express Started...')

// Import des modules crazyqr et pair
const server = require('./crazyqr.js');
const code = require('./pair.js');

// Middleware for security headers
app.use(helmet());

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Serve static files from the "public" folder
app.use('/static',
express.static('public'));

// Serve the crazy-md.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'crazy-md.html'));
});

// Utilisation des middlewares pour les routes spécifiques
app.use('/crazyqr', server);
app.use('/code', code);

// Middleware pour servir pair.html lorsque la route /pair est accédée
app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'pair.html'));
});

// Middleware pour servir helps.html lorsque la route /helps est accédée
app.get('/helps', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'helps.html'));
});

console.log('✅Successfuly added middleware files...')

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`
  Don't Forget To Give Star🙃

I'm sure you don't know the server link utility😂

@CrazyPrince👑
  
  Server is running at http://localhost:${port}`);
});

// Export the app for PM2 clustering
module.exports = app;