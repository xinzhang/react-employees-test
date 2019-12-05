import React from 'react';
import '../../styles/Header.css';

function Company({companyName, motto}) {
  return (
    <div className="company">
      <h2>{companyName}</h2>
      <p>{motto}</p>
    </div>
  );
};

export default Company;

