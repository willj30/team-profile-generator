const Intern = require('../lib/Intern');
const intern = new Intern('Will', '1234', 'wj@gmail.com', 'UT');

test('Test for retreiving constructor values in the intern object.', () => {
    expect(intern.name).toBe('Will');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('wj@gmail.com');
    expect(intern.school).toBe('UT');
});

test('Test if we can get the name from the getName() method.', () => {
    expect(intern.getName()).toBe('Will');
});

test('Test if we can get the intern id from the getId() method', () => {
    expect(intern.getId()).toBe('1234');
});

test('Test if we can get the intern email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('wj@gmail.com');
});

test('Test if we can get the intern school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UT');
});

test('Test if we can get the intern role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});