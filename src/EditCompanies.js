import React, { useEffect, useState } from 'react';
import CompaniesTable from './CompaniesTable.js'
import CompaniesForm from './CompaniesForm.js'
import {read, remove, update} from './modules/firestore.js'

const COLLECTION = "test-companies"

function EditCompanies() {

  const [companies, setCompanies] = useState([]);

  async function readCompanies() {
    const companies = await read(COLLECTION);
    setCompanies(companies);
  }

 async function updateCompanies(id, object) {
    const companies = await update(COLLECTION, id, object);
    setCompanies(companies);
  }

  async function removeCompanies(id) {
    const companies = await remove(COLLECTION, id);
    setCompanies(companies);
  }

  useEffect(() => readCompanies(), []);

  return (
    <div>
      <CompaniesTable 
        key="companiestable"
        columnNames={["Company", "Post ID", "Image", ""]}
        data={companies}
        remove_function={(id) => removeCompanies(id)}
      />
      <CompaniesForm  update_function={ (id, data) => updateCompanies(id, data) }/>
    </div>
  );
}

export default EditCompanies;