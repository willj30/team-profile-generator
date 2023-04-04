const Manager = require('../lib/Manager');
const manager = new Manager('Will', '1234', 'wj@gmail.com', '321');

test('Test for retreiving constructor values in the manager object.', () => {
    expect(manager.name).toBe('Will');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('wj@gmail.com');
    expect(manager.officeNumber).toBe('321');
});

test('Test if we can get the name from the getName() method.', () => {
    expect(manager.getName()).toBe('Will');
});

test('Test if we can get the manager id from the getId() method', () => {
    expect(manager.getId()).toBe('1234');
});

test('Test if we can get the manager email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('wj@gmail.com');
});

test('Test if we can get the manager offic number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('321');
});

test('Test if we can get the manager role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});