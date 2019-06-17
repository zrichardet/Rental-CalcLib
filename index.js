//noIncome expects two floats for income and expense
function noIncome(income, expense) {
  return income - expense;
}

function roiPercent(noi, investmentAmount) {
  return (noi / investmentAmount) * 100;
}

module.exports = {
  noIncome: noIncome,
  roiPercent: roiPercent
};
