class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (this.getEmployeeType(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  getEmployeeType(type) {
    return ![
      'engineer',
      'manager',
      'salesman',
    ].includes(type);
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}

module.exports = {
  Employee,
};