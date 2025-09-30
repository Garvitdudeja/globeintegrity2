import React, { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = /\d/g;

const LeadCaptureModal = ({ show, onClose, onSubmit, preset }) => {
    console.log(preset,"preset")
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    if (!data.firstName.trim() || !data.lastName.trim()) {
      setError('Please enter your First and Last Name.');
      return false;
    }
    if (!emailRegex.test(data.email.trim())) {
      setError('Please enter a valid Email Address.');
      return false;
    }
    const digits = (data.phone.match(phoneDigits) || []).join('');
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSuccess('');
    try {
      await onSubmit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: (data.phone.match(phoneDigits) || []).join(''),
        preset: preset || {}
      });
      setSuccess('Thank you! We will be in touch shortly.');
      setData({ firstName: '', lastName: '', email: '', phone: '' });
    } catch (e) {
      setError(e?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!show) return null;

  return (
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
      <div className="modal-dialog" style={{ maxWidth: '520px', margin: '40px auto' }}>
        <div className="modal-content">
          <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
            <h4 className="modal-title" style={{ color: '#2d3269', fontWeight: 'bold' }}>Get Your IUL Quote</h4>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              style={{ background: 'none', border: 'none', fontSize: '24px', lineHeight: 1, color: '#000', opacity: 0.5 }}
            >
              ×
            </button>
          </div>
          <div className="modal-body" style={{ padding: '1.5rem' }}>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {success && <div className="alert alert-success" role="alert">{success}</div>}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>First Name</label>
              <input
                type="text"
                value={data.firstName}
                onChange={(e) => setData(prev => ({ ...prev, firstName: e.target.value }))}
                placeholder="John"
                style={{ width: '100%', padding: '12px', border: '2px solid #2d3269', borderRadius: 0, fontSize: '16px' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Last Name</label>
              <input
                type="text"
                value={data.lastName}
                onChange={(e) => setData(prev => ({ ...prev, lastName: e.target.value }))}
                placeholder="Doe"
                style={{ width: '100%', padding: '12px', border: '2px solid #2d3269', borderRadius: 0, fontSize: '16px' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
                style={{ width: '100%', padding: '12px', border: '2px solid #2d3269', borderRadius: 0, fontSize: '16px' }}
              />
            </div>
            <div style={{ marginBottom: '0' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone</label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 555-5555"
                style={{ width: '100%', padding: '12px', border: '2px solid #2d3269', borderRadius: 0, fontSize: '16px' }}
              />
            </div>
          </div>
          <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
            <button 
              type="button" 
              className="btn btn-outline-secondary"
              onClick={onClose}
              disabled={submitting}
              style={{ borderColor: '#6c757d', color: '#6c757d', padding: '12px 24px', borderRadius: '25px', fontWeight: 600 }}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={submitting}
              style={{ backgroundColor: '#2d3269', borderColor: '#2d3269', padding: '12px 36px', borderRadius: '25px', fontWeight: 600 }}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal


