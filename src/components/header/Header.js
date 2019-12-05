import React from 'react';
import Company from './Company';
import CompanyCreated from './CompanyCreated';

const createdDate = '2016'

const Header = () => (
  <div className="container">
    <Company companyName="Rutherford Brothers" motto="distributed drive e-commerce" />
    <CompanyCreated created={createdDate} />
  </div>
)

export default Header;
