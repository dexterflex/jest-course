const { addTwoNumbers } = require(".");

test("add 1, 2 and 2 and generates 5", () => {
	expect(addTwoNumbers(1, 2, 2)).toBe(5);
});
