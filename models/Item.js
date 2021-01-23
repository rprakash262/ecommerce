const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    itemDescription: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: String,
        required: true,
    },
    itemImage: {
        type: String,
        required: true,
    },
    offer: {
        type: String,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    buyLink: {
        type: String,
        required: true,
    },
});

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;
