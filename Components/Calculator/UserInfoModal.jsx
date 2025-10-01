import React, { useState } from 'react'
import { CiCircleInfo } from "react-icons/ci";

const UserInfoModal = ({ showModal, closeModal, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.firstName.trim()) validationErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) validationErrors.lastName = 'Last name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) validationErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) validationErrors.email = 'Please enter a valid email address';
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!formData.phone.trim()) validationErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) validationErrors.phone = 'Use format 123-456-7890';
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    console.log("gere")
    e.preventDefault();
    if (submitting) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setSubmitting(true);
      await onSubmit(formData);
      closeModal();
    } finally {
      setSubmitting(false);
    }
  };

  const handlePhoneInput = (e) => {
    let input = e.target.value.replace(/\D/g, "").slice(0, 10); // Max 10 digits
    let formatted = input;
    
    if (input.length >= 3 && input.length <= 6) {
      formatted = input.slice(0, 3) + "-" + input.slice(3);
    } else if (input.length > 6) {
      formatted = input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6);
    }
    
    handleInputChange('phone', formatted);
  };

  return (
    <>
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
            zIndex: 1000001
          }}
        >
          <div className="modal-dialog modal-lg" style={{ maxWidth: '600px', margin: '50px auto', zIndex: 1000002 }}>
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
                <h4 className="modal-title" style={{ color: '#2d3269', fontWeight: 'bold' }}>Get Your IUL Quote</h4>
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
                <p style={{ color: '#6c757d', marginBottom: '1.5rem', fontSize: '16px' }}>
                  Please provide your contact information to get your personalized IUL quote and explore your options.
                </p>
                
                <form id="userInfoForm" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600', color: '#2d3269' }}>
                        <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${errors.firstName ? '#dc3545' : '#2d3269'}`,
                          borderRadius: '0',
                          fontSize: '16px',
                          color: '#2d3269'
                        }}
                      />
                      {errors.firstName && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.firstName}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600', color: '#2d3269' }}>
                        <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${errors.lastName ? '#dc3545' : '#2d3269'}`,
                          borderRadius: '0',
                          fontSize: '16px',
                          color: '#2d3269'
                        }}
                      />
                      {errors.lastName && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.lastName}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600', color: '#2d3269' }}>
                        <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${errors.email ? '#dc3545' : '#2d3269'}`,
                          borderRadius: '0',
                          fontSize: '16px',
                          color: '#2d3269'
                        }}
                      />
                      {errors.email && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.email}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontWeight: '600', color: '#2d3269' }}>
                        <CiCircleInfo style={{ width: '18px', height: '18px', marginRight: '8px', color: '#2d3269' }} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="123-456-7890"
                        value={formData.phone}
                        onChange={handlePhoneInput}
                        required
                        pattern="\\d{3}-\\d{3}-\\d{4}"
                        title="Please enter a 10-digit phone number in the format 123-456-7890"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${errors.phone ? '#dc3545' : '#2d3269'}`,
                          borderRadius: '0',
                          fontSize: '16px',
                          color: '#2d3269'
                        }}
                      />
                      {errors.phone && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div style={{ 
                    backgroundColor: '#f8f9fa', 
                    padding: '1rem', 
                    borderRadius: '8px',
                    border: '1px solid #e9ecef',
                    marginTop: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <CiCircleInfo style={{ width: '16px', height: '16px', marginRight: '8px', color: '#2d3269' }} />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#2d3269' }}>
                        What happens next?
                      </span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '14px', color: '#6c757d' }}>
                      <li>We'll review your information and coverage needs</li>
                      <li>Our team will contact you within 24 hours</li>
                      <li>You'll receive personalized IUL quotes and recommendations</li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary me-2"
                  onClick={closeModal}
                  style={{ 
                    borderColor: '#6c757d',
                    color: '#6c757d',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontWeight: '600'
                  }}
                >
                  CANCEL
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                  form="userInfoForm"
                  style={{ 
                    backgroundColor: '#2d3269',
                    borderColor: '#2d3269',
                    padding: '12px 36px',
                    borderRadius: '25px',
                    fontWeight: '600',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? 'Submitting...' : 'GET MY QUOTE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserInfoModal
