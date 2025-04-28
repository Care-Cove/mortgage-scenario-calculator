const loanTermMonths = 30 * 12;
const annualInterestRate = 0.0669;
const monthlyInterestRate = annualInterestRate / 12;
const housingRatio = 0.28;
const propertyTaxRate = 0.011;
const insuranceRate = 0.0035;
const pmiRate = 0.005;
const lowDownpaymentRate = 0.03;

// Helper to format value to $1,000 style
function formatCurrency(value) {
  return `$${Math.round(value).toLocaleString()}`;
}

function calculatePMT(rate, nper, pv) {
  return (rate * pv) / (1 - Math.pow(1 + rate, -nper));
}

function calculateMaxMortgage(monthlyInterestRate, totalPayments, monthlyPayment) {
  return (monthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))) / monthlyInterestRate;
}

function calculatePV(annualInterestRate, totalPayments, monthlyPayment, futureValue = 0) {
  return (monthlyPayment * (1 - Math.pow(1 + annualInterestRate, -totalPayments)) +
    futureValue * Math.pow(1 + annualInterestRate, -totalPayments)) / annualInterestRate;
}

function calculateTax(income) {
  let totalTax = 0;
  if (income > 200000) {
    totalTax = (income - 200000) * 0.0855;
  }
  totalTax += Math.min(income, 200000) * 0.0765;
  return totalTax;
}

function calculateMonthlyMortgagePayment(monthlyRate, periods, principal) {
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -periods));
}

function calculateMonthlyMortgagePaymentForSecondScenerio(rate, months, pmt) {
  return pmt * ((1 - Math.pow(1 + rate, -months)) / rate);
}

function calculateMortgagePaymentForScenerio_3_point_2(rate, months, pmt) {
  return pmt * ((1 - Math.pow(1 + rate, -months)) / rate);
}

function calculateFirstScenario(homePrice, downPayment, income) {
  let totalTax = calculateTax(income);
  let grossIncome = income - totalTax;
  const grossMonthlyIncome = Math.round(grossIncome / 12);

  const monthlyPropertyTax = (homePrice * propertyTaxRate) / 12;
  const monthlyInsurance = (homePrice * insuranceRate) / 12;

  let maxMortgagePayment = housingRatio * grossMonthlyIncome - monthlyInsurance - monthlyPropertyTax;
  let maxMortgage = calculateMaxMortgage(monthlyInterestRate, 360, maxMortgagePayment);

  let mortgage = maxMortgage;
  if (maxMortgage >= homePrice * 0.8) mortgage = homePrice * 0.8;

  const coInvestment = homePrice - mortgage - downPayment;
  const monthlyMortgagePayment = calculateMonthlyMortgagePayment(monthlyInterestRate, 360, mortgage);
  let yourDownPayment = Math.abs(downPayment - coInvestment);
  let downPaymentPercentage =  Math.round((downPayment/homePrice )*100)
  let mortgagePercentage =  Math.round((mortgage/homePrice )*100)
  return {
    maxMortgagePayment: formatCurrency(maxMortgagePayment),
    maxMortgage: formatCurrency(maxMortgage),
    homePrice: formatCurrency(homePrice),
    downPayment: formatCurrency(downPayment),
    downPaymentPercentage: downPaymentPercentage,
    coInvestment: formatCurrency(coInvestment),
    mortgage: formatCurrency(mortgage),
    mortgagePercentage: mortgagePercentage,
    monthlyMortgagePayment: formatCurrency(monthlyMortgagePayment),
    yourDownPayment: formatCurrency(yourDownPayment),
  };
}

