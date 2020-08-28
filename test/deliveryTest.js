import {deliveryDate} from "../src/delivery";

const deliveryDateTest = require('ava');

deliveryDateTest('should_return_2_when_deliveryDate_given_true_MA', t => {
    let isRush = true;
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(2, result);
})
