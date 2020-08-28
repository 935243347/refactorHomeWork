import {printOwing} from "../src/print";

const printTest = require('ava');

printTest('should_return_localdate_when_printOwing_given_invoice_borderSpacing_2_content', t => {
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    const invoice = {
        borderSpacing: [{amount: 'china'}, {amount: 'west-indies'}],
        dueDate: dueDate,
        customer: 'Max'
    };
    let result = printOwing (invoice);
    t.is("*************************** Customer Owes ***************************name: Maxamount: 0chinawest-indiesamount: " + dueDate.toLocaleDateString(), result);
})

printTest('should_return_localdate_when_printOwing_given_invoice_enpty_borderSpacing', t => {
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    const invoice = {
        borderSpacing: [],
        dueDate: dueDate,
        customer: 'Max'
    };
    let result = printOwing (invoice);
    t.is("*************************** Customer Owes ***************************name: Maxamount: 0amount: " + dueDate.toLocaleDateString(), result);
})