function calculateSecondScenario(homePrice, downPayment, income) {
  let totalTax = calculateTax(income);
  let grossIncome = income - totalTax;
  const grossMonthlyIncome = Math.round(grossIncome / 12);

  const monthlyPropertyTax = (homePrice * propertyTaxRate) / 12;
  const monthlyInsurance = (homePrice * insuranceRate) / 12;

  downPayment = Math.min(downPayment, homePrice * lowDownpaymentRate);

  let maxMortgagePayment = housingRatio * grossMonthlyIncome - monthlyInsurance - monthlyPropertyTax;
  let maxMortgage = calculateMaxMortgage(monthlyInterestRate, 360, maxMortgagePayment);

  let monthlyMortgagePayment = maxMortgagePayment;
  let mortgage;

  while (monthlyMortgagePayment > 0) {
    mortgage = calculateMonthlyMortgagePaymentForSecondScenerio(
      monthlyInterestRate,
      loanTermMonths,
      monthlyMortgagePayment
    );

    let PMIMonthly = (mortgage * pmiRate) / 12;

    if (Math.abs(PMIMonthly + monthlyMortgagePayment - maxMortgagePayment) <= 1) {
      break;
    }
    monthlyMortgagePayment -= 1;
  }

  const coInvestment = homePrice - mortgage - downPayment;
  let yourDownPayment = Math.abs(downPayment - coInvestment);
  let downPaymentPercentage =  Math.round((downPayment/homePrice )*100)
  let mortgagePercentage =  Math.round((mortgage/homePrice )*100)
  return {
    maxMortgagePayment: formatCurrency(maxMortgagePayment),
    maxMortgage: formatCurrency(maxMortgage),
    homePrice: formatCurrency(homePrice),
    downPayment: formatCurrency(downPayment),
    downPaymentPercentage: downPaymentPercentage,
    coInvestment: formatCurrency(coInvestment),
    mortgage: formatCurrency(mortgage),
    mortgagePercentage: mortgagePercentage,
    monthlyMortgagePayment: formatCurrency(monthlyMortgagePayment),
    yourDownPayment: formatCurrency(yourDownPayment),
  };
}

function calculateThirdScenario(
  homePrice,
  downPayment,
  income,
  firstScenerioDataMonthlyMortgagePayment,
  firstScenerioDataMaxMortgagePayment
) {
  let newHomePrice = homePrice;
  if (firstScenerioDataMonthlyMortgagePayment < firstScenerioDataMaxMortgagePayment) {
    newHomePrice = homePrice * 1.2;
  }

  let totalTax = calculateTax(income);
  let grossIncome = income - totalTax;
  const grossMonthlyIncome = Math.round(grossIncome / 12);

  const monthlyPropertyTax = (homePrice * propertyTaxRate) / 12;
  const monthlyInsurance = (homePrice * insuranceRate) / 12;

  let maxMortgagePayment = housingRatio * grossMonthlyIncome - monthlyInsurance - monthlyPropertyTax;
  let maxMortgage = calculateMaxMortgage(monthlyInterestRate, 360, maxMortgagePayment);

  let coInvestment;
  let mortgage = maxMortgage;
  if (firstScenerioDataMonthlyMortgagePayment < firstScenerioDataMaxMortgagePayment) {
    if (maxMortgage >= homePrice * 0.8) mortgage = homePrice * 0.8;
    coInvestment = newHomePrice - mortgage - downPayment;
  } else {
    coInvestment = downPayment;
    mortgage = calculateMortgagePaymentForScenerio_3_point_2(
      monthlyInterestRate,
      360,
      maxMortgagePayment - monthlyInsurance - monthlyPropertyTax
    );
  }

  const monthlyMortgagePayment = calculateMonthlyMortgagePayment(monthlyInterestRate, 360, mortgage);
  let yourDownPayment = Math.abs(downPayment - coInvestment);
  let downPaymentPercentage =  Math.round((downPayment/homePrice )*100)
  let mortgagePercentage =  Math.round((mortgage/homePrice )*100)
  return {
    maxMortgagePayment: formatCurrency(maxMortgagePayment),
    maxMortgage: formatCurrency(maxMortgage),
    homePrice: formatCurrency(homePrice),
    downPayment: formatCurrency(downPayment),
    downPaymentPercentage: downPaymentPercentage,
    coInvestment: formatCurrency(coInvestment),
    mortgage: formatCurrency(mortgage),
    mortgagePercentage: mortgagePercentage,
    monthlyMortgagePayment: formatCurrency(monthlyMortgagePayment),
    yourDownPayment: formatCurrency(yourDownPayment),
  };
}

export default {
  calculateFirstScenario,
  calculateSecondScenario,
  calculateThirdScenario,
};
