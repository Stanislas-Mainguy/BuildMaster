const express = require('express');
const dotenv = require('dotenv');
const pool = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur BuildMaster!');
});

// Endpoint de test pour vérifier la connexion à la base de données
app.get('/db-test', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur de serveur');
    }
});

app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
