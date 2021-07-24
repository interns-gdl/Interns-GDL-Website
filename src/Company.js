import React from 'react';
import { Link } from 'react-router-dom';

function Company({ post_id, image, name }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 text-center">
      <Link to={`/post/${post_id}`}>
        <img src={image} alt={name} className="img-fluid btn-brand" />
      </Link>
    </div>
  );
}

export default Company;