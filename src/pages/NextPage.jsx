import React from 'react';
import { Redirect } from 'react-router-dom'; // Use react-router-dom for navigation

const NextPage = () => {

  // If the user is not logged in, redirect them to the login page
  // if (!loggedIn) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <h1>Welcome to the Next Page</h1>
      {/* Add content for the next page */}
    </div>
  );
};

export default NextPage;