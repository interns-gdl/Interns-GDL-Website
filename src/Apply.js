import React, { useState, useEffect } from 'react';
import firebase from './firebase.js';
import Company from './Company.js';

function Apply() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("companies").get().then((query) => {
      query.forEach((doc) => {
        //TODO: verify that the documents have the required fields before adding it to the array
        setCompanies((companies) => [...companies, doc.data()]);
      });
    });
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