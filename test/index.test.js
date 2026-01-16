const orcMe = require('../index.js');

test('Check if it returns a random Orc name with valid characters and length', () => {
    const expectedString = expect.stringMatching(/^[A-Z][a-z]{1,6}$/);

    const name = orcMe();

    expect(name).toEqual(expectedString);
    expect(name).not.toBe('');
});

test('Check that multiple calls return strings', () => {
    for (let i = 0; i < 10; i++) {
        expect(typeof orcMe()).toBe('string');
    }
});

test('Check that generated names are not all identical', () => {
    const names = new Set(Array.from({ length: 10 }, () => orcMe()));
    expect(names.size).toBeGreaterThan(1);
});

test('Check that the first character is uppercase', () => {
    const name = orcMe();
    expect(name[0]).toMatch(/[A-Z]/);
});

test('Check that the name contains at least one vowel', () => {
    const name = orcMe().toLowerCase();
    expect(name).toMatch(/[aou]/);
});
