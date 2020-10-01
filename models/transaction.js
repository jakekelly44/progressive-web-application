const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Transaction Name"
    },
    value: {
        type: Number,
        required: "Transaction Amount"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;