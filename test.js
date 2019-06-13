const calculators = require("./calculators");

console.log(
  `Your Cash ROI is ${calculators.roiPercent(
    calculators.noIncome(500, 250),
    10000
  )}%`
);
