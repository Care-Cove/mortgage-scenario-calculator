const annualInterestRate = 0.0669;
const termYears = 30;
const monthlyInterestRate = annualInterestRate / 12;
const housingRatio = 0.28;
const payrollTax = 0.08;
const SellAfterYear = 8; // when you are going to sell
const annualReturnRate = 0.03;
const closingCostRate = 0.08; // basically  at the time of sell.
const apprecationFees = 0.03;
const taxRate = 0.011;
const insuranceRate = 0.0035;
const pmiRate = 0.005;

function formatCurrency(value) {
  return `$${Math.round(value).toLocaleString()}`;
}


function calculateMonthlyMortgagePayment(
  monthlyInterestRate,
  periods,
  principal
) {
  return (
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -periods))
  );
}
function calculateRemainingLoanBalance(
  principal,
  annualRate,
  termYears,
  paymentsMade
) {
  const r = annualRate / 12; // Monthly interest rate (full precision)
  const n = termYears * 12; // Total payments (e.g., 30 years = 360)
  const t = paymentsMade;

  const pow_n = Math.pow(1 + r, n);
  const pow_t = Math.pow(1 + r, t);
  const numerator = pow_n - pow_t;
  const denominator = pow_n - 1;

  const ratio = numerator / denominator;
  const balance = principal * ratio;

  return Math.round(balance * 100) / 100;
}
function calculateFirstScenario(homePrice, COInvestorDP) {
  let dp = homePrice * 0.2;
  const mortgage = homePrice - dp;
  const monthlyMortgagePayment = calculateMonthlyMortgagePayment(
    monthlyInterestRate,
    360,
    mortgage
  );
  const monthlyTax = (homePrice * taxRate) / 12;
  const monthlyInsurance = (homePrice * insuranceRate) / 12;
  const pmi = dp / homePrice < 0.2 ? (mortgage * pmiRate) / 12 : 0;
  console.log("monthlyTax ", monthlyTax);
  console.log("monthlyInsurance ", monthlyInsurance);

  const totalMonthly =
    monthlyMortgagePayment + monthlyTax + monthlyInsurance + pmi;
  // const annualRequiredIncome = totalMonthly * 12 / 0.28;
  const annualRequiredIncome =
    ((monthlyMortgagePayment + monthlyInsurance + monthlyTax) /
      (housingRatio * (1 - payrollTax))) *
    12;

  const salesPrice = homePrice * Math.pow(1 + annualReturnRate, SellAfterYear);

  const totalRepayMortgageAtSellTime =
    -1 *
    calculateRemainingLoanBalance(
      mortgage,
      annualInterestRate,
      termYears,
      SellAfterYear * 12
    );
  // const totalRepayMortgageAtSellTime = -1*(monthlyMortgagePayment * SellAfterYear * 12); // since it's paid hence in negative

  const proceeds = salesPrice + totalRepayMortgageAtSellTime;

  const closingCost = -1 * (salesPrice * closingCostRate);
  const investor =
    COInvestorDP +
    ((COInvestorDP / homePrice) * salesPrice - COInvestorDP) *
      (1 - apprecationFees);

  const buyer = proceeds + closingCost - investor;
  return {
    homePrice: formatCurrency(homePrice),
    downPayment: formatCurrency(dp),
    downPaymentPercentage: `${Math.round((dp / homePrice) * 100)}%`,
    coInvestment: formatCurrency(COInvestorDP),
    homeBuyerDownPayment: formatCurrency(dp - COInvestorDP),
    mortgage: formatCurrency(mortgage),
    mortgagePercentage: `${Math.round((mortgage / homePrice) * 100)}%`,
    monthly: formatCurrency(monthlyMortgagePayment),
    income: formatCurrency(annualRequiredIncome),
    sale: formatCurrency(salesPrice),
    totalRepayMortgageAtSellTime: formatCurrency(totalRepayMortgageAtSellTime),
    proceeds: formatCurrency(proceeds)  ,
    closingCost: formatCurrency(closingCost),
    investorGets: formatCurrency(investor),
    buyerGets: formatCurrency(buyer),
  };
}
function calculateSecondScenario(homePrice, COInvestorDP) {
  let dp = homePrice * 0.2; // that is needed
  // but our coinvestment is here 0, so we want to calcualte how much house price you can afford
  COInvestorDP = 0;
  // we assume equal covinvesntment hence diving by 2
  dp = dp / 2;
  // generally min downpayment is half of the house, so max mortgage will be
  const mortgage = dp / 0.2;

  const buyerDP = dp;
  // new house price that you can afford
  const newHomePrice = mortgage + dp;

  const monthlyMortgagePayment = calculateMonthlyMortgagePayment(
    monthlyInterestRate,
    360,
    mortgage
  );
  const monthlyTax = (newHomePrice * taxRate) / 12;
  const monthlyInsurance = (newHomePrice * insuranceRate) / 12;
  const pmi = dp / newHomePrice < 0.2 ? (mortgage * pmiRate) / 12 : 0;
  console.log("monthlyTax ", monthlyTax);
  console.log("monthlyInsurance ", monthlyInsurance);

  const totalMonthly =
    monthlyMortgagePayment + monthlyTax + monthlyInsurance + pmi;
  // const annualRequiredIncome = totalMonthly * 12 / 0.28;
  const annualRequiredIncome =
    ((monthlyMortgagePayment + monthlyInsurance + monthlyTax) /
      (housingRatio * (1 - payrollTax))) *
    12;

  const salesPrice =
    newHomePrice * Math.pow(1 + annualReturnRate, SellAfterYear);

  const totalRepayMortgageAtSellTime =
    -1 *
    calculateRemainingLoanBalance(
      mortgage,
      annualInterestRate,
      termYears,
      SellAfterYear * 12
    );
  // const totalRepayMortgageAtSellTime = -1*(monthlyMortgagePayment * SellAfterYear * 12); // since it's paid hence in negative

  const proceeds = salesPrice + totalRepayMortgageAtSellTime;

  const closingCost = -1 * (salesPrice * closingCostRate);
  const investor =
    COInvestorDP +
    ((COInvestorDP / newHomePrice) * salesPrice - COInvestorDP) *
      (1 - apprecationFees);

  const buyer = proceeds + closingCost - investor;
  return {
    homePrice: formatCurrency(newHomePrice),
    downPayment: formatCurrency(dp),
    downPaymentPercentage: `${Math.round((dp / newHomePrice) * 100)}%`,
    coInvestment: formatCurrency(COInvestorDP),
    homeBuyerDownPayment: formatCurrency(dp - COInvestorDP),
    mortgage: formatCurrency(mortgage),
    mortgagePercentage: `${Math.round((mortgage / newHomePrice) * 100)}%`,
    monthly: formatCurrency(monthlyMortgagePayment),
    income: formatCurrency(annualRequiredIncome),
    sale: formatCurrency(salesPrice),
    totalRepayMortgageAtSellTime: formatCurrency(totalRepayMortgageAtSellTime),
    proceeds: formatCurrency(proceeds),
    closingCost: formatCurrency(closingCost),
    investorGets: formatCurrency(investor),
    buyerGets: formatCurrency(buyer),
  };
}

export default {
  calculateFirstScenario,
  calculateSecondScenario,
};
