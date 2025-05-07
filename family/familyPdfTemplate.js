

/**
 * 
 * @param {*} userInput = { homePrice, downpayment, income} 
 * @param {*} 
 * @returns 
 */

export const FAMILY_INVESTOR_HTMLCONTENT = (userInput, scenerio_1, scenerio_2) =>{
  function formatCurrency(value) {
    return `$${Math.round(value).toLocaleString()}`;
  }

    return  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Family Investor Report</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #0d2857;
        background-color: #fff;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    @media (max-width: 991px) {
      .header {
        max-width: 100%;
        padding: 20px;
      }

      .header-title {
        max-width: 100%;
      }

      .header-name {
        max-width: 100%;
        font-size: 40px;
      }

      .header-divider {
        margin-right: 3px;
      }

      .intro-section {
        max-width: 100%;
      }

      .intro-text {
        max-width: 100%;
        margin-top: 33px;
      }

      .stats-card {
        margin-top: 33px;
        padding: 20px;
      }

      .scenario-title {
        max-width: 100%;
      }

      .scenario-subtitle {
        max-width: 100%;
      }

      .scenario-card {
        max-width: 100%;
      }

      .price-section {
        max-width: 100%;
      }

      .results-card {
        max-width: 100%;
        padding-left: 20px;
      }

      .results-content {
        max-width: 100%;
      }

      .results-row {
        max-width: 100%;
      }

      .scenario-description {
        max-width: 100%;
      }

      .advisor-section {
        max-width: 100%;
        padding: 20px;
      }

      .advisor-content {
        max-width: 100%;
        margin-top: 40px;
      }

      .advisor-image {
        margin-top: 17px;
      }

      .advisor-info {
        max-width: 100%;
        margin-top: 27px;
      }

      .advisor-name {
        max-width: 100%;
      }

      .advisor-description {
        max-width: 100%;
      }

      .contact-card {
        margin-top: 40px;
        padding: 20px;
      }

      .contact-info {
        white-space: initial;
      }
    }

    @media (max-width: 640px) {
      .scenarios-container {
        flex-direction: column;
      }

      .scenario-column {
        width: 100%;
        margin: 10px 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div style="border-radius: 0 0 19px 19px; background-color: #0d2857; width: 100%; padding: 38px 75px; color: #fff;">
      <div style="display: flex; align-items: stretch; gap: 20px; flex-wrap: wrap; justify-content: space-between;">
        <div style="line-height: 1.1;">
          <div style="font-size: 40px; font-family: Arial, sans-serif; font-weight: 400;">
            Co-Investing Report for
          </div>
          <div style="font-size: 96px; font-family: Merriweather, sans-serif; font-weight: 700; margin-top: 4px;">
            ${userInput.userName}
          </div>
        </div>
        <div style="border-radius: 0 0 19px 19px; display: flex; margin: auto 0; flex-direction: column; align-items: flex-end; font-family: Helvetica, sans-serif; font-size: 36px; font-weight: 400; text-align: right; line-height: 1.2;">
          <div>Powered by</div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1615fc93dc79150303b76e6100ef098d269cd2?placeholderIfAbsent=true&apiKey=eb0b0060979f42caa4fdee4e8f4b0dd3" style="aspect-ratio: 1; object-fit: contain; object-position: center; width: 257px; margin-top: 7px; max-width: 100%; overflow: hidden;">
        </div>
      </div>

      <div style="border-color: #fff; border-style: solid; border-width: 1px; margin-top: 33px; width: 100%; height: 1px;"></div>

      <div style="margin-top: 32px; width: 100%;">
        <div style="display: flex; gap: 20px;">
          <div style="display: flex; flex-direction: column; width: 74%;">
            <div style="color: #fff; font-size: 28px; font-family: Arial, sans-serif; font-weight: 400; line-height: 34px;">
              <span style="font-family: Merriweather, sans-serif; font-weight: 700; color: #fff;">
                Tufa helps families find the best way to work together with their Homebuyer loved ones to maximize the impact of family support.
              </span>
              <br><br>
              <span style="font-family: Helvetica, sans-serif;">
                This report provides some different options that may be right for your situation. Tufa Advisors are experts in helping families figure out what is right for their situation and can help you work through additional options. This report is based on the information you provided online.
              </span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; width: 26%;">
            <div style="border-radius: 19px; background-color: #fff; display: flex; width: 100%; padding: 32px 24px; align-items: center; gap: 24px;">
              <div style="align-self: stretch; display: flex; min-width: 240px; margin: auto 0; width: 279px; align-items: center; gap: 24px;">
                <div style="align-self: stretch; display: flex; min-width: 240px; margin: auto 0; flex-direction: column; align-items: stretch;">
                  <div style="color: #132756; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1; text-align: center; text-decoration: underline; align-self: start;">
                    What you told us:
                  </div>
                  <div style="margin-top: 16px; max-width: 100%; width: 256px;">
                    <div style="width: 100%;">
                      <div style="color: #0d2857; font-size: 24px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Target Home Price:
                      </div>
                      <div style="color: #e81a4a; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 39px;">
                        <span>${formatCurrency(userInput.homePrice)}</span><br>
                      </div>
                    </div>
                    <div style="margin-top: 24px; width: 100%;">
                      <div style="color: #0d2857; font-size: 24px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Intended Contribution:
                      </div>
                      <div style="color: #e81a4a; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 39px;">
                        <span>${formatCurrency(userInput.downPayment)}</span><br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="display: flex; margin-top: 25px; align-items: flex-start; gap: 14px; justify-content: flex-start; flex-wrap: wrap;" class="scenarios-container">
      <!-- Scenario 1 -->
      <div style="min-width: 240px; width: 510px;" class="scenario-column">
        <div style="width: 100%;">
          <div style="width: 100%;">
            <div style="max-width: 100%; width: 557px; font-family: Merriweather, sans-serif; color: #0d2857; font-weight: 700; line-height: 1;">
              <div style="font-size: 24px;">
                <span style="font-style: italic; color: #e81a4a;">Scenario 1:</span>
              </div>
              <div style="font-size: 32px; margin-top: 5px;">
                <span style="font-style: italic;">With</span>
                <span>Your Co-Investment</span>
              </div>
            </div>

            <div style="border-radius: 19px; background-color: #fff; border: 1px solid #0d2857; margin-top: 9px; min-height: 400px; width: 100%; padding: 22px 19px 54px;">
              <div style="display: flex; height: 324px; width: 100%; max-width: 472px; flex-direction: column; align-items: stretch;">
                <div style="align-self: flex-start; display: flex; align-items: center; gap: 14px;">
                  <div style="align-self: stretch; margin: auto 0; width: 236px;">
                    <div style="color: #0d2857; font-size: 48px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.homePrice}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; margin-top: 4px;">
                      Home Price
                    </div>
                  </div>
                  <div style="color: #667085; font-size: 48px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; align-self: stretch; margin: auto 0;">
                    /
                  </div>
                  <div style="align-self: stretch; margin: auto 0; color: #667085; width: 153px;">
                    <div style="font-size: 36px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.coInvestment}
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; margin-top: 4px;">
                      Co-Investment
                    </div>
                  </div>
                </div>

                <div style="border: 1px solid #0d2857; min-height: 1px; margin-top: 14px; width: 100%;"></div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: center; gap: 24px;">
                  <div style="align-self: stretch; margin: auto 0; width: 200px;">
                    <div style="color: #0d2857; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.downPayment}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Down Payment (20%)
                    </div>
                  </div>
                  <div style="align-self: stretch; margin: auto 0; width: 162px;">
                    <div style="color: #0d2857; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.mortgage}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Mortage (${scenerio_1.mortgagePercentage})
                    </div>
                  </div>
                </div>

                <div style="border: 1px solid #667085; min-height: 1px; margin-top: 14px; max-width: 100%; width: 162px;"></div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: flex-start; gap: 24px;">
                  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 200px;">
                    <div style="max-width: 100%; width: 225px;">
                      <div style="color: #e81a4a; font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_1.homeBuyerDownPayment}
                      </div>
                      <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 19px;">
                        Contributed by the Homebuyer
                      </div>
                    </div>
                    <div style="margin-top: 12px; width: 162px; max-width: 100%; color: #667085;">
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_1.coInvestment}
                      </div>
                      <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Your Co-Investment
                      </div>
                    </div>
                  </div>
                  <div style="width: 137px;">
                    <div>
                      <div style="color: #e81a4a; font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_1.monthly}
                      </div>
                      <div style="color: #667085; font-size: 16px; font-family: Arial, sans-serif; font-weight: 400; line-height: 1.2;">
                        Monthly Mortgage Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 10px; width: 100%;">
          <div style="width: 100%;">
            <div style="width: 100%; font-family: Merriweather, sans-serif; font-size: 24px; color: #0d2857; font-weight: 400; line-height: 1;">
              If sold in 8 years:
            </div>

            <div style="border-radius: 19px; background-color: #e81a4a; display: flex; margin-top: 9px; width: 100%; padding: 21px 32px 21px 32px; flex-direction: column; align-items: stretch; color: #f5f5f5; justify-content: center;">
              <div style="width: 100%; max-width: 472px;">
                <div style="display: flex; width: 100%; align-items: center; gap: 40px 48px;">
                  <div style="align-self: stretch; margin: auto 0; width: 200px;">
                    <div style="font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.coInvestment}
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Your Investment
                    </div>
                  </div>
                  <div style="align-self: stretch; margin: auto 0; width: 162px;">
                    <div style="font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_1.investorGets}*
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Your Return
                    </div>
                  </div>
                </div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: flex-start; gap: 40px 48px;">
                  <div style="width: 200px;">
                    <div style="max-width: 100%; width: 197px;">
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_1.homeBuyerDownPayment}
                      </div>
                      <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Homebuyer's Investment
                      </div>
                    </div>
                  </div>
                  <div style="width: 137px;">
                    <div>
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_1.buyerGets}
                      </div>
                      <div style="font-size: 16px; font-family: Arial, sans-serif; font-weight: 400; line-height: 1.2;">
                        Homebuyer's Return
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="color: #0d2857; font-size: 18px; font-family: HeadlandOne, sans-serif; font-weight: 400; line-height: 22px; margin-top: 12px;">
          <span style="font-family: Helvetica, sans-serif;">
            The most straightforward way for your loved one to purchase their home is to combine your support with their own funds to cover a 20% down payment.
          </span>
          <br><br>
          <span style="font-family: Helvetica, sans-serif;">
            By co-investing, when house prices increase, you generate a return on your initial investment, but more importantly - your support provides leverage for the Homebuyer who sees an outsized return on their home investment.
          </span>
          <span style="font-family: Helvetica, sans-serif; color: #667085;">
            *Upon sale, Tufa has 3% fee on the increase in value, NOT your principal.
          </span>
        </div>
      </div>

      <!-- Scenario 2 -->
      <div style="min-width: 240px; width: 510px;" class="scenario-column">
        <div style="width: 100%;">
          <div style="width: 100%;">
            <div style="max-width: 100%; width: 557px; font-family: Merriweather, sans-serif; color: #0d2857; font-weight: 700; line-height: 1;">
              <div style="font-size: 24px;">
                <span style="font-style: italic; color: #667085;">Scenario 2:</span>
              </div>
              <div style="font-size: 32px; margin-top: 5px;">
                <span style="font-style: italic; color: #0d2857;">Without</span>
                <span style="color: #0d2857;">Your Co-Investment</span>
              </div>
            </div>

            <div style="border-radius: 19px; background-color: #e9eaee; border: 1px solid #0d2857; margin-top: 9px; min-height: 400px; width: 100%; padding: 22px 19px 54px;">
              <div style="display: flex; height: 324px; width: 100%; max-width: 472px; flex-direction: column; align-items: stretch;">
                <div style="align-self: flex-start; display: flex; align-items: center; gap: 14px;">
                  <div style="align-self: stretch; margin: auto 0; width: 233px;">
                    <div style="color: #0d2857; font-size: 48px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_2.homePrice}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; margin-top: 4px;">
                      Home Price
                    </div>
                  </div>
                  <div style="color: #667085; font-size: 48px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; align-self: stretch; margin: auto 0;">
                    /
                  </div>
                  <div style="align-self: stretch; margin: auto 0; color: #667085; width: 135px;">
                    <div style="font-size: 36px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_2.coInvestment}
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1; margin-top: 4px;">
                      Co-Investment
                    </div>
                  </div>
                </div>

                <div style="border: 1px solid #0d2857; min-height: 1px; margin-top: 14px; width: 100%;"></div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: center; gap: 24px;">
                  <div style="align-self: stretch; margin: auto 0; width: 200px;">
                    <div style="color: #0d2857; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.downPayment}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Down Payment (${scenerio_2.downPaymentPercentage})
                    </div>
                  </div>
                  <div style="align-self: stretch; margin: auto 0; width: 162px;">
                    <div style="color: #0d2857; font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_2.mortgage}
                    </div>
                    <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Mortage (${scenerio_2.mortgagePercentage})
                    </div>
                  </div>
                </div>

                <div style="border: 1px solid #667085; min-height: 1px; margin-top: 14px; max-width: 100%; width: 162px;"></div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: flex-start; gap: 24px;">
                  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 200px;">
                    <div style="max-width: 100%; width: 225px;">
                      <div style="color: #e81a4a; font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.homeBuyerDownPayment}
                      </div>
                      <div style="color: #667085; font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 19px;">
                        Contributed by the Homebuyer
                      </div>
                    </div>
                    <div style="margin-top: 12px; width: 162px; max-width: 100%; color: #667085;">
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.coInvestment}
                      </div>
                      <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Your Co-Investment
                      </div>
                    </div>
                  </div>
                  <div style="width: 137px;">
                    <div>
                      <div style="color: #e81a4a; font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.monthly}
                      </div>
                      <div style="color: #667085; font-size: 16px; font-family: Arial, sans-serif; font-weight: 400; line-height: 1.2;">
                        Monthly Mortgage Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 10px; width: 100%;">
          <div style="width: 100%;">
            <div style="width: 100%; font-family: Merriweather, sans-serif; font-size: 24px; color: #667085; font-weight: 400; line-height: 1;">
              If sold in 8 years:
            </div>

            <div style="border-radius: 19px; background-color: #667085; display: flex; margin-top: 9px; width: 100%; padding: 21px 32px 21px 32px; flex-direction: column; align-items: stretch; color: #f5f5f5; justify-content: center;">
              <div style="width: 100%; max-width: 472px;">
                <div style="display: flex; width: 100%; align-items: center; gap: 40px 48px;">
                  <div style="align-self: stretch; margin: auto 0; width: 200px;">
                    <div style="font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_2.coInvestment}
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Your Investment
                    </div>
                  </div>
                  <div style="align-self: stretch; margin: auto 0; width: 162px;">
                    <div style="font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                      ${scenerio_2.investorGets}
                    </div>
                    <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1;">
                      Your Return
                    </div>
                  </div>
                </div>

                <div style="display: flex; margin-top: 14px; width: 100%; align-items: flex-start; gap: 40px 48px;">
                  <div style="width: 200px;">
                    <div style="max-width: 100%; width: 197px;">
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.homeBuyerDownPayment}
                      </div>
                      <div style="font-size: 16px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.2;">
                        Homebuyer's Investment
                      </div>
                    </div>
                  </div>
                  <div style="width: 137px;">
                    <div>
                      <div style="font-size: 28px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
                        ${scenerio_2.buyerGets}
                      </div>
                      <div style="font-size: 16px; font-family: Arial, sans-serif; font-weight: 400; line-height: 1.2;">
                        Homebuyer's Return
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="color: #0d2857; font-size: 18px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 22px; margin-top: 12px;">
          <span>
            Without your support, the Homebuyer will need to provide 20% of the purchase price for the down payment to avoid additional costs, reducing their purchase power and the amount of house they can purchase.
          </span>
          <br><br>
          <span>
            Even with a co-investment, the Homebuyer ends up with a larger return alongside your co-investment than they would make owning 100% of a smaller home.
          </span>
        </div>
      </div>

      <!-- Other Scenarios -->
      <div style="min-width: 240px; width: 242px;">
        <div style="width: 100%; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1;">
          <div style="color: #e81a4a; font-size: 24px;">
            Other Scenarios
          </div>
          <div style="color: #0d2857; font-size: 32px; margin-top: 5px;">
            Tufa can help!
          </div>
        </div>

        <div style="border-radius: 18px; background-color: #fff; border: 1px solid #0d2857; display: flex; margin-top: 13px; width: 100%; padding: 18px; flex-direction: column; align-items: stretch; font-family: 'Merge One', sans-serif; font-size: 20px; color: #0d2857; font-weight: 400; line-height: 26px; justify-content: center;">
          <span style="font-family: Helvetica, sans-serif;">
            Each family situation is unique. We can walk you through how to structure your support to achieve whatever goal makes sense for your family.
          </span>
          <br><br>
          <span style="font-family: Merriweather, sans-serif; font-weight: 700; font-size: 18px;">
            Including:
          </span>
          <ul>
            <li>
              <span style="font-family: Helvetica, sans-serif; font-size: 18px;">
                Lowest monthly mortgage payment
              </span>
            </li>
            <li>
              <span style="font-family: Helvetica, sans-serif; font-size: 18px;">
                Buying a house without the Homebuyer contributing to the down payment
              </span>
            </li>
            <li>
              <span style="font-family: Helvetica, sans-serif; font-size: 18px;">
                Combining a co-investment with a gift to maximize purchasing power
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Advisor Section -->
    <div style="border-radius: 19px 19px 0 0; background-color: #0d2857; margin-top: 28px; width: 100%; padding: 36px 78px;">
      <div style="display: flex; gap: 20px;">
        <div style="display: flex; flex-direction: column; width: 68%;">
          <div style="margin-top: 4px; flex-grow: 1;">
            <div style="display: flex; gap: 20px;">
              <div style="display: flex; flex-direction: column; width: 26%;">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8c359363d016fa1f22ee1b7dc07f987400e9c8?placeholderIfAbsent=true&apiKey=eb0b0060979f42caa4fdee4e8f4b0dd3" style="aspect-ratio: 1; object-fit: contain; object-position: center; width: 211px; border-radius: 19px; flex-shrink: 0; max-width: 100%; flex-grow: 1; overflow: hidden;">
              </div>
              <div style="display: flex; flex-direction: column; width: 74%;">
                <div style="margin: auto 0; align-self: stretch; color: #fff;">
                  <div style="font-size: 32px; font-family: Merriweather, sans-serif; font-weight: 700; line-height: 1.4;">
                    <span>Meet</span>
                    <span style="text-decoration: underline">Matt Hasten</span>
                    <span>, your Tufa Advisor</span>
                  </div>
                  <div style="font-size: 28px; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 34px; margin-top: 12px;">
                    Each family situation is unique and your Tufa Advisor can work with you to figure what is right for you, whether that is co-investment, a gift, or other ways to get into the right home.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; width: 32%;">
          <div style="border-radius: 19px; background-color: #e81a4a; display: flex; padding: 19px 35px; flex-direction: column; align-items: center; color: #fff; font-weight: 700; text-align: center; justify-content: center; width: 100%;">
            <div style="display: flex; max-width: 100%; width: 327px; flex-direction: column; align-items: center;">
              <div style="display: flex; width: 299px; max-width: 100%; flex-direction: column; align-items: center; font-family: Merriweather, sans-serif; font-size: 36px; line-height: 50px;">
                <div>Talk to Matt</div>
                <div style="border: 1px solid #fff; min-height: 2px; width: 100%;"></div>
              </div>
              <div style="display: flex; margin-top: 14px; width: 100%; flex-direction: column; align-items: center; font-family: Helvetica, sans-serif; font-size: 28px; line-height: 1.4;">
                <div>425-484-4484</div>
                <div style="text-decoration: underline;">matt@tufahomes.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>



`
}