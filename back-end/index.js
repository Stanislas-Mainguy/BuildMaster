const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Définir une route simple pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur BuildMaster!');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
