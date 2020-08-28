import {Employee} from "../src/employee";

const printTest = require('ava');

printTest('should_return_max_engineer_when_toString_given_employee_engineer', t => {
    let employee = new Employee("max", 'engineer')
    let result = employee.toString();
    t.is("max (engineer)", result);
})