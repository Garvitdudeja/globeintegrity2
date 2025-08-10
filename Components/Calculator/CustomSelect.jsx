import React, { useState } from 'react';

const CustomSelect = ({ options, value, onChange, placeholder, styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = options.find(opt => opt.value === value);
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          ...styles.control(null, { isFocused: false }),
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={selectedOption ? styles.singleValue() : styles.placeholder()}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          style={{ 
            width: '20px', 
            height: '20px', 
            transform: isOpen ? 'rotate(180deg)' : 'none', 
            transition: 'transform 0.2s' 
          }} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #2d3269',
          borderTop: 'none',
          maxHeight: '240px',
          overflowY: 'auto',
          zIndex: 1000
        }}>
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                padding: '12px',
                cursor: 'pointer',
                fontSize: '18px',
                borderBottom: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
