// VUL Insurance Calculator Logic

class VULCalculator {
  constructor() {
    // Standard assumptions for VUL calculations
    this.assumedGrowthRate = 0.07; // 7% annual return
    this.costOfInsuranceRate = 0.001; // Monthly cost of insurance factor
    this.adminFeeRate = 0.002; // Monthly admin fee rate
    this.surrenderChargeSchedule = [0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01, 0]; // Years 1-8+
  }

  // 1. Monthly Premium Calculation
  calculateMonthlyPremium(policyFaceValue, age, gender, healthClass = 'standard') {
    // Base premium calculation using mortality tables and face value
    const baseMortalityRate = this.getMortalityRate(age, gender);
    const healthMultiplier = healthClass === 'preferred' ? 0.85 : 1.0;
    
    // Monthly cost of insurance
    const monthlyCOI = (policyFaceValue * baseMortalityRate * healthMultiplier) / 12;
    
    // Administrative costs
    const monthlyAdminFee = Math.max(15, policyFaceValue * this.adminFeeRate);
    
    // Minimum premium to keep policy in force
    const minimumPremium = monthlyCOI + monthlyAdminFee;
    
    // Target premium (usually 2-3x minimum for cash value growth)
    const targetPremium = minimumPremium * 2.5;
    
    return {
      minimum: Math.round(minimumPremium),
      target: Math.round(targetPremium),
      recommended: Math.round(targetPremium * 1.2) // 20% above target
    };
  }

  // 2. Policy Face Value Calculation
  calculatePolicyFaceValue(income, debt, dependents, existingCoverage, age) {
    // Human Life Value method
    const workingYearsRemaining = Math.max(0, 65 - age);
    const incomeReplacement = income * Math.min(workingYearsRemaining, 10); // Cap at 10 years

    
    // Debt coverage
    const debtCoverage = debt;
    
    // Dependent needs (education, living expenses)
    const dependentCoverage = dependents * 50000; // $50k per dependent
    
    // Emergency fund
    const emergencyFund = income * 0.5; // 6 months income
    
    // Total need
    const totalNeed = incomeReplacement + debtCoverage + dependentCoverage + emergencyFund;
    
    // Subtract existing coverage
    const additionalNeed = Math.max(0, totalNeed - existingCoverage);
    
    // Round to nearest $25,000
    return Math.round(additionalNeed / 25000) * 25000;
  }

  // 3. Estimated Cash Value by Age 65
  calculateCashValueByAge65(monthlyPremium, currentAge, policyFaceValue, targetAge = 65) {
    const yearsToTarget = targetAge - currentAge;
    const monthsToTarget = yearsToTarget * 12;
    
    let cashValue = 0;
    let currentPolicyValue = policyFaceValue;
    
    for (let month = 1; month <= monthsToTarget; month++) {
      const currentYear = Math.floor(month / 12) + 1;
      const currentAgeAtMonth = currentAge + (month / 12);
      
      // Premium allocation (after surrender charges in early years)
      const surrenderChargeRate = currentYear <= 8 ? this.surrenderChargeSchedule[currentYear - 1] : 0;
      const netPremium = monthlyPremium * (1 - surrenderChargeRate);
      
      // Cost of Insurance (increases with age)
      const monthlyMortalityRate = this.getMortalityRate(currentAgeAtMonth, 'female') / 12;
      const costOfInsurance = currentPolicyValue * monthlyMortalityRate;
      
      // Administrative fees
      const adminFees = Math.max(15, currentPolicyValue * this.adminFeeRate);
      
      // Net amount going to cash value
      const netToCashValue = netPremium - costOfInsurance - adminFees;
      
      if (netToCashValue > 0) {
        cashValue += netToCashValue;
        // Apply growth (compounded monthly)
        cashValue *= (1 + this.assumedGrowthRate / 12);
      } else {
        // If insufficient, deduct from cash value
        cashValue = Math.max(0, cashValue + netToCashValue);
      }
    }
    
    return Math.round(cashValue);
  }

  // 4. Total Coverage by Age 65
  calculateTotalCoverageByAge65(policyFaceValue, cashValueAtAge65) {
    // VUL policies typically provide death benefit = face value + cash value
    // OR just face value, whichever is higher
    const option1 = policyFaceValue; // Level death benefit
    const option2 = policyFaceValue + cashValueAtAge65; // Increasing death benefit
    
    return {
      levelDeathBenefit: option1,
      increasingDeathBenefit: option2,
      cashValue: cashValueAtAge65
    };
  }

  // Helper: Mortality rates (simplified - real calculators use CSO tables)
  getMortalityRate(age, gender) {
    const baseMortality = {
      25: 0.0008, 30: 0.0010, 35: 0.0015, 40: 0.0025,
      45: 0.0040, 50: 0.0065, 55: 0.0110, 60: 0.0180, 65: 0.0290
    };
    
    const genderMultiplier = gender === 'male' ? 1.2 : 1.0;
    
    // Linear interpolation for ages between key points
    const ages = Object.keys(baseMortality).map(Number);
    let lowerAge = ages[0];
    let upperAge = ages[ages.length - 1];
    
    for (let i = 0; i < ages.length - 1; i++) {
      if (age >= ages[i] && age <= ages[i + 1]) {
        lowerAge = ages[i];
        upperAge = ages[i + 1];
        break;
      }
    }
    
    const lowerRate = baseMortality[lowerAge];
    const upperRate = baseMortality[upperAge];
    const interpolatedRate = lowerRate + (upperRate - lowerRate) * (age - lowerAge) / (upperAge - lowerAge);
    
    return interpolatedRate * genderMultiplier;
  }

  // Main calculation method
  calculateVUL(data) {
    
    const {
      dateOfBirth,
      gender,
      zipCode, 
      maritalStatus,
      children,
      annualIncome,
      debt=0,
      existingCoverage,
      savings,
      retirementSavings
    } = data;
    // Calculate current age
    const currentAge = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
    console.log(data,"data")
    
    // Step 1: Calculate recommended face value
    const policyFaceValue = this.calculatePolicyFaceValue(
      Number(annualIncome), Number(debt), Number(children), Number(existingCoverage), Number(currentAge)
    );
    
    // Step 2: Calculate monthly premium options
    const premiumOptions = this.calculateMonthlyPremium(
      policyFaceValue, Number(currentAge), gender
    );
    
    // Step 3: Calculate cash value by age 65 (using target premium)
    const cashValueBy65 = this.calculateCashValueByAge65(
      premiumOptions.target, currentAge, policyFaceValue
    );
    
    // Step 4: Calculate total coverage
    const totalCoverage = this.calculateTotalCoverageByAge65(
      policyFaceValue, cashValueBy65
    );

    
    return {
      monthlyPremium: premiumOptions.target,
      policyFaceValue: policyFaceValue,
      estimatedCashValueBy65: cashValueBy65,
      totalCoverageBy65: totalCoverage.increasingDeathBenefit,
      breakdown: {
        premiumOptions,
        totalCoverage,
        assumptions: {
          growthRate: this.assumedGrowthRate,
          yearsToAge65: 65 - currentAge
        }
      }
    };
  }
}

export default VULCalculator;