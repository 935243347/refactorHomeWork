function calculateOutstanding(invoice, outstanding) {
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing (invoice) {
  let outstanding = 0;
  let result = '';
  result +='***********************';
  result +='**** Customer Owes ****';
  result +='***********************';

  // calculate outstanding
  outstanding = calculateOutstanding(invoice, outstanding);

  // record due date
  recordDueDate(invoice);

  // print details
  result +=`name: ${invoice.customer}`;
  result +=`amount: ${outstanding}`;
  result +=`amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

module.exports = {
  printOwing,
};