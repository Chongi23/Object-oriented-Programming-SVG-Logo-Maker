const Square = require("../Lib/square");

describe("Square", () => {
  describe("Render Method", () => {
    it("expected to render square string", () => {
      const square = new Square({
        logoLtrs:"GEE",
        logoTextColor: "blue",
        logoShapeColor: "yellow",
        logoShape: "square",
      });
      expect(square.render()).toBe(
        `<rect width="100" height="100" rx="15" fill="yellow" />`
      );
    });
  });
});
