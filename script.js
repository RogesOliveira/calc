// script.js
function calculateFixada() {
    // Obter valores dos inputs
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthly-expenses').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;

    // Calcular despesas anuais
    const annualExpenses = monthlyExpenses * 12;

    // Calcular montante necessário
    const targetAmount = annualExpenses / interestRate;

    // Fórmula do valor futuro de uma série de pagamentos mensais
    const futureValue = (P, PMT, r, n) => {
        return P * Math.pow((1 + r / n), n) + PMT * ((Math.pow((1 + r / n), n) - 1) / (r / n));
    };

    // Inicializar variáveis
    let months = 0;
    let currentAmount = initialAmount;
    const monthlyRate = interestRate / 12;

    // Calcular o tempo necessário para atingir o montante necessário
    while (currentAmount < targetAmount) {
        currentAmount = futureValue(currentAmount, monthlyContribution, monthlyRate, 1);
        months++;
    }

    // Calcular anos e meses
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    // Exibir resultado
    document.getElementById('result').innerHTML = `Você atingirá sua liberdade financeira com R$${targetAmount.toFixed(2)} e levará aproximadamente ${years} anos e ${remainingMonths} meses (${months} meses no total). 
Este calculo leva em consideração os juros compostos mensais.`;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}