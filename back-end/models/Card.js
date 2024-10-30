const pool = require('../config/db');

// Créer un modèle Carte
const Card = {
    // Fonction pour créer une nouvelle carte
    create: async (title, description, priority, deadline, createdBy) => {
        const query = `
            INSERT INTO cards (title, description, priority, deadline, created_by)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;
        const values = [title, description, priority, deadline, createdBy];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Fonction pour récupérer toutes les cartes
    findAll: async () => {
        const query = 'SELECT * FROM cards';
        const result = await pool.query(query);
        return result.rows;
    },
};

module.exports = Card;
