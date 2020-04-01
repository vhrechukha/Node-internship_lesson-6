const XLSX = require('xlsx');

const workbook = XLSX.readFile('books.xlsx');
const sheetNameList = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

/**
 * Use for db collection to add new book
 * @exports
 * @class
 * @summary seeder for books collection
 */
class SeedForBookDatabase {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line class-methods-use-this
    addBooksToDatabseCollection(db) {
        xlData.forEach((value) => {
            db.collection('booksmodel').insertOne({
                code3: value.code3,
                title: value.title,
                titleLength: value.title.length,
                description: value.description,
                createdAt: new Date().toLocaleDateString('it-IT'),
                updatedAt: new Date().toLocaleDateString('it-IT'),
            }, { $set: { blacklisted: false } });
        });
    }
}

module.exports = new SeedForBookDatabase();
