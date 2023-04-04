const Employee = require('../lib/Employee');
const employee = new Employee('Will', '1234', 'wj@gmail.com');

test('Test for retreiving constructor values in the Employee object.', () => {
    expect(employee.name).toBe('Will');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('wj@gmail.com');
});

test('Test if we can get the name from the getName() method.', () => {
    expect(employee.getName()).toBe('Will');
});

test('Test if we can get the employee id from the getId() method', () => {
    expect(employee.getId()).toBe('1234');
});

test('Test if we can get the employee email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('wj@gmail.com');
});

test('Test if we can get the employee role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});