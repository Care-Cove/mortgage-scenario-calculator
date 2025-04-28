

/**
 * 
 * @param {*} userInput = { homePrice, downpayment, income} 
 * @param {*} 
 * @returns 
 */

export const HOMEBUYER_HTMLCONTENT = (userInput, scenerio_1, scenerio_2, scenerio_3) =>{
  function formatCurrency(value) {
    return `$${Math.round(value).toLocaleString()}`;
  }
  function parseCurrency(currencyStr) {
    return Number(currencyStr.replace(/[$,]/g, ''));
  }
  const maxMortgageAmount = formatCurrency(
    Math.max(
      parseCurrency(scenerio_1.mortgage),
      parseCurrency(scenerio_2.mortgage),
      parseCurrency(scenerio_3.mortgage)
    )
  );
  
  const maxMortgageMonthlyAmount = formatCurrency(
    Math.max(
      parseCurrency(scenerio_1.monthlyMortgagePayment),
      parseCurrency(scenerio_2.monthlyMortgagePayment),
      parseCurrency(scenerio_3.monthlyMortgagePayment)
    )
  );

    return  `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homebuying Report</title>
    <link rel="stylesheet" href="buyer-report-page.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
/* Base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  background-color: #fff;
}

/* Main container */
.buyer-report-page {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
}

/* Header section */
.report-header {
  border-radius: 0 0 19px 19px;
  background-color: #0d2857;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}

@media (max-width: 991px) {
  .report-header {
    max-width: 100%;
  }
}

.header-container {
  display: flex;
  width: 100%;
  padding-left: 75px;
  padding-right: 75px;
  flex-direction: column;
  align-items: stretch;
}

@media (max-width: 991px) {
  .header-container {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.header-content {
  width: 100%;
  color: #fff;
}

@media (max-width: 991px) {
  .header-content {
    max-width: 100%;
  }
}

.header-title-container {
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .header-title-container {
    max-width: 100%;
  }
}

.header-title-wrapper {
  line-height: 1.1;
}

@media (max-width: 991px) {
  .header-title-wrapper {
    max-width: 100%;
  }
}

.report-subtitle {
  font-size: 40px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
}

@media (max-width: 991px) {
  .report-subtitle {
    max-width: 100%;
  }
}

.client-name {
  font-size: 96px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  margin-top: 4px;
}

@media (max-width: 991px) {
  .client-name {
    max-width: 100%;
    font-size: 40px;
  }
}

.powered-by {
  border-radius: 0 0 19px 19px;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: flex-end;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-size: 36px;
  font-weight: 400;
  text-align: right;
  line-height: 1.2;
  justify-content: flex-start;
}

.logo {
  aspect-ratio: 2.79;
  object-fit: contain;
  object-position: center;
  width: 257px;
  margin-top: 7px;
  max-width: 100%;
}

.header-divider {
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  margin-top: 26px;
  flex-shrink: 0;
  height: 1px;
}

@media (max-width: 991px) {
  .header-divider {
    max-width: 100%;
  }
}

.intro-text {
  color: #fff;
  font-size: 28px;
  font-family:
    Arial,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 34px;
  margin-top: 35px;
  width: 865px;
}

@media (max-width: 991px) {
  .intro-text {
    max-width: 100%;
  }
}

.intro-highlight {
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  color: #fff;
}

.intro-regular {
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
}

/* User info card */
.user-info-card {
  border-radius: 19px;
  background-color: #fff;
  align-self: flex-end;
  z-index: 10;
  display: flex;
  margin-top: -238px;
  padding: 32px 24px;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  aspect-ratio: 1;
}

@media (max-width: 991px) {
  .user-info-card {
    margin-top: -200px;
    margin-right: 3px;
    padding: 20px;
  }
}

.user-info-container {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 308px;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
}

.user-info-content {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 308px;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.user-info-title {
  color: #132756;
  font-size: 32px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-decoration: underline;
  align-self: flex-start;
}

.user-info-details {
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.info-item {
  width: 100%;
  margin-top: 24px;
}

.info-item:first-child {
  margin-top: 0;
  width: 256px;
  max-width: 100%;
}

.info-item:nth-child(2) {
  width: 254px;
  max-width: 100%;
}

.info-label {
  color: #0d2857;
  font-size: 24px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 1.2;
}

.info-value {
  color: #e81a4a;
  font-size: 32px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 39px;
}

/* Mortgage info section */
.mortgage-info {
  z-index: 10;
  display: flex;
  margin-top: -71px;
  width: 100%;
  padding: 0 75px 18px;
  flex-direction: column;
  color: #fff;
}

@media (max-width: 991px) {
  .mortgage-info {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.mortgage-card {
  border-radius: 19px;
  background-color: #e81a4a;
  z-index: 10;
  display: flex;
  min-height: 242px;
  width: 417px;
  max-width: 100%;
  padding: 28px 9px;
  flex-direction: column;
  align-items: center;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  text-align: center;
  justify-content: center;
}

.mortgage-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.mortgage-title-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  font-size: 28px;
  line-height: 1;
  justify-content: flex-start;
}

.mortgage-divider {
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  align-self: center;
  min-height: 1px;
  margin-top: 16px;
  width: 372px;
  max-width: 100%;
}

.mortgage-amount-container {
  align-self: center;
  margin-top: 12px;
  width: 308px;
  max-width: 100%;
}

.mortgage-amount {
  font-size: 56px;
  line-height: 1;
}

@media (max-width: 991px) {
  .mortgage-amount {
    font-size: 40px;
  }
}

.mortgage-monthly {
  font-size: 24px;
  line-height: 30px;
}

.mortgage-description {
  font-size: 28px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 34px;
  align-self: flex-end;
  margin-top: -120px;
  width: 831px;
}

@media (max-width: 991px) {
  .mortgage-description {
    max-width: 100%;
  }
}

/* Scenarios section */
.scenarios-container {
  align-self: center;
  display: flex;
  margin-top: 25px;
  align-items: flex-start;
  gap: 40px 45px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .scenarios-container {
    max-width: 100%;
  }
}

.scenario-card {
  min-width: 240px;
  width: 400px;
}

.scenario-content {
  width: 100%;
}

.scenario-header {
  width: 100%;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  color: #0d2857;
  font-weight: 700;
}

.scenario-label {
  font-size: 24px;
  line-height: 1;
}

.highlight {
  font-style: italic;
  color: #e81a4a;
}

.scenario-title {
  font-size: 32px;
  line-height: 39px;
  margin-top: 5px;
}

.scenario-details {
  border-radius: 19px;
  background-color: #fff;
  border: 2px solid #0d2857;
  display: flex;
  margin-top: 9px;
  min-height: 400px;
  width: 400px;
  padding: 0 19px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
}

.scenario-data {
  width: 100%;
  max-width: 362px;
}

.home-price-container {
  width: 254px;
  max-width: 100%;
}

.price-large {
  color: #0d2857;
  font-size: 48px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 1;
}

@media (max-width: 991px) {
  .price-large {
    font-size: 40px;
  }
}

.price-label {
  color: #667085;
  font-size: 16px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 1;
  margin-top: 4px;
}

.payment-breakdown {
  display: flex;
  margin-top: 14px;
  width: 100%;
  align-items: center;
  gap: 28px;
  justify-content: flex-start;
}

.payment-item {
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 162px;
}

.payment-amount {
  color: #0d2857;
  font-size: 32px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  align-self: flex-start;
}

.payment-label {
  color: #667085;
  font-size: 16px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 1;
}

.scenario-divider {
  border-color: #0d2857;
  border-style: solid;
  border-width: 1px;
  min-height: 1px;
  margin-top: 14px;
  max-width: 100%;
  width: 162px;
}

.investment-details {
  display: flex;
  margin-top: 14px;
  width: 100%;
  align-items: flex-start;
  gap: 28px;
  justify-content: flex-start;
}

.investment-column {
  width: 162px;
}

.investment-item {
  max-width: 100%;
  width: 162px;
  color: #667085;
  margin-top: 12px;
}

.investment-item:first-child {
  margin-top: 0;
}

.investment-amount {
  font-size: 28px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 1;
}

.highlight-amount {
  color: #e81a4a;
}

.investment-label {
  font-size: 16px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 19px;
}

.mortgage-payment {
  color: #667085;
  width: 137px;
}

.scenario-description {
  color: #0d2857;
  font-size: 20px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-top: 12px;
}

.description-regular {
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
}

.description-medium {
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
}

/* Advisor section */
.advisor-section {
  border-radius: 19px 19px 0 0;
  background-color: #0d2857;
  margin-top: 25px;
  width: 100%;
  padding: 38px 74px;
}

@media (max-width: 991px) {
  .advisor-section {
    max-width: 100%;
    padding: 38px 20px;
  }
}

.advisor-container {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .advisor-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.advisor-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 68%;
  margin-left: 0;
}

@media (max-width: 991px) {
  .advisor-info {
    width: 100%;
  }
}

.advisor-image-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 26%;
  margin-left: 0;
}

@media (max-width: 991px) {
  .advisor-image-container {
    width: 100%;
  }
}

.advisor-image {
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 211px;
  border-radius: 19px;
  flex-shrink: 0;
  max-width: 100%;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .advisor-image {
    margin-top: 24px;
  }
}

.advisor-bio {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .advisor-bio {
    width: 100%;
  }
}

.advisor-text {
  margin-top: 6px;
  color: #fff;
}

@media (max-width: 991px) {
  .advisor-text {
    max-width: 100%;
    margin-top: 30px;
  }
}

.advisor-title {
  font-size: 32px;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 700;
  line-height: 1.4;
}

.underline {
  text-decoration: underline;
}

@media (max-width: 991px) {
  .advisor-title {
    max-width: 100%;
  }
}

.advisor-description {
  font-size: 28px;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-weight: 400;
  line-height: 34px;
  margin-top: 12px;
}

@media (max-width: 991px) {
  .advisor-description {
    max-width: 100%;
  }
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 32%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .contact-container {
    width: 100%;
  }
}

.contact-card {
  border-radius: 19px;
  background-color: #e81a4a;
  display: flex;
  flex-grow: 1;
  padding: 19px 35px;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  width: 100%;
}

@media (max-width: 991px) {
  .contact-card {
    margin-top: 40px;
    padding: 19px 20px;
  }
}

.contact-header {
  display: flex;
  width: 299px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  font-family:
    Merriweather,
    -apple-system,
    Roboto,
    sans-serif;
  font-size: 36px;
  line-height: 50px;
  justify-content: flex-start;
}

.contact-divider {
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  min-height: 2px;
  width: 100%;
}

.contact-details {
  display: flex;
  margin-top: 14px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family:
    Helvetica,
    -apple-system,
    Roboto,
    sans-serif;
  font-size: 28px;
  white-space: nowrap;
  line-height: 1.4;
  justify-content: flex-start;
}

@media (max-width: 991px) {
  .contact-details {
    white-space: initial;
  }
}

.contact-email {
  text-decoration: underline;
}


    </style>
  </head>

  <body>
    <main class="buyer-report-page">
      <header class="report-header">
        <div class="header-container">
          <div class="header-content">
            <div class="header-title-container">
              <div class="header-title-wrapper">
                <h2 class="report-subtitle">Homebuying Report for</h2>
                <h1 class="client-name">${userInput.userName || ""}</h1>
              </div>
              <div class="powered-by">
                <p>Powered by</p>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe3827b28469322c286bf3a04fc7000516fd484?placeholderIfAbsent=true&apiKey=eb0b0060979f42caa4fdee4e8f4b0dd3" class="logo" alt="Tufa Logo" />
              </div>
            </div>
            <hr class="header-divider" />
          </div>
          <p class="intro-text">
            <span class="intro-highlight"
              >Tufa helps homebuyers find the best way to work together with
              their families to maximize the impact of family support.</span
            >
            <br /><br />
            <span class="intro-regular"
              >This report provides some different options that may be right for
              your situation. Tufa Advisors are experts in helping families
              figure out what is right for their situation and can help you work
              through additional options. This report is based on the
              information you provided online.</span
            >
          </p>
          <aside class="user-info-card">
            <div class="user-info-container">
              <div class="user-info-content">
                <h3 class="user-info-title">What you told us:</h3>
                <div class="user-info-details">
                  <div class="info-item">
                    <p class="info-label">Target Home Price:</p>
                    <p class="info-value">${formatCurrency(userInput.homePrice)}<br /></p>
                  </div>
                  <div class="info-item">
                    <p class="info-label">Down Payment Funds:</p>
                    <p class="info-value">${formatCurrency(userInput.downPayment)}<br /></p>
                  </div>
                  <div class="info-item">
                    <p class="info-label">Annual Household Income:</p>
                    <p class="info-value">${formatCurrency(userInput.income)}<br /></p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="mortgage-info">
          <div class="mortgage-card">
            <div class="mortgage-content">
              <div class="mortgage-title-container">
                <h3 class="mortgage-title">Max Mortgage Amount</h3>
                <hr class="mortgage-divider" />
              </div>
              <div class="mortgage-amount-container">
                <p class="mortgage-amount">${maxMortgageAmount}</p>
                <p class="mortgage-monthly">${maxMortgageMonthlyAmount} / month</p>
              </div>
            </div>
          </div>
          <p class="mortgage-description">
            Most mortgage lenders limit the size of mortgage to ensure that your
            total monthly housing costs do not exceed 28% of your monthly
            income, including property tax and home insurance.
          </p>
        </div>
      </header>

      <section class="scenarios-container">
        <article class="scenario-card">
          <div class="scenario-content">
            <header class="scenario-header">
              <h3 class="scenario-label">
                <em class="highlight">Scenario 1:</em>
              </h3>
              <h2 class="scenario-title">Achieve your target home price</h2>
            </header>
            <div class="scenario-details">
              <div class="scenario-data">
                <div class="home-price-container">
                  <p class="price-large">${scenerio_1.homePrice}</p>
                  <p class="price-label">Home Price</p>
                </div>
                <div class="payment-breakdown">
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_1.downPayment}</p>
                    <p class="payment-label">Down Payment (${scenerio_1.downPaymentPercentage}%)</p>
                  </div>
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_1.mortgage}</p>
                    <p class="payment-label">Mortage (${scenerio_1.mortgagePercentage}%)</p>
                  </div>
                </div>
                <hr class="scenario-divider" />
                <div class="investment-details">
                  <div class="investment-column">
                    <div class="investment-item">
                      <p class="investment-amount">${scenerio_1.yourDownPayment}</p>
                      <p class="investment-label">
                        Your Down Payment Contribution
                      </p>
                    </div>
                    <div class="investment-item">
                      <p class="investment-amount highlight-amount">${scenerio_1.coInvestment}</p>
                      <p class="investment-label">Co-Investment Needed</p>
                    </div>
                  </div>
                  <div class="mortgage-payment">
                    <div>
                      <p class="payment-amount">${scenerio_1.monthlyMortgagePayment}</p>
                      <p class="payment-label">Monthly Mortgage Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="scenario-description">
            <span class="description-regular"
              >To achieve your target home price with</span
            >
            <span class="description-medium"
              >a mortgage that is at least 20% down</span
            >
            <span class="description-regular"
              >AND to ensure your monthly mortgage payment is in line with your
              income, you would need ${scenerio_1.coInvestment} of co-investment.</span
            >
          </p>
        </article>

        <article class="scenario-card">
          <div class="scenario-content">
            <header class="scenario-header">
              <h3 class="scenario-label">
                <em class="highlight">Scenario 2:</em>
              </h3>
              <h2 class="scenario-title">Put the smallest amount down</h2>
            </header>
            <div class="scenario-details">
              <div class="scenario-data">
                <div class="home-price-container">
                  <p class="price-large">${scenerio_2.homePrice}</p>
                  <p class="price-label">Home Price</p>
                </div>
                <div class="payment-breakdown">
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_2.downPayment}</p>
                    <p class="payment-label">Down Payment (${scenerio_2.downPaymentPercentage}%)</p>
                  </div>
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_2.mortgage}</p>
                    <p class="payment-label">Mortage (${scenerio_2.mortgagePercentage}%)</p>
                  </div>
                </div>
                <hr class="scenario-divider" />
                <div class="investment-details">
                  <div class="investment-column">
                    <div class="investment-item">
                      <p class="investment-amount">${scenerio_2.yourDownPayment}</p>
                      <p class="investment-label">
                        Your Down Payment Contribution
                      </p>
                    </div>
                    <div class="investment-item">
                      <p class="investment-amount highlight-amount">${scenerio_2.coInvestment}</p>
                      <p class="investment-label">Co-Investment Needed</p>
                    </div>
                  </div>
                  <div class="mortgage-payment">
                    <div>
                      <p class="payment-amount">${scenerio_2.monthlyMortgagePayment}</p>
                      <p class="payment-label">Monthly Mortgage Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="scenario-description">
            To achieve your target home price while requiring the smallest
            possible amount down implies a larger monthly mortgage payment,
            while still ensuring your mortgage payment is in line with your
            income. To achieve this, you would need a ${scenerio_2.coInvestment} co-investment
          </p>
        </article>

        <article class="scenario-card">
          <div class="scenario-content">
            <header class="scenario-header">
              <h3 class="scenario-label">
                <em class="highlight">Scenario 3:</em>
              </h3>
              <h2 class="scenario-title">
                Get the right house for your budget
              </h2>
            </header>
            <div class="scenario-details">
              <div class="scenario-data">
                <div class="home-price-container">
                  <p class="price-large">${scenerio_3.homePrice}</p>
                  <p class="price-label">Home Price</p>
                </div>
                <div class="payment-breakdown">
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_3.downPayment}</p>
                    <p class="payment-label">Down Payment (${scenerio_3.downPaymentPercentage}%)</p>
                  </div>
                  <div class="payment-item">
                    <p class="payment-amount">${scenerio_3.mortgage}</p>
                    <p class="payment-label">Mortage (${scenerio_3.mortgagePercentage}%)</p>
                  </div>
                </div>
                <hr class="scenario-divider" />
                <div class="investment-details">
                  <div class="investment-column">
                    <div class="investment-item">
                      <p class="investment-amount">${scenerio_3.yourDownPayment}</p>
                      <p class="investment-label">
                        Your Down Payment Contribution
                      </p>
                    </div>
                    <div class="investment-item">
                      <p class="investment-amount highlight-amount">${scenerio_3.coInvestment}</p>
                      <p class="investment-label">Co-Investment Needed</p>
                    </div>
                  </div>
                  <div class="mortgage-payment">
                    <div>
                      <p class="payment-amount">${scenerio_3.monthlyMortgagePayment}</p>
                      <p class="payment-label">Monthly Mortgage Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="scenario-description">
            Given the amount you can put towards your down payment and your
            household income, you may consider adjusting your target home price.
            Assuming your co-investors match your down payment contribution, a
            target home price of ${scenerio_3.homePrice} will keep your mortgage payments in
            line with your income.
          </p>
        </article>
      </section>

      <footer class="advisor-section">
        <div class="advisor-container">
          <div class="advisor-info">
            <figure class="advisor-image-container">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21151212247b3a6e85cc63bd5287293ad89c0125?placeholderIfAbsent=true&apiKey=eb0b0060979f42caa4fdee4e8f4b0dd3" class="advisor-image" alt="Advisor Photo" />
            </figure>
            <div class="advisor-bio">
              <div class="advisor-text">
                <h2 class="advisor-title">
                  Meet <span class="underline">Matt Hasten</span>, your Tufa
                  Advisor
                </h2>
                <p class="advisor-description">
                  Each family situation is unique and your Tufa Advisor can work
                  with you to figure what is right for you, whether that is
                  co-investment, a gift, or other ways to get into the right
                  home.
                </p>
              </div>
            </div>
          </div>
          <div class="contact-container">
            <div class="contact-card">
              <div class="contact-header">
                <h3 class="contact-title">Talk to Matt</h3>
                <hr class="contact-divider" />
              </div>
              <div class="contact-details">
                <p class="contact-phone">425-484-4484</p>
                <p class="contact-email">matt@tufahomes.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </body>
</html>


`
}