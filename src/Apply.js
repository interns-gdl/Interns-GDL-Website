import React, { useState, useEffect } from 'react';
import Company from './Company.js';
import {read} from './modules/firestore.js';

function Apply() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    read("companies").then((companies) =>
      //We might need to do some checking before this:
      setCompanies(companies)
    );
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          { companies.map((company) => <Company {...company} key={company.name} />) }
        </div>
      </div>
    </div>
  );
}

export default Apply;