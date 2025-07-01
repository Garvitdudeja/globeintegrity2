"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SignUp() {
  const [step, setStep] = useState(0);
  const [currentInput, setCurrentInput] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sliderValue, setSliderValue] = useState(1000);
  const min = 100;
  const max = 10000;


  const steps = [
    { title: "Personal Info", inputs: ["goal", "risk", "gender", "dob", "ZipCode"] },
    { title: "Account Info", inputs: ["income", "invsest", "citizen"] },
    { title: "Confirmation", inputs: ["review"] },
  ];
  const [fade, setFade] = useState(true);


  const totalInputs = steps.reduce((acc, curr) => acc + curr.inputs.length, 0);
  const completedInputs = steps
    .slice(0, step)
    .reduce((acc, curr) => acc + curr.inputs.length, 0) + currentInput;

  const currentStepInputs = steps[step].inputs;

  const nextInput = () => {
    setFade(false);
    setTimeout(() => {
      if (currentInput < currentStepInputs.length - 1) {
        setCurrentInput((prev) => prev + 1);
      } else if (step < steps.length - 1) {
        setStep((prev) => prev + 1);
        setCurrentInput(0);
      }
      setFade(true);
    }, 300); // 300ms matches CSS transition time
  };

  const prevInput = () => {
    setFade(false);
    setTimeout(() => {
      if (currentInput > 0) {
        setCurrentInput((prev) => prev - 1);
      } else if (step > 0) {
        const previousStepInputs = steps[step - 1].inputs.length;
        setStep((prev) => prev - 1);
        setCurrentInput(previousStepInputs - 1);
      }
      setFade(true);
    }, 300);
  };


  // Progress within current step
  const stepProgress =
    ((completedInputs - steps.slice(0, step).reduce((acc, curr) => acc + curr.inputs.length, 0)) /
      currentStepInputs.length) * 100;

  return (
    <>
      {/* Stepper Header */}
      <section className="steperSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="stepOuter d-flex position-relative">
                {steps.map((s, i) => {
                  const otherStepWidth = (50 / (steps.length - 1));
                  const width = i === step ? "50%" : `${otherStepWidth}%`;
                  return (
                    <div
                      key={i}
                      className="barText text-center"
                      style={{ width, zIndex: 1 }}
                    >
                      <small className={`${i === step ? "activeBar" : "inActiveBar"}`}>
                        {s.title}
                      </small>
                    </div>
                  );
                })}
                {/* Full Track */}
                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#e0e0e0",
                    zIndex: 0,
                  }}
                >
                  {/* Progress Bar */}
                  <div
                    className="bgBlue h-100 rounded"
                    style={{
                      width: (() => {
                        let width = 0;
                        for (let i = 0; i < steps.length; i++) {
                          if (i < step) {
                            width += i === step ? 50 : 50 / (steps.length - 1);
                          } else if (i === step) {
                            width += (50 * stepProgress) / 100;
                            break;
                          }
                        }
                        return `${width}%`;
                      })(),
                      transition: "width 0.4s ease",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Content */}
      <section className="steperOption">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className={`animated-slide ${fade ? 'fade-enter-active' : 'fade-exit-active'}`}>
                {step === 0 && (
                  <>
                    {currentInput === 0 && (
                      <>
                        <h1 className="heading54 mb-4">Why are you looking for life insurance?</h1>
                        {["Lock in a guaranteed rate", "Help build more wealth", "Leave a legacy for my family", "Get tax-advantaged income", "Pay off debts", "Income protection"].map((label, index) => (
                          <div key={index} className="custom-checkbox-wrapper">
                            <input type="checkbox" id={`check${index}`} className="custom-checkbox" />
                            <label htmlFor={`check${index}`}></label>
                            <label htmlFor={`check${index}`} className="check-label">{label}</label>
                          </div>
                        ))}
                      </>
                    )}
                    {currentInput === 1 && (
                      <>
                        <h1 className="heading54 mb-4">Investment comfort level</h1>
                        {["High", "Moderate", "Low risk"].map((label, index) => (
                          <div key={index} className="custom-radio-option">
                            <input type="radio" id={`risk${index}`} name="risk" />
                            <label htmlFor={`risk${index}`}>{label}</label>
                          </div>
                        ))}
                      </>
                    )}
                    {currentInput === 2 && (
                      <>
                        <h1 className="heading54 mb-4">What’s your gender?</h1>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="selectGender">Male</div>
                          </div>
                          <div className="col-lg-6">
                            <div className="selectGender">Female</div>
                          </div>
                        </div>
                      </>
                    )}
                    {currentInput === 3 && (
                      <>
                        <h1 className="heading54 mb-4">What is your date of birth?</h1>
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          placeholderText="DD/MM/YYYY"
                        />
                      </>
                    )}
                    {currentInput === 4 && (
                      <>
                        <h1 className="heading54 mb-4">What’s your zip code?</h1>
                        <input type="text" className="form-control" />
                      </>
                    )}
                  </>
                )}

                {step === 1 && (
                  <>
                    {currentInput === 0 && (
                      <>
                        <h1 className="heading54 mb-4">What is your annual income?</h1>
                        <input type="number" className="form-control" />
                      </>
                    )}
                    {currentInput === 1 && (
                      <>
                        <h1 className="heading54 mb-4">What would be a comfortable monthly contribution?</h1>

                        {/* Slider */}
                        <div className="slider-wrapper mb-4" style={{ position: 'relative' }}>
                          <div
                            className="slider-label-box"
                            style={{
                              position: 'absolute',
                              top: '-40px',
                              left: `calc(${((sliderValue - min) / (max - min)) * 100}% - 30px)`,
                              backgroundColor: '#214E4E',
                              color: 'white',
                              padding: '5px 10px',
                              borderRadius: '5px',
                              fontWeight: 'bold',
                            }}
                          >
                            ${sliderValue}
                          </div>

                          <input
                            type="range"
                            min={min}
                            max={max}
                            step={100}
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            style={{ width: '100%' }}
                          />
                        </div>

                        {/* Info Box */}
                        <div style={{ backgroundColor: '#E9F7F2', padding: '20px', borderRadius: '8px' }}>
                          <h4>DID YOU KNOW?</h4>
                          <p>
                            If you pay <strong>${sliderValue}.00</strong> of premium a month into a policy's investment subaccounts, you could grow your account value up to <strong>${(sliderValue * 2270).toLocaleString()}</strong> after 30 years.
                          </p>
                        </div>
                      </>
                    )}
                    {currentInput === 2 && (
                      <>
                        <h1 className="heading54 mb-4">Are you a U.S. Citizen?</h1>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="selectGender">Yes</div>
                          </div>
                          <div className="col-lg-6">
                            <div className="selectGender">No</div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {step === 2 && (
                  <>
                    <p>Review your information before submitting.</p>
                    <button className="btn btn-success">Submit</button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center my-4 gap-3">
                {(step > 0 || currentInput > 0) && (
                  <button className="steperBack" onClick={prevInput}>
                    <FaArrowLeft />
                  </button>
                )}
                {(step < steps.length - 1 || currentInput < currentStepInputs.length - 1) && (
                  <button className="commonBtn" onClick={nextInput}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
