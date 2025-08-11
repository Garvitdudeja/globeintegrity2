"use client";
import CoverageModal from "@/Components/Calculator/CoverageModal";
import CustomSelect from "@/Components/Calculator/CustomSelect";
import InfoTooltip from "@/Components/Calculator/infoTooltip";
import React, { useState } from "react";

const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const marital = [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
  { value: "Divorced", label: "Divorced" },
  { value: "Separated", label: "Separated" },
  { value: "Widowed", label: "Widowed" },
];
const risk = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];
const childrenOptions = Array.from({ length: 101 }, (_, i) => ({
  value: i,
  label: i.toString(),
}));
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export { childrenOptions, formatCurrency }



const Calculator = () => {
  const [data, setData] = useState({
    dateOfBirth: "",
    gender: "",
    zipCode: "",
    maritalStatus: "",
    children: "",
    annualIncome: "",
    existingCoverage: "",
    savings: "",
    retirementSavings: "",
    riskTolerance: "",
    yearsBeforeCashOut: ""
  });
  const showMathModal = data.dateOfBirth && data.zipCode && data?.gender && data?.maritalStatus && data?.children && data?.annualIncome && data?.existingCoverage && data?.retirementSavings && data?.savings

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    yourIncome: "",
    childrenCount: "",
    totalDebt: "",
    existingCoverage: "",
    liquidAssets: "",
    retirementSavings: "",
    burialCosts: "10000"
  });

  const handleChange = (key, value) => {
    console.log("Updating", key, "with value:", value);
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleModalChange = (key, value) => {
    setModalData(prev => ({ ...prev, [key]: value }));
  };

  const openModal = () => {
    // Pre-populate modal with existing form data
    setModalData({
      yourIncome: data.annualIncome,
      childrenCount: data.children,
      totalDebt: "",
      existingCoverage: data.existingCoverage,
      liquidAssets: data.savings,
      retirementSavings: data.retirementSavings,
      burialCosts: "10000"
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const resetModalValues = () => {
    setModalData({
      yourIncome: "",
      childrenCount: "",
      totalDebt: "",
      existingCoverage: "",
      liquidAssets: "",
      retirementSavings: "",
      burialCosts: "10000"
    });
  };

  const parseNumber = (value) => {
    if (!value) return 0;
    // Remove $ and commas, then parse
    const cleaned = value.toString().replace(/[\$,]/g, '');
    return parseFloat(cleaned) || 0;
  };


  const calculateCoverageItems = () => {
    const income = parseNumber(modalData.yourIncome);
    const children = parseNumber(modalData.childrenCount);
    const debt = parseNumber(modalData.totalDebt);
    const existing = parseNumber(modalData.existingCoverage);
    const liquid = parseNumber(modalData.liquidAssets);
    const retirement = parseNumber(modalData.retirementSavings);
    const burial = parseNumber(modalData.burialCosts);

    const incomeReplacement = income * 10; // 10x income rule
    const collegeTuition = children * 50000; // $50k per child
    const payOffDebts = debt;
    const subtractExisting = -existing;
    const subtractLiquid = -liquid;
    const subtractRetirement = -retirement;
    const burialCosts = burial;

    const totalCoverage = incomeReplacement + collegeTuition + payOffDebts + subtractExisting + subtractLiquid + subtractRetirement + burialCosts;

    return {
      incomeReplacement,
      collegeTuition,
      payOffDebts,
      subtractExisting,
      subtractLiquid,
      subtractRetirement,
      burialCosts,
      totalCoverage: Math.max(0, totalCoverage)
    };
  };

  const coverageItems = calculateCoverageItems();

  // Calculate progress based on filled fields
  const calculateProgress = () => {
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(value => value !== "").length;
    return Math.round((filledFields / totalFields) * 100);
  };

  const progress = calculateProgress();

  const coverageProgress = () => {
    const coverageFeilds = ["dateOfBirth", "zipCode", "gender", "maritalStatus", "children", "annualIncome", "existingCoverage", "retirementSavings", "savings"];
    const totalFields = coverageFeilds.length;
    const filledFields = coverageFeilds.filter(value => data[value] !== "").length;
    return Math.round((filledFields / totalFields) * 100);
  }




  // Shared select styles
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "64px",
      height: "64px",
      width: "100%",
      borderRadius: "0",
      borderColor: "#2d3269",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#2d3269",
      },
      border: "1px solid #2d3269",
      "padding-inline": "10px",
      fontSize: "18px",
      color: "#2d3269",
      cursor: "pointer",
    }),
    container: provided => ({
      ...provided,
      width: "100%",
    }),
    valueContainer: provided => ({
      ...provided,
      height: "64px",
      padding: "0 12px",
    }),
    input: provided => ({
      ...provided,
      margin: "0px",
    }),
    placeholder: provided => ({
      ...provided,
      color: "#adb5bd",
      lineHeight: "64px",
      fontSize: "18px",
    }),
    singleValue: provided => ({
      ...provided,
      lineHeight: "64px",
      fontSize: "18px",
      color: "#2d3269",
    }),
  };

  return (
    <section className="calculator py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 mb-5 lg-mb-0">
            <div className="calcLeftCard">
              <h2 className="heading54">Globe Integrity's Insurance Calculator</h2>
              <p className="sub24">
                In three simple steps we will establish your coverage need,
                determine the best product for you, and get you started on a
                plan.
              </p>
              <div className="calcHeading">
                <div className="calcCount">1</div>
                Personal Details
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Date of Birth"} description={"Age is a big factor in what life insurance products are a good fit for you and how much they will cost."} />
                  Date Of Birth
                </div>
                <div className="calcInput">
                  <input
                    type="date"
                    placeholder="01/01/1911"
                    value={data.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Gender"} description={"Insurance carriers have different cost models for men and women so it's helpful for us to know this."} />
                  Gender
                </div>
                <div className="calcInput">
                  <CustomSelect
                    value={data.gender}
                    onChange={(value) => handleChange("gender", value)}
                    options={options}
                    placeholder="Gender"
                    styles={selectStyles}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Zip Code"} description={"Life insurance is regulated at the state level, so different products may be available to you depending on where you live."} />
                  Zip Code
                </div>
                <div className="calcInput">
                  <input
                    type="text"
                    placeholder="12345"
                    value={data.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcHeading my-5">
                <div className="calcCount">2</div>
                Coverage Need
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Marital status"} description={"This helps us figure out who will need financial support if you were to pass away."} />
                  Marital status
                </div>
                <div className="calcInput">
                  <CustomSelect
                    value={data.maritalStatus}
                    onChange={(value) => handleChange("maritalStatus", value)}
                    options={marital}
                    placeholder="Marital status"
                    styles={selectStyles}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Number of Children Under 18"} description={"If you've got kids, it's wise to ensure you have enough income replacement and college expenses factored into your coverage amount."} />
                  Number of Children Under 18
                </div>
                <div className="calcInput">
                  <CustomSelect
                    value={data.children}
                    onChange={(value) => handleChange("children", value)}
                    options={childrenOptions}
                    placeholder="Children"
                    styles={selectStyles}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Your Annual Income"} description={"This helps us know how much income will need to be replaced if you were to pass away."} />
                  Your Annual Income
                </div>
                <div className="calcInput">
                  <input
                    type="number"
                    placeholder="$75,000"
                    value={data.annualIncome}
                    onChange={(e) => handleChange("annualIncome", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Existing Life Insurance Coverage"} description={"Include any existing life insurance coverage you have purchased for yourself."} />
                  Existing Life Insurance Coverage
                </div>
                <div className="calcInput">
                  <input
                    type="number"
                    placeholder="$50,000"
                    value={data.existingCoverage}
                    onChange={(e) => handleChange("existingCoverage", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Total Savings + Liquid Assets"} description={"This is all the money you have in cash, savings, checking, or securities that you could access immediately if needed."} />
                  Total Savings + Liquid Assets
                </div>
                <div className="calcInput">
                  <input
                    type="number"
                    placeholder="$18,700"
                    value={data.savings}
                    onChange={(e) => handleChange("savings", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Total Retirement Savings"} description={" This is all the money you have set aside specifically for retirement. Hopefully this is mostly in a 401(k), IRA, Roth IRA, or some other tax-deferred or tax-advantaged account."} />
                  Total Retirement Savings
                </div>
                <div className="calcInput">
                  <input
                    type="number"
                    placeholder="$5,000"
                    value={data.retirementSavings}
                    onChange={(e) => handleChange("retirementSavings", e.target.value)}
                  />
                </div>
              </div>
              <div className="calcHeading my-5">
                <div className="calcCount">3</div>
                Product Fit Assessment
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <InfoTooltip title={"Risk Tolerance"} description={"Be honest here. High risk tolerance means you are comfortable with potentially losing money on an investment."} />
                  Risk Tolerance
                </div>
                <div className="calcInput">
                  <CustomSelect
                    value={data.riskTolerance}
                    onChange={(value) => handleChange("riskTolerance", value)}
                    options={risk}
                    placeholder="Choose"
                    styles={selectStyles}
                  />
                </div>
              </div>
              <div className="calcFormControl border-0 mb-3 pb-0">
                <div className="calcLabel">
                  <InfoTooltip title={"Years Before You Will Use Your Cash Value"} description={"This is all the money you have set aside specifically for retirement. Hopefully this is mostly in a 401(k), IRA, Roth IRA, or some other tax-deferred or tax-advantaged account."} />
                  Years Before You Will Use Your Cash Value
                </div>
                <div className="calcInput">
                  <input
                    type="number"
                    placeholder="10"
                    value={data.yearsBeforeCashOut}
                    onChange={(e) => handleChange("yearsBeforeCashOut", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 lg-mb-4">
            <div className="calcRightCard">
              <div className="row mb-4">
                <div className="col-lg-6 mb-4 lg-mb-0">
                  <div className="calcRightInner">
                    <div className="py-5">
                      <h4 className="text-center">Your Total Coverage Need</h4>
                      <p className="sub16 fw-normal mb-0 text-center">
                        {showMathModal ? "Your total need based on your answers. This can be met through both term and permanent policies." : "To see your result, please answer questions to the left."}
                      </p>
                      {showMathModal && (
                        <>
                        <h3 className="text-center">{formatCurrency(coverageItems?.totalCoverage)}</h3>
                          <button
                            className="btn btn-primary mt-3 w-100"
                            onClick={openModal}
                            style={{ backgroundColor: '#2d3269', borderColor: '#2d3269' }}
                          >
                            Show Me The Math
                          </button>
                          </>)}
                    </div>
                    {!showMathModal && <div className="mt-auto">
                      <span className="sub16 mb-2 d-block fw-normal">
                        Progress Until Answer
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow={coverageProgress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: `${coverageProgress()}%` }}
                        ></div>
                      </div>
                      <span style={{ fontSize: '12px', color: '#6c757d' }}>{coverageProgress()}% complete</span>
                    </div>}
                  </div>
                </div>
                <div className="col-lg-6  mb-4 lg-mb-0">
                  <div className="calcRightInner">
                    <div className="py-5">
                      <h4 className="text-center">
                        Permanent Coverage to Start With
                      </h4>
                      <p className="sub16 fw-normal mb-0">
                        To see your result, please answer questions to the left.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="sub16 mb-2 d-block fw-normal">
                        Progress Until Answer
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <span style={{ fontSize: '12px', color: '#6c757d' }}>{progress}% complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="policyType mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="calcLabel">
                      <InfoTooltip title={"POLICY TYPE"} description={"Some policy are first and foremost a way to protect your loved ones when you pass away. Some policy types also offer you a chance to build tax-efficient wealth that can be used while you're alive. These elements of protection and tax-efficient wealth building are a great place to start when comparing products. Because they are very distinct functions, we will approach each element separately."} />
                    </div>
                    <h4 className="">Which policy type should you consider?</h4>
                    <p className="sub16 fw-normal mb-0">
                      To see your result, please answer questions to the left.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <span className="sub16 mb-2 d-block fw-normal">
                      Progress Until Answer
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>{progress}% complete</span>
                  </div>
                </div>
              </div>
              <div className="calcFooter">
                <div className="row">
                  <div className="col-lg-6">
                    <p>
                      This webpage is for educational purposes only, and is not a recommendation to purchase, sell, hold, or roll over any asset and does not account for any investment, tax, or financial condition of any specific person.
                      <br />
                      <br />
                      It is possible that coverage will terminate when either no premiums are paid following the initial premium, or subsequent premiums are insufficient to continue coverage.
                      <br />
                      <br />
                      Variable Universal Life (VUL) policies are a combination of life insurance and a security that requires Securities and Exchange Commission registration. Actual performance of a VUL policy is dependent on the performance of the underlying investment. VUL policies can be negatively impacted by the performance of the underlying investment options, inadequate funding, and increasing cost of insurance rates. There is no guaranteed rate of interest.
                      <br />
                      <br />
                      Accessing policy cash value through loans and surrenders may cause a permanent reduction of policy cash values and death benefit and negate any guarantees against lapse that may be provided under your policy. Surrender charges may apply to the policy and loans may be subject to interest charges. Although loans are generally not taxable, there may be tax consequences if the policy lapses, or is surrendered or exchanged with an outstanding loan.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Taxable income could exceed the amount of proceeds actually available. Surrenders are generally taxable to the extent they exceed the remaining investment in the policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Need Modal */}
        <CoverageModal showModal={showModal} closeModal={closeModal} modalData={modalData} handleModalChange={handleModalChange} coverageItems={coverageItems} resetModalValues={resetModalValues} />
      </div>
    </section>
  );
};

export default Calculator;