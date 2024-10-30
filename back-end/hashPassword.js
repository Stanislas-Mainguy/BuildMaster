const bcrypt = require('bcryptjs');

// Fonction pour hacher un mot de passe
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

// Exemples de hachage de mots de passe pour les utilisateurs de base
(async () => {
    console.log("Admin password:", await hashPassword('admin_password'));
    console.log("Worker password:", await hashPassword('worker_password'));
    console.log("Guest password:", await hashPassword('guest_password'));
})();
