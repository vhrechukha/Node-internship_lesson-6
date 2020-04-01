const SeedForBookDatabase = require('../seeds/seedForBookDatabase');

module.exports = {
    async up(db) {
        await db.createCollection('booksmodel',
            {
                capped: true,
                size: 5242880,
                max: 500,
            });

        await SeedForBookDatabase.addBooksToDatabseCollection(db);
    },

    async down(db) {
        db.collection('booksmodel').drop();
    },
};
