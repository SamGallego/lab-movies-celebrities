//  Add your code here
const { Schema, model } = require('mongoose')

const celebritieSchema = new Schema(
    {
        name: {
            type: String
        },
        occupation: {
            type: String
        },
        catchPhrase: {
            type: String
        },
    },
    {
        timestamp: true
    }
)

const Celebritie = model('Celebritie', celebritieSchema)

module.exports = Celebritie