import React from 'react';
import { Link } from 'react-router-dom';

const NextPage = () => {

  return (
    <div>
      <h1>Welcome to the Next Page</h1>
      <Link to={'/'}>Back</Link>
    </div>
  );
};

export default NextPage;