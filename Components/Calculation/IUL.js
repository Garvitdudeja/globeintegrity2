import { formatCurrency } from "@/app/calculator/page";

function calculateIULValues(userInputs) {
  // Convert string inputs to numbers
  const income = parseFloat(userInputs.annualIncome) || 0;
  const existingCoverage = parseFloat(userInputs.existingCoverage) || 0;
  const savings = parseFloat(userInputs.savings) || 0;
  const retirementSavings = parseFloat(userInputs.retirementSavings) || 0;
  const debt = parseFloat(userInputs.debt) || 0;
  const children = parseInt(userInputs.children) || 0;
  const yearsBeforeCashOut = parseInt(userInputs.yearsBeforeCashOut) || 25;
  const burialCosts = parseFloat(userInputs.burialCosts) || 15000; // Default burial costs if empty
  
  // Calculate current age
  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  const currentAge = calculateAge(userInputs.dateOfBirth);
  
  // Calculate coverage needs using standard life insurance formulas
  
  // 1. Income replacement (varies by age and dependents)
  let incomeMultiplier = 10; // Base multiplier
  if (currentAge < 35) incomeMultiplier = 12;
  else if (currentAge < 45) incomeMultiplier = 10;
  else if (currentAge < 55) incomeMultiplier = 8;
  else incomeMultiplier = 6;
  
  // Adjust for dependents
  if (children > 0) incomeMultiplier += 2;
  if (userInputs.maritalStatus === "Married") incomeMultiplier += 1;
  
  const incomeReplacement = income * incomeMultiplier;
  
  // 2. Debt coverage
  const debtCoverage = debt;
  
  // 3. Education costs for children (estimated $30K per child for college)
  const educationCosts = children * 30000;
  
  // 4. Final expenses
  const finalExpenses = burialCosts;
  
  // 5. Emergency fund gap (6 months expenses minus existing savings)
  const monthlyExpenses = income * 0.7 / 12; // Assume 70% of income for expenses
  const emergencyFundNeeded = Math.max(0, (monthlyExpenses * 6) - savings);
  
  // Total coverage need
  let totalCoverageNeed = incomeReplacement + debtCoverage + educationCosts + finalExpenses + emergencyFundNeeded;
  
  // Subtract existing coverage
  totalCoverageNeed = Math.max(0, totalCoverageNeed - existingCoverage);
  
  // Policy face value (round to nearest $50,000 for practical purposes)
  const policyFaceValue = Math.round(totalCoverageNeed / 50000) * 50000;
  
  // Total coverage by age 65
  const totalCoverage = policyFaceValue + existingCoverage;
  
  // Calculate monthly premium based on age, gender, coverage amount, and risk factors
  let basePremiumRate = 0.5; // Base rate per $1000 of coverage per month
  
  // Age adjustments
  if (currentAge < 30) basePremiumRate = 0.3;
  else if (currentAge < 40) basePremiumRate = 0.5;
  else if (currentAge < 50) basePremiumRate = 0.8;
  else if (currentAge < 60) basePremiumRate = 1.2;
  else basePremiumRate = 1.8;
  
  // Gender adjustment (females typically pay slightly less)
  if (userInputs.gender.toLowerCase() === 'female') {
    basePremiumRate *= 0.9;
  }
  
  // Risk tolerance adjustment (IUL allows for market participation)
  if (userInputs.riskTolerance === 'High') {
    basePremiumRate *= 0.95; // Slightly lower as higher risk tolerance may mean better health
  } else if (userInputs.riskTolerance === 'Low') {
    basePremiumRate *= 1.05;
  }
  
  const monthlyPremium = Math.round((policyFaceValue / 1000) * basePremiumRate);
  
  // Calculate estimated cash value at age 65
  const yearsToAge65 = Math.max(0, 65 - currentAge);
  const totalPremiumsPaid = monthlyPremium * 12 * yearsToAge65;
  
  // IUL cash value growth estimation (assuming 6% average annual return)
  // This is simplified - actual IUL performance varies with market conditions
  const annualGrowthRate = 0.06;
  const cashValueAtAge65 = totalPremiumsPaid * 0.7 * Math.pow(1 + annualGrowthRate, yearsToAge65);
  
  // For the "Estimated Cash Value by Age 65" field, we'll use a more conservative estimate
  const estimatedCashValue = Math.round(cashValueAtAge65 * 0.8); // 80% of projected to be conservative
  
  return {
    monthlyPremium: monthlyPremium,
    estimatedCashValue: estimatedCashValue,
    policyFaceValue: policyFaceValue,
    totalCoverage: totalCoverage,
    currentAge: currentAge,
    yearsToAge65: yearsToAge65,
    // Additional helpful breakdown
    breakdown: {
      incomeReplacement: incomeReplacement,
      debtCoverage: debtCoverage,
      educationCosts: educationCosts,
      finalExpenses: finalExpenses,
      emergencyFundNeeded: emergencyFundNeeded,
      existingCoverage: existingCoverage
    }
  };
}

export default calculateIULValues;

// Smart formatter that chooses appropriate rounding based on number size
function smartFormat(number) {
  if (number < 10000) {
    return formatCurrency(Math.round(number / 1000) * 1000); // Round to nearest 1000
  } else if (number < 50000) {
    return formatCurrency(Math.round(number / 5000) * 5000); // Round to nearest 5000
  } else if (number < 100000) {
    return formatCurrency(Math.round(number / 10000) * 10000); // Round to nearest 10000
  } else if (number < 500000) {
    return formatCurrency(Math.round(number / 25000) * 25000); // Round to nearest 25000
  } else {
    return formatCurrency(Math.round(number / 50000) * 50000); // Round to nearest 50000
  }
}

export {smartFormat}