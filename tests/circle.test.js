const Circle = require("../Lib/circle");

describe("Circle", () => {
  describe("Render Method", () => {
    it("should render a circle string", () => {
      const circle = new Circle({
        logoLtrs: "DOO",
        logoTextColor: "black",
        logoShapeColor: "red",
        logoShape: "circle",
      });
      expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="red" />`
      );
    });
  });
});
