const Shape = require("../Lib/shape");
var testCases = [
  {
    desc: "expected to throw an error if user response is empty",
    input: {},
  
    expectedErr: new Error("Invalid, input cannot be empty"),
  },
  {
    desc: "expected to throw an error if logo text is longer than 3 letters",
    input: { logoLtrs: "band" },
    expectedErr: new Error(
      "Invalid, logo text cannot be longer than 3 characters"
    ),
  },
  {
    desc: "expected to throw error if response is not a valid or recognized CSS color",
    input: { logoLtrs: "SHE", textColor: "NotColor" },
    expectedErr: new Error(
      "Please enter a valid CSS color name or hexadecimal code"
    ),
  },
  {
    desc: "expected to throw an error if render() is called",
    input: { logoLtrs: "BEE", logoTextColor: "green", logoShapeColor: "pink" },
    expectedErr: new Error("Child shapes must implement a render() method"),
    shouldRender: true,
  },
  {
    desc: "expected to add background color if it is a valid color",
    input: { logoLtrs: "BEE", logoTextColor: "green", logoShapeColor: "pink" },
    expectedKey: "logoShapeColor",
    expectedValue: "pink",
  },
  {
    desc: "expected to add text colour if it is a valid color",
    input: { logoLtrs: "BEE", logoTextColor: "red", logoShapeColor: "green" },
    expectedKey: "logoTextColor",
    expectedValue: "red",
  },
];
describe("Shape test suite", () => {
  for (let tc of testCases) {
    it(tc.desc, () => {
      if (tc.shouldRender) {
        const shape = new Shape(tc.input);
        expect(shape.render).toThrow(tc.expectedErr);
      } else if (tc.expectedErr) {
        const shape = () => new Shape(tc.input);
        expect(shape).toBe(tc.expectedErr);
      } else {
        const shape = new Shape(tc.input);
        expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
      }
    });
  }
});