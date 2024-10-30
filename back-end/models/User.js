const pool = require('../config/db');

// Créer un modèle Utilisateur
const User = {
    // Fonction pour récupérer un utilisateur par son nom d'utilisateur
    findByUsername: async (username) => {
        const query = 'SELECT * FROM users WHERE username = $1';
        const values = [username];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    // Fonction pour créer un nouvel utilisateur
    create: async (username, role, passwordHash) => {
        const query = 'INSERT INTO users (username, role, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [username, role, passwordHash];
        const result = await pool.query(query, values);
        return result.rows[0];
    },
};

module.exports = User;
