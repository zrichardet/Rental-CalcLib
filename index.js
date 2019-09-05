export function sumExpenses(monthlyMortgage, monthlyIncome, ...percentFees) {
  return percentFees.reduce(
    (acc, val) => acc + monthlyIncome * val,
    monthlyMortgage
  );
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

export function mortgagePayment(loanTerm, loanAmount, interestRate) {
  let monthlyRate = interestRate / 12;
  let numOfPayments = loanTerm * 12;
  let numerator = monthlyRate * (1 + monthlyRate) ** numOfPayments;
  let denominator = (1 + monthlyRate) ** numOfPayments - 1;
  return loanAmount * (numerator / denominator);
}

export function interestPayment(loanBalance, interestRate) {
  return loanBalance * (interestRate / 12);
}

export function principalPayment(
  loanTerm,
  loanAmount,
  interestRate,
  loanBalance
) {
  return (
    mortgagePayment(loanTerm, loanAmount, interestRate) -
    interestPayment(loanBalance, interestRate)
  );
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
  let table = [...Array(loanTermYears).keys()];
  let newLoanAmount = loanAmount;
  return table.map(i => {
    newLoanAmount =
      newLoanAmount - loanPaydown(newLoanAmount, loanTermYears, interestRate);
    return {
      year: i,
      return: newLoanAmount
    };
  });
}

export function optimizeIncome(
  purchasePrice,
  downPayment,
  percentROI,
  totalExpenses
) {
  return (purchasePrice * downPayment * percentROI) / 100 + totalExpenses;
}
