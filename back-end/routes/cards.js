const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Route pour créer une nouvelle carte (accessible par ADMIN et WORKER)
router.post('/', async (req, res) => {
    const { title, description, priority, deadline, createdBy } = req.body;

    try {
        const newCard = await Card.create(title, description, priority, deadline, createdBy);
        res.status(201).json(newCard);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur de serveur');
    }
});

// Route pour récupérer toutes les cartes (accessible par tous les rôles)
router.get('/', async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.status(200).json(cards);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur de serveur');
    }
});

module.exports = router;
