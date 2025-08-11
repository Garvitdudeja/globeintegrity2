import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import CustomSelect from './CustomSelect';
import { childrenOptions, formatCurrency } from '@/app/calculator/page';


const CoverageModal = ({showModal, closeModal, modalData, handleModalChange, coverageItems, resetModalValues}) => {
  return (
    <>    {showModal && (
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
        )}</>
  )
}

export default CoverageModal