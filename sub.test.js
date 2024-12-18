const { subtractTwoNumbers } = require(".");

test("subtract 2 from 5 and generates 3", () => {
	expect(subtractTwoNumbers(5, 2)).toBe(3);
});
