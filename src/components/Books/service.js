const BooksModel = require('./model');

/**
 * @method getChartData
 * @param {any}
 * @returns {any}
 */
function getChartData() {
    return BooksModel.aggregate([
        {
            $group: {
                _id: '$code3',
                value: {
                    $sum: 1,
                },
            },
        },
        {
            $project: {
                code3: '$_id',
                value: true,
                _id: false,
            },
        },
    ]);
}

module.exports = {
    getChartData,
};
