module.exports = {
    async up(db) {
        db.collection('booksmodel').updateMany({}, [{
            $set: {
                titleLength: { $strLenCP: '$title' },
                updatedAt: new Date().toLocaleDateString('it-IT'),
            },
        }]);
    },
    down() {},
};
