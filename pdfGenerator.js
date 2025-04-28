import { HOMEBUYER_HTMLCONTENT } from "./pdfTemplate.js";

import homeBuyerScenerios from "./homebuyerScenerioCalculator.js";

export function createTufaPDF(userInput = {}) {

    console.log('userInput is ', userInput);
  const firstScenerioData = homeBuyerScenerios.calculateFirstScenario(
    userInput.homePrice,
    userInput.downPayment,
    userInput.income
  );
  const secondScenerioData = homeBuyerScenerios.calculateSecondScenario(
    userInput.homePrice,
    userInput.downPayment,
    userInput.income
  );
  const thirdScenerioData = homeBuyerScenerios.calculateThirdScenario(
    userInput.homePrice,
    userInput.downPayment,
    userInput.income,
    firstScenerioData.monthlyMortgagePayment,
    firstScenerioData.maxMortgagePayment
  );

  const HTMLCONTENT = HOMEBUYER_HTMLCONTENT(
    userInput,
    firstScenerioData,
    secondScenerioData,
    thirdScenerioData
  );
  return HTMLCONTENT;

}


window.calculateScenarios = function (){
    const baseHomePrice = parseFloat(document.getElementById('homePriceInput').value);
    const downPayment = parseFloat(document.getElementById('downPaymentInput').value);
    const income = parseFloat(document.getElementById('incomeInput').value);
    const userName = document.getElementById('userName').value

    const container = document.getElementById("results");
    container.innerHTML = "";
    const htmlContent = createTufaPDF({userName, homePrice:baseHomePrice, downPayment, income});
    container.innerHTML = htmlContent;
  }