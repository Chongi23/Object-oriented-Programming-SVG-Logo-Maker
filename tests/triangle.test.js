const Triangle = require("../Lib/triangle");

describe("Triangle", () => {
  describe("Render Method", () => {
    it("should return triangle string", () => {
      const triangle = new Triangle({
        logoName: "BAN",
        logoTextColor: "red",
        logoShapeColor: "blue",
        logoShape: "triangle",
      });
      expect(triangle.render()).toBe(
        `<polygon points="100 0, 0 ,0 50, 100" fill="blue" />`
      );
    });
  });
});
