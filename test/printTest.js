import {printOwing} from "../src/print";

const rankTest = require('ava');

rankTest('should_return_localdate_when_printOwing_given_invoice_borderSpacing_2_content', t => {
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    const invoice = {
        borderSpacing: ['china', 'west-indies'],
        dueDate: dueDate,
        customer: 'Max'
    };
    let result = printOwing (invoice);
    t.is("*************************** Customer Owes ***************************name: Maxamount: NaNamount: " + dueDate.toLocaleDateString(), result);
})