export function sumExpenses(
  monthlyMortgage,
  monthlyIncome,
  vacancyRate,
  managementFee,
  maintenanceFee,
  capitalExpenditures
) {
  let totalExpenses =
    monthlyMortgage * 1 +
    monthlyIncome * vacancyRate +
    monthlyIncome * managementFee +
    monthlyIncome * maintenanceFee +
    monthlyIncome * capitalExpenditures;
  return totalExpenses;
}

export function calculateNOI(monthlyIncome, totalExpenses) {
  return monthlyIncome - totalExpenses;
}
export function calculateROI(
  monthlyIncome,
  purchasePrice,
  downPayment,
  totalExpenses
) {
  let ROI =
    (calculateNOI(monthlyIncome, totalExpenses) /
      (purchasePrice * downPayment)) *
    100;
  return ROI;
}
export function makeReturnTable(years, monthlyIncome, totalExpenses) {
  let table = [];
  [...Array(years).keys()].forEach(i => {
    let returnObject = {
      year: i,
      return: calculateNOI(monthlyIncome, totalExpenses) * (i + 1)
    };
    table.push(returnObject);
  });

  return table;
}

export function mortgagePayment(interestRate, loanTerm, loanAmount) {
  let monthlyRate = interestRate / 12;
  let numOfPayments = loanTerm * 12;
  let numerator = monthlyRate * (1 + monthlyRate) ** numOfPayments;
  let denominator = (1 + monthlyRate) ** numOfPayments - 1;
  let monthlyMortgage = loanAmount * (numerator / denominator);
  return monthlyMortgage;
}

export function interestPayment(loanAmount, interestRate) {
  let interestPayment = loanAmount * (interestRate / 12);
  return interestPayment;
}

export function principalPayment(loanAmount, loanTerm, interestRate) {
  let principalPayment =
    mortgagePayment(interestRate, loanTerm, loanAmount) -
    interestPayment(loanAmount, interestRate);
  return principalPayment;
}

export function loanPaydown(loanAmount, loanTerm, interestRate) {
  let loanBalance =
    loanAmount - principalPayment(loanAmount, loanTerm, interestRate);
  return loanBalance;
}

export function makeBalanceTable(
  loanTermYears,
  loanAmount /*int*/,
  interestRate /*float*/
) {
  let table = [];
  let newLoanAmount = loanAmount;
  [...Array(loanTermYears).keys()].forEach(i => {
    newLoanAmount =
      newLoanAmount - loanPaydown(newLoanAmount, loanTermYears, interestRate);
    let returnObject = {
      year: i,
      return: newLoanAmount
    };
    table.push(returnObject);
  });

  return table;
}
