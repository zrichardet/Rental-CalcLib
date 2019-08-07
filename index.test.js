var expect = require("chai").expect;
var calculators = require("./index");

// describe("calculators", function() {
//   describe("noIncome", function() {
//     it("should be a float", function() {
//       expect(calculators.noIncome(8, 0.5)).to.be.closeTo(7.5, 0.0000000001);
//     });
//     it("test no income", function() {
//       expect(calculators.noIncome(0.0, 0.5)).to.be.closeTo(-0.5, 0.0000000001);
//     });
//     it("test no expenses", function() {
//       expect(calculators.noIncome(9, 0.0)).to.be.closeTo(9.0, 0.0000000001);
//     });
//   });

//   describe("calculators", function() {
//     describe("roiPercent", function() {
//       it("Should be a value less than 100", function() {
//         expect(calculators.roiPercent(1, 1)).to.be.closeTo(100, 0.000000001);
//       });
//       it("Should be greater than -100", function() {
//         expect(calculators.roiPercent(-1, 1)).to.be.closeTo(-100, 0.0000001);
//       });
//     });
//   });
// });

describe("Expenses", () => {
  describe("Sum", () => {
    it("Should sum expenses to 10", () => {
      expect(calculators.sumExpenses(1, 1, 0.1, 0.1, 0.1, 0.1)).to.be.closeTo(
        1.4,
        0.00001
      );
    });
  });
});
