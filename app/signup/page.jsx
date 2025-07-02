"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
import * as images from './../../utilities/images'
export default function SignUp() {
  const [step, setStep] = useState(0);
  const [currentInput, setCurrentInput] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sliderValue, setSliderValue] = useState(1000);
  const min = 100;
  const max = 10000;

  const steps = [
    {
      title: "Personal Info",
      inputs: ["goal", "risk", "gender", "dob", "ZipCode"],
    },
    { title: "Account Info", inputs: ["income", "invsest", "citizen", "employee","marital","activity","height","risk","hiv"] },
    { title: "Confirmation", inputs: ["review"] },
  ];
  const [fade, setFade] = useState(true);

  const totalInputs = steps.reduce((acc, curr) => acc + curr.inputs.length, 0);
  const completedInputs =
    steps.slice(0, step).reduce((acc, curr) => acc + curr.inputs.length, 0) +
    currentInput;

  const currentStepInputs = steps[step].inputs;

  const nextInput = () => {
    setFade(false);
    setTimeout(() => {
      if (currentInput < currentStepInputs.length - 1) {
        setCurrentInput(prev => prev + 1);
      } else if (step < steps.length - 1) {
        setStep(prev => prev + 1);
        setCurrentInput(0);
      }
      setFade(true);
    }, 300); // 300ms matches CSS transition time
  };

  const prevInput = () => {
    setFade(false);
    setTimeout(() => {
      if (currentInput > 0) {
        setCurrentInput(prev => prev - 1);
      } else if (step > 0) {
        const previousStepInputs = steps[step - 1].inputs.length;
        setStep(prev => prev - 1);
        setCurrentInput(previousStepInputs - 1);
      }
      setFade(true);
    }, 300);
  };

  // Progress within current step
  const stepProgress =
    ((completedInputs -
      steps.slice(0, step).reduce((acc, curr) => acc + curr.inputs.length, 0)) /
      currentStepInputs.length) *
    100;

  // Start Date / Code
  const [value, setValue] = useState("");
  const handleInput = e => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 2 && input.length <= 4) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    } else if (input.length > 4) {
      input =
        input.slice(0, 2) + "/" + input.slice(2, 4) + "/" + input.slice(4, 8);
    }
    setValue(input);
  };
  const percentage = ((sliderValue - min) / (max - min)) * 100;
  return (
    <>
      {/* Stepper Header */}
      <section className="steperSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="stepOuter d-flex position-relative">
                {steps.map((s, i) => {
                  const otherStepWidth = 50 / (steps.length - 1);
                  const width = i === step ? "50%" : `${otherStepWidth}%`;
                  return (
                    <div
                      key={i}
                      className="barText text-center"
                      style={{ width, zIndex: 1 }}
                    >
                      <small
                        className={`${
                          i === step ? "activeBar" : "inActiveBar"
                        }`}
                      >
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
          <div className="row">
            <div className="col-12">
              <div className="steperOptionInner">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <div
                      className={`animated-slide ${
                        fade ? "fade-enter-active" : "fade-exit-active"
                      }`}
                    >
                      {step === 0 && (
                        <>
                          {currentInput === 0 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Why are you looking for life insurance?
                              </h1>
                              {[
                                "Lock in a guaranteed rate",
                                "Help build more wealth",
                                "Leave a legacy for my family",
                                "Get tax-advantaged income",
                                "Pay off debts",
                                "Income protection",
                              ].map((label, index) => (
                                <div
                                  key={index}
                                  className="custom-checkbox-wrapper"
                                >
                                  <input
                                    type="checkbox"
                                    id={`check${index}`}
                                    className="custom-checkbox"
                                  />
                                  <label htmlFor={`check${index}`}></label>
                                  <label
                                    htmlFor={`check${index}`}
                                    className="check-label"
                                  >
                                    {label}
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                          {currentInput === 1 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What is your investment risk tolerance?
                              </h1>
                              {["I prefer high risk, with high-reward potential", "I prefer moderate risk, with moderate-reward potential", "I prefer low risk, with low-reward potential"].map(
                                (label, index) => (
                                  <div
                                    key={index}
                                    className="custom-radio-option mb-3"
                                  >
                                    <input
                                      type="radio"
                                      id={`risk${index}`}
                                      name="risk"
                                    />
                                    <label htmlFor={`risk${index}`}>
                                      {label}
                                    </label>
                                  </div>
                                )
                              )}
                            </>
                          )}
                          {currentInput === 2 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What’s your gender?
                              </h1>
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
                              <h1 className="heading54 mb-4">
                                What is your date of birth?
                              </h1>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="date"
                                  placeholder="DD/MM/YYYY"
                                  maxLength={10}
                                  value={value}
                                  onChange={handleInput}
                                  required
                                />
                                <label htmlFor="date">DD/MM/YYYY</label>
                              </div>
                            </>
                          )}
                          {currentInput === 4 && (
                            <>
                              <h1 className="heading54">
                                What’s your zip code?
                              </h1>
                              <p className="sub20  mb-4">
                                This helps us find the right products available
                                to you in your area.
                              </p>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="date"
                                  placeholder="zip code"
                                />
                                <label htmlFor="date">Zip Code</label>
                              </div>
                            </>
                          )}
                        </>
                      )}

                      {step === 1 && (
                        <>
                          {currentInput === 0 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What is your annual income?
                              </h1>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="date"
                                  placeholder="Household Income"
                                />
                                <label htmlFor="date">Household Income</label>
                              </div>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="date"
                                  placeholder="Personal Income"
                                />
                                <label htmlFor="date">Personal Income</label>
                              </div>
                            </>
                          )}
                          {currentInput === 1 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What would be a comfortable monthly
                                contribution?
                              </h1>

                              {/* Slider */}
                              <div className="formSliderWraper mb-4">
                                <div
                                  className="slider-label-box"
                                  style={{
                                    position: "absolute",
                                    top: "-40px",
                                    left: `calc(${
                                      ((sliderValue - min) / (max - min)) * 100
                                    }% - 8px)`,
                                    backgroundColor: "#1e2a5a",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ${sliderValue}
                                  <div className="slider-label-arrow"></div>
                                </div>

                                <input
                                  type="range"
                                  min={min}
                                  max={max}
                                  step={100}
                                  value={sliderValue}
                                  onChange={e =>
                                    setSliderValue(Number(e.target.value))
                                  }
                                  className="custombar-slider"
                                  style={{
                                    background: `linear-gradient(to right, #1e2a5a 0%, #1e2a5a ${percentage}%, #ccc ${percentage}%, #ccc 100%)`,
                                  }}
                                />
                              </div>

                              {/* Info Box */}
                              <div
                                className="didYouNow"
                              >
                                <div className="row align-items-center">
                                  <div className="col-lg-4 text-center">
                                    <Image src={images.benifit1} width={130} height={160} alt="image"/>
                                  </div>
                                  <div className="col-lg-8">
                                     <h4>DID YOU KNOW?</h4>
                                      <p>
                                        If you pay <strong>${sliderValue}.00</strong>{" "}
                                        of premium a month into a policy's investment
                                        subaccounts, you could grow your account value
                                        up to{" "}
                                        <strong>
                                          ${(sliderValue * 2270).toLocaleString()}
                                        </strong>{" "}
                                        after 30 years.
                                      </p>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {currentInput === 2 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Are you a U.S. Citizen?
                              </h1>
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
                           {currentInput === 3 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Are you currently employed?
                              </h1>
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
                          {currentInput === 4 && (
                            <>
                              <h1 className="heading54 mb-4">
                               What's your marital status?
                              </h1>
                              <div className="row">
                                <div className="col-lg-6 mb-3 ">
                                  <div className="selectGender">Single</div>
                                </div>
                                <div className="col-lg-6 mb-3 ">
                                  <div className="selectGender">Married</div>
                                </div>
                                <div className="col-lg-6 mb-3 ">
                                  <div className="selectGender">Divorced</div>
                                </div>
                                 <div className="col-lg-6 mb-3 ">
                                  <div className="selectGender">Separated</div>
                                </div>
                                <div className="col-lg-6 ">
                                  <div className="selectGender">Widowed</div>
                                </div>
                              </div>
                            </>
                          )}
                          {currentInput === 5 && (
                            <>
                              <h1 className="heading54 mb-4">
                               Will you be performing any of the following activities in the next 2 years?
                              </h1>
                              {["None", "Sky Diving", "Hang Gliding","Mountain Climbing","Racing", "Scuba Diving"].map(
                                (label, index) => (
                                 <div
                                  key={index}
                                  className="custom-checkbox-wrapper"
                                >
                                  <input
                                    type="checkbox"
                                    id={`check${index}`}
                                    className="custom-checkbox"
                                  />
                                  <label htmlFor={`check${index}`}></label>
                                  <label
                                    htmlFor={`check${index}`}
                                    className="check-label"
                                  >
                                    {label}
                                  </label>
                                </div>
                                )
                              )}
                            </>
                          )}
                          {currentInput === 6 && (
                            <>
                              <div className="row">
                                <div className="col-lg-12 mb-3 ">
                                  <label htmlFor="height" className="select-label">
                                    Height (ft)
                                  </label>
                                  <select id="height" className="custom-select">
                                    <option value="<4'8">&lt; 4'8"</option>
                                    <option value="4'8">4'8"</option>
                                    <option value="4'9">4'9"</option>
                                    <option value="4'10">4'10"</option>
                                    <option value="4'11">4'11"</option>
                                    {/* add more as needed */}
                                  </select>
                                </div>
                                <div className="col-lg-12 mb-3 ">
                                  <label htmlFor="weight" className="input-label">Weight (lbs)</label>
                                  <div className="input-wrapper">
                                    <input
                                      type="number"
                                      id="weight"
                                      className="weight-input"
                                      placeholder="234"
                                    />
                                    <span className="unit">lbs</span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                           {currentInput === 7 && (
                            <>
                              <h1 className="heading54">
                                What products have you used in the last 5 years?
                              </h1>
                              <p className="sub20 mb-3">You can choose multiple</p>
                              {[
                                "None",
                                "Cigarettes",
                                "Marijuana",
                                "Other"
                              ].map((label, index) => (
                                <div
                                  key={index}
                                  className="custom-checkbox-wrapper"
                                >
                                  <input
                                    type="checkbox"
                                    id={`check${index}`}
                                    className="custom-checkbox"
                                  />
                                  <label htmlFor={`check${index}`}></label>
                                  <label
                                    htmlFor={`check${index}`}
                                    className="check-label"
                                  >
                                    {label}
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                          {currentInput === 8 && (
                            <>
                              <h1 className="heading54 mb-4">
                               Have you ever been diagnosed with AIDS, HIV, or AIDS-related complex (ARC)?
                              </h1>
                              <p className="sub20  mb-4">
                                We know this is a sensitive topic, and we take great measures to ensure your privacy.
                              </p>
                              <div className="row">
                                <div className="col-lg-6 mb-3 ">
                                  <div className="selectGender">Yes</div>
                                </div>
                                <div className="col-lg-6 mb-3 ">
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
                <div className="row mt-auto">
                  <div className="col-12">
                    <div className="d-flex justify-content-center my-4 gap-3">
                      {(step > 0 || currentInput > 0) && (
                        <button className="steperBack" onClick={prevInput}>
                          <FaArrowLeft />
                        </button>
                      )}
                      {(step < steps.length - 1 ||
                        currentInput < currentStepInputs.length - 1) && (
                        <button className="commonBtn" onClick={nextInput}>
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
