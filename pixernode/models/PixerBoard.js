const mongoose = require('mongoose')
const AutoIncremente = require('mongoose-sequence')(mongoose)

const pixerBoardSchema = new mongoose.Schema({
    auteur: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        Ref:'User'
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Client"
    }],
    active: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}
)

pixerBoardSchema.plugin(AutoIncremente, {
    inc_field: 'board',
    id: 'boardNums',
    start_seq: 500
})

module.exports = mongoose.model('PixerBoard', pixerBoardSchema)