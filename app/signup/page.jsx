"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function SignUp() {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Personal Info" },
    { title: "Account Info" },
    { title: "Confirmation" },
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));
const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <section className="steperSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="stepOuter">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className="barText"
                    style={{ flex: 1, zIndex: 1 }}
                  >
                    {/* <div
                      className={`stepCount ${
                        i <= step ? "bg-primary text-white" : "bg-light"
                      }`}
                      style={{
                        width: "40px",
                        height: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      {i + 1}
                    </div> */}
                    <small
                      className={`${i <= step ? "activeBar" : "inActiveBar"}`}
                    >
                      {s.title}
                    </small>
                  </div>
                ))}

                {/* Connecting Bar */}
                <div
                  className="position-absolute top-0 start-50 translate-middle-x"
                  style={{
                    width: "100%", // ← adjust based on your circle size
                    height: "4px",
                    backgroundColor: "#e0e0e0",
                    zIndex: 0,
                  }}
                >
                  {/* Filled bar */}
                  <div
                    className="bgBlue h-100 rounded"
                    style={{
                      width: `${(step / (steps.length - 1)) * 100}%`,
                      transition: "width 0.4s ease",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steperOption">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="">
                {step === 0 && (
                  <>
                    <div className="commonStepOuter">
                      <h1 className="heading54 mb-4">
                        Why are you looking for life insurance?
                      </h1>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check1"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check1"></label>
                        <label htmlFor="check1" className="check-label">
                          Income protection
                        </label>
                      </div>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check2"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check2"></label>
                        <label htmlFor="check2" className="check-label">
                          Debt
                        </label>
                      </div>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check3"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check3"></label>
                        <label htmlFor="check3" className="check-label">
                          Inheritance
                        </label>
                      </div>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check4"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check4"></label>
                        <label htmlFor="check4" className="check-label">
                          Tax savings
                        </label>
                      </div>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check5"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check5"></label>
                        <label htmlFor="check5" className="check-label">
                          Emergency coverage
                        </label>
                      </div>
                      <div className="custom-checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="check6"
                          className="custom-checkbox"
                        />
                        <label htmlFor="check6"></label>
                        <label htmlFor="check6" className="check-label">
                          Wealth Building
                        </label>
                      </div>
                      
                      {/* Start Second */}
                      <h1 className="heading54 mb-4">
                       Investment comfort level
                      </h1>
                      <div className="custom-radio-group">
                      <div className="custom-radio-option">
                        <input type="radio" id="risk1" name="risk" />
                        <label htmlFor="risk1">
                         High
                        </label>
                      </div>

                      <div className="custom-radio-option">
                        <input type="radio" id="risk2" name="risk" />
                        <label htmlFor="risk2">
                         Moderate
                        </label>
                      </div>

                      <div className="custom-radio-option">
                        <input type="radio" id="risk3" name="risk" />
                        <label htmlFor="risk3">
                         Low risk
                        </label>
                      </div>
                    </div>

                    {/* Start Gender */}
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
                    </div>
                    {/* Start Date of birth */}
                    <h1 className="heading54">What is your date of birth?</h1>
                    <div className="">
                       <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="DD/MM/YYYY"
                      />
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
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
          <div className="row mb-">
            <div className="col-12">
              <div className="d-flex justify-content-center my-4 gap-3">
                {step > 0 && (
                  <button className="steperBack" onClick={prevStep}>
                    <FaArrowLeft />
                  </button>
                )}

                {step < steps.length - 1 && (
                  <button className="commonBtn" onClick={nextStep}>
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
