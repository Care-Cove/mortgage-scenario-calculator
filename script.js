function calculateScenarios() {
    const homePrice = parseFloat(document.getElementById('homePriceInput').value);
    const income = parseFloat(document.getElementById('incomeInput').value);
    const downPayment = parseFloat(document.getElementById('downPaymentInput').value);
    const maxMonthlyPayment = (income / 12) * 0.31;
    const maxMortgage = 240557; // using value from provided data for now
  
    const scenarios = [
      {
        title: "Scenario 1",
        housePrice: 500000,
        downPayment: 50000,
        coInvestment: 209443,
        mortgage: 240557,
        monthlyPayment: 1551
      },
      {
        title: "Scenario 2",
        housePrice: 600000,
        downPayment: 50000,
        coInvestment: 309443,
        mortgage: 240557,
        monthlyPayment: 1551
      },
      {
        title: "Scenario 3",
        housePrice: 246832,
        downPayment: 50000,
        coInvestment: 50000,
        mortgage: 146832,
        monthlyPayment: 947
      }
    ];
  
    const container = document.getElementById("results");
    container.innerHTML = "";
  
    scenarios.forEach((scenario) => {
      const section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `
        <h3>${scenario.title}</h3>
        <div class="row"><label>House Price:</label> <span>$${scenario.housePrice.toLocaleString()}</span></div>
        <div class="row"><label>Down Payment:</label> <span>$${scenario.downPayment.toLocaleString()}</span></div>
        <div class="row"><label>Co-Investment:</label> <span>$${scenario.coInvestment.toLocaleString()}</span></div>
        <div class="row"><label>Mortgage:</label> <span>$${scenario.mortgage.toLocaleString()}</span></div>
        <div class="row"><label>Monthly Mortgage Payment:</label> <span>$${scenario.monthlyPayment.toLocaleString()}</span></div>
      `;
      container.appendChild(section);
    });
  }
  