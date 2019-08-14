var expect = require("chai").expect;
var calculators = require("./index");

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

describe("ROI", () => {
  describe("calculate", () => {
    it("Should be a value less than 100", function() {
      expect(calculators.calculateROI(1, 1, 1, 0)).to.be.closeTo(
        100,
        0.000000001
      );
    });
    it("Should be greater than -100", function() {
      expect(calculators.calculateROI(0, 1, 1, 1)).to.be.closeTo(
        -100,
        0.0000001
      );
    });
  });
});

describe("NOI", () => {
  describe("calclate", () => {
    it("Should sum NOI to 1", () => {
      expect(calculators.calculateNOI(1, 0)).to.be.closeTo(1, 0.00001);
    });
    it("Should sum NOI to -1", () => {
      expect(calculators.calculateNOI(0, 1)).to.be.closeTo(-1, 0.00001);
    });
    it("Should be correct", () => {
      expect(calculators.calculateNOI(1000, 10)).to.be.equal(990);
    });
  });
});

describe("MortgagePayment", () => {
  describe("calculate", () => {
    it("Should be less than  1", () => {
      expect(calculators.mortgagePayment(10, 100, 0.5)).to.be.closeTo(
        4.198,
        0.01
      );
      expect(calculators.mortgagePayment(10, 100, 0.1)).to.be.closeTo(
        1.32,
        0.01
      );
      expect(calculators.mortgagePayment(10, 100, 0.12)).to.be.closeTo(
        1.43,
        0.01
      );
      expect(calculators.mortgagePayment(30, 100000, 0.12)).to.be.closeTo(
        1029,
        1
      );
    });
  });
});

describe("InterestPayment", () => {
  describe("calculate", () => {
    it("Should be less than  1", () => {
      expect(calculators.interestPayment(100, 0.5)).to.be.closeTo(4.167, 0.001);
      expect(calculators.interestPayment(100, 0.1)).to.be.closeTo(0.83, 0.01);
      expect(calculators.interestPayment(100000, 0.12)).to.be.equal(1000);
    });
  });
});

describe("PrincipalPayment", () => {
  describe("calculate", () => {
    it("Should be ", () => {
      expect(calculators.principalPayment(10, 100, 0.5, 100)).to.be.closeTo(
        0.031,
        0.001
      );
      expect(calculators.principalPayment(10, 100, 0.1, 100)).to.be.closeTo(
        0.49,
        0.01
      );
      expect(
        calculators.principalPayment(30, 100000, 0.12, 100000)
      ).to.be.closeTo(29, 1);
    });
  });
});

// describe("LoanPaydown", () => {
//   describe("calculate", () => {
//     it("Should be less than  1", () => {
//       expect(calculators.loanPaydown(1, 1, 0.5)).to.be.lessThan(1, 0.00001);
//       expect(calculators.loanPaydown(100, 10, 0.5)).to.be.lessThan(
//         100,
//         0.00001
//       );
//     });
//   });
// });
