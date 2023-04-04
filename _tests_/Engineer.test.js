const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Will', '1234', 'wj@gmail.com', 'willj30');

test('Test for retreiving constructor values in the engineer object.', () => {
    expect(engineer.name).toBe('Will');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('wj@gmail.com');
    expect(engineer.github).toBe('willj30');
});

test('Test if we can get the name from the getName() method.', () => {
    expect(engineer.getName()).toBe('Will');
});

test('Test if we can get the engineer id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234');
});

test('Test if we can get the engineer email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('wj@gmail.com');
});

test('Test if we can get the engineer github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('willj30');
});

test('Test if we can get the engineer role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});