import React from 'react';
import '../../styles/App.css';

function CompanyCreated({created}) {
  return (
    <div className="companyCreated">      
      <p>Created since {created}</p>
    </div>
  );
};

export default CompanyCreated;

