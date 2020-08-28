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

deliveryDateTest('should_return_3_when_deliveryDate_given_true_NY', t => {
    let isRush = true;
    let anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(3, result);
})

deliveryDateTest('should_return_4_when_deliveryDate_given_true_AA', t => {
    let isRush = true;
    let anOrder = {
        deliveryState: 'AA',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(4, result);
})

deliveryDateTest('should_return_4_when_deliveryDate_given_true_MA', t => {
    let isRush = false;
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(4, result);
})

deliveryDateTest('should_return_5_when_deliveryDate_given_true_ME', t => {
    let isRush = false;
    let anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(5, result);
})

deliveryDateTest('should_return_6_when_deliveryDate_given_true_MM', t => {
    let isRush = false;
    let anOrder = {
        deliveryState: 'MM',
        placedOn: {
            plusDays : function (data) {
                return data;
            }
        }
    }
    let result = deliveryDate (anOrder, isRush);
    t.is(6, result);
})