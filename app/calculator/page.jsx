"use client";
import CustomSelect from "@/Components/Calculator/CustomSelect";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
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
      border:"1px solid #2d3269",
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Date of Birth</h4>
                      <p className="sub18">
                        Age is a big factor in what life insurance products are
                        a good fit for you and how much they will cost.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Gender</h4>
                      <p className="sub18">
                        Insurance carriers have different cost models for men
                        and women so it's helpful for us to know this.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Zip Code</h4>
                      <p className="sub18">
                        Life insurance is regulated at the state level, so
                        different products may be available to you depending on
                        where you live.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Marital status</h4>
                      <p className="sub18">
                        This helps us figure out who will need financial support
                        if you were to pass away.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Number of Children Under 18
                      </h4>
                      <p className="sub18">
                        If you've got kids, it's wise to ensure you have enough
                        income replacement and college expenses factored into
                        your coverage amount.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Your Annual Income</h4>
                      <p className="sub18">
                        This helps us know how much income will need to be
                        replaced if you were to pass away.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Existing Life Insurance Coverage
                      </h4>
                      <p className="sub18">
                        Include any existing life insurance coverage you have
                        purchased for yourself.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Total Savings + Liquid Assets
                      </h4>
                      <p className="sub18">
                        This is all the money you have in cash, savings,
                        checking, or securities that you could access
                        immediately if needed.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Total Retirement Savings
                      </h4>
                      <p className="sub18">
                        This is all the money you have set aside specifically
                        for retirement. Hopefully this is mostly in a 401(k),
                        IRA, Roth IRA, or some other tax-deferred or
                        tax-advantaged account.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Risk Tolerance</h4>
                      <p className="sub18">
                        Be honest here. High risk tolerance means you are
                        comfortable with potentially losing money on an
                        investment.
                      </p>
                    </div>
                  </div>
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
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Years Before You Will Use Your Cash Value
                      </h4>
                      <p className="sub18">
                        This is all the money you have set aside specifically
                        for retirement. Hopefully this is mostly in a 401(k),
                        IRA, Roth IRA, or some other tax-deferred or
                        tax-advantaged account.
                      </p>
                    </div>
                  </div>
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
                      <p className="sub16 fw-normal mb-0">
                        To see your result, please answer questions to the left.
                      </p>
                      <button 
                        className="btn btn-primary mt-3 w-100"
                        onClick={openModal}
                        style={{ backgroundColor: '#2d3269', borderColor: '#2d3269' }}
                      >
                        Show Me The Math
                      </button>
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
                      <div className="infoIconWrapper">
                        policy type
                        <CiCircleInfo
                          style={{ width: "18px", height: "18px" }}
                          className="infoIcon"
                        />
                        <div className="tooltipBox">
                        <h4 className="heading28 fw-bold">
                        POLICY TYPE
                      </h4>
                          <p className="sub18">
                            Some policy are first and foremost a way to protect your loved ones when you pass away. Some policy types also offer you a chance to build tax-efficient wealth that can be used while you're alive. These elements of protection and tax-efficient wealth building are a great place to start when comparing products. Because they are very distinct functions, we will approach each element separately.

                          </p>
                        </div>
                      </div>
                      
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
                        <br/>
                        <br/>
                        It is possible that coverage will terminate when either no premiums are paid following the initial premium, or subsequent premiums are insufficient to continue coverage.
                        <br/>
                        <br/>
                        Variable Universal Life (VUL) policies are a combination of life insurance and a security that requires Securities and Exchange Commission registration. Actual performance of a VUL policy is dependent on the performance of the underlying investment. VUL policies can be negatively impacted by the performance of the underlying investment options, inadequate funding, and increasing cost of insurance rates. There is no guaranteed rate of interest.
                        <br/>
                        <br/>
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
        {showModal && (
          <div 
            className="modal fade show" 
            style={{ 
              display: 'block', 
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1050
            }}
          >
            <div className="modal-dialog modal-lg" style={{ maxWidth: '800px', margin: '30px auto' }}>
              <div className="modal-content">
                <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
                  <h4 className="modal-title" style={{ color: '#2d3269', fontWeight: 'bold' }}>Coverage Need Calculator</h4>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={closeModal}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      fontSize: '24px',
                      lineHeight: 1,
                      color: '#000',
                      opacity: 0.5
                    }}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body" style={{ padding: '1.5rem' }}>
                  <div className="row">
                    {/* Left Column - Inputs */}
                    <div className="col-md-7">
                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Your Income
                        </label>
                        <input
                          type="text"
                          placeholder="$11,111"
                          value={modalData.yourIncome}
                          onChange={(e) => handleModalChange('yourIncome', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          How many children do you have?
                        </label>
                        <CustomSelect
                          value={modalData.childrenCount}
                          onChange={(value) => handleModalChange('childrenCount', value)}
                          options={childrenOptions}
                          placeholder="3"
                          styles={{
                            control: (provided, state) => ({
                              ...provided,
                              minHeight: "48px",
                              height: "48px",
                              width: "100%",
                              borderRadius: "0",
                              border: "2px solid #2d3269",
                              boxShadow: "none",
                              fontSize: "16px",
                              color: "#2d3269",
                              cursor: "pointer",
                            }),
                            placeholder: provided => ({
                              ...provided,
                              color: "#999",
                              fontSize: "16px",
                            }),
                            singleValue: provided => ({
                              ...provided,
                              fontSize: "16px",
                              color: "#2d3269",
                            }),
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Total Household Debt (cars, credit cards, mortgage, etc.)
                        </label>
                        <input
                          type="text"
                          placeholder="$11,111"
                          value={modalData.totalDebt}
                          onChange={(e) => handleModalChange('totalDebt', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Existing Coverage
                        </label>
                        <input
                          type="text"
                          placeholder="$11,111"
                          value={modalData.existingCoverage}
                          onChange={(e) => handleModalChange('existingCoverage', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Liquid Assets
                        </label>
                        <input
                          type="text"
                          placeholder="$1"
                          value={modalData.liquidAssets}
                          onChange={(e) => handleModalChange('liquidAssets', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Retirement Savings
                        </label>
                        <input
                          type="text"
                          placeholder="$111"
                          value={modalData.retirementSavings}
                          onChange={(e) => handleModalChange('retirementSavings', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600' }}>
                          <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                          Burial Costs
                        </label>
                        <input
                          type="text"
                          placeholder="$10,000"
                          value={modalData.burialCosts}
                          onChange={(e) => handleModalChange('burialCosts', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #2d3269',
                            borderRadius: '0',
                            fontSize: '16px'
                          }}
                        />
                      </div>
                    </div>

                    {/* Right Column - Calculations */}
                    <div className="col-md-5">
                      <div style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: '1px solid #e9ecef'
                      }}>
                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#2d3269', fontWeight: '500' }}>Income Replacement</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2d3269' }}>
                              {formatCurrency(coverageItems.incomeReplacement)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#2d3269', fontWeight: '500' }}>College Tuition</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2d3269' }}>
                              {formatCurrency(coverageItems.collegeTuition)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#2d3269', fontWeight: '500' }}>Pay off Debts</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2d3269' }}>
                              {formatCurrency(coverageItems.payOffDebts)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#dc3545', fontWeight: '500' }}>Subtract Existing Coverage</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#dc3545' }}>
                              {formatCurrency(coverageItems.subtractExisting)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#dc3545', fontWeight: '500' }}>Subtract Liquid Assets</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#dc3545' }}>
                              {formatCurrency(coverageItems.subtractLiquid)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#dc3545', fontWeight: '500' }}>Subtract Retirement Savings</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#dc3545' }}>
                              {formatCurrency(coverageItems.subtractRetirement)}
                            </span>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', color: '#2d3269', fontWeight: '500' }}>Burial Costs</span>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2d3269' }}>
                              {formatCurrency(coverageItems.burialCosts)}
                            </span>
                          </div>
                        </div>

                        <div style={{ 
                          backgroundColor: '#2d3269', 
                          color: 'white', 
                          padding: '1rem', 
                          borderRadius: '4px',
                          textAlign: 'center'
                        }}>
                          <div style={{ marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '14px', opacity: 0.9 }}>Total Coverage Need:</span>
                          </div>
                          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                            {formatCurrency(coverageItems.totalCoverage)}
                          </div>
                        </div>

                        <div style={{ 
                          marginTop: '1rem',
                          padding: '0.75rem', 
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          textAlign: 'center'
                        }}>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>
                            TOTAL RECOMMENDED COVERAGE
                          </span>
                          <CiCircleInfo style={{ width: '16px', height: '16px', marginLeft: '4px', color: '#6c757d' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary me-2"
                    onClick={resetModalValues}
                    style={{ 
                      borderColor: '#6c757d',
                      color: '#6c757d',
                      padding: '12px 24px',
                      borderRadius: '25px',
                      fontWeight: '600'
                    }}
                  >
                    RESET VALUES
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={closeModal}
                    style={{ 
                      backgroundColor: '#28a745',
                      borderColor: '#28a745',
                      padding: '12px 36px',
                      borderRadius: '25px',
                      fontWeight: '600'
                    }}
                  >
                    DONE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;