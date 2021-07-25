import React, {useState} from 'react';

function CompaniesForm({ update_function }) {

  const initialState = { name : "", post_id : "", image : "" };
  const [formData, setFormData] = useState(initialState);

  function submitForm(evt) {
    const values = Object.values(formData);
    const fieldsAreNotEmpty = values.every((val) => val);
    if (fieldsAreNotEmpty) {
      update_function(formData.name, formData);
    } else {
      alert("The fields must not be empty.")
    }
    evt.preventDefault();
  }

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name] : evt.target.value});
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Company Name:
            <input type="text" onChange={handleChange} name="name" className="form-control" placeholder="Enter Company Name"></input>
          </label>
        </div>
        <div className="form-group">
          <label>Post ID:
            <input type="text" onChange={handleChange} name="post_id" className="form-control" placeholder="Enter Post ID"></input>
          </label>
        </div>
        <div className="form-group">
          <label>Image Link:
            <input type="url" onChange={handleChange} name="image" className="form-control" placeholder="Enter Image Link"></input>
          </label>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default CompaniesForm;