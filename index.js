// //Home Purchase Value
// var value = 100000;
// //Assumed 20% Down Payment
// var cash = 20000;
// //Monthly Rental Income
// var income = 2000;
// //Monthly Rental Income
// var expense = 500;
// //Use the 50% Rule to Calculate the Monthly Gross Income
// var gross;
// gross = income * 0.5 - expense;
// //Cash ROI Calculation
// var roi;
// roi = (gross / cash) * 100;

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
