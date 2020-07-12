const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema(
    {
        name:{
            type: String,
            min: 1,
            max: 15,
            required: true,
        },
        image: {
            type:String,
            required: true
        },
        label:{
            type: String,
            default: ""
        },
        price:{
            type: Currency,
            required: true
        },
        description:{
            type: String,
            min: 1,
            required: true
        },
        featured:{
            type: Boolean,
            required: true
        }
    },{
        timestamps: true
    }
);

var Promotions = mongoose.model('Promotion',promotionSchema);

module.exports = Promotions;