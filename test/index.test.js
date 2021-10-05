const orcMe = require("../index.js");

test("Check if it returns a random Orc name with a length between 2  and 5 chars", () => {
    const expectedString = expect.stringMatching(/^[a-z]{2,5}$/);

    expect(orcMe()).toEqual(expectedString);
});
