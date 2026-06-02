const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    amount : {
        type : Number,
        required : true,
        min: 0
    },
    category : {
        type : String,
        required : true,
         enum: [
            "Food",
            "Transport",
            "Bills",
            "Entertainment",
            "Other"
        ]
    },
    date : {
        type : Date,
        required : true
    },
    note : {
        type : String,
    }
}, {timestamps : true})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense