import { FAMILY_INVESTOR_HTMLCONTENT } from "./familyPdfTemplate.js";

import familyScenerios from "./familyScenerioCalculator.js";

export function createTufaPDF(userInput = {}) {

    console.log('userInput is ', userInput);
  const firstScenerioData = familyScenerios.calculateFirstScenario(
    userInput.homePrice,
    userInput.downPayment
  );
  const secondScenerioData = familyScenerios.calculateSecondScenario(
    userInput.homePrice,
    userInput.downPayment
  );

  const HTMLCONTENT = FAMILY_INVESTOR_HTMLCONTENT(
    userInput,
    firstScenerioData,
    secondScenerioData
  );
  return HTMLCONTENT;

}


window.calculateFamilyScenarios = function (){
  const homePrice = parseFloat(document.getElementById('homePrice').value);
  // const buyerDP = parseFloat(document.getElementById('buyerDP').value);
  const COInvestorDP = parseFloat(document.getElementById('COInvestorDP').value);
  // const annualInterestRate = (parseFloat(document.getElementById('interestRate').value)/100);
  // const termYears = parseInt(document.getElementById('loanTerm').value);
  // const monthlyInterestRate = annualInterestRate / 12;
  // const housingRatio = 0.28;
  // const payrollTax = 0.08;
  // const SellAfterYear = parseFloat(document.getElementById('sellAfterYear').value) ; // when you are going to sell
  // const annualReturnRate = parseFloat(document.getElementById('annualReturnRate').value)/100 
  // const closingCostRate = 0.08 // basically  at the time of sell.
  // const apprecationFees = parseInt(document.getElementById('apprecationFees').value)/100;
  // const taxRate = parseFloat(document.getElementById('propertyTaxRate').value)/100;
  // const insuranceRate = parseFloat(document.getElementById('insuranceRate').value)/100;
  // const pmiRate = parseFloat(document.getElementById('pmiRate').value)/100;

    const container = document.getElementById("results");
    container.innerHTML = "";
    const htmlContent = createTufaPDF({userName:"Anurag", homePrice:homePrice, downPayment:COInvestorDP});
    container.innerHTML = htmlContent;
  }