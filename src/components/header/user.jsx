import React from 'react';
import { useMoralis } from 'react-moralis';

const User = () => {
  const {
    authenticate, isAuthenticated, user, logout,
  } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button
          type="button"
          onClick={() => authenticate()}
        >
          Authenticate
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => logout()}
      >
        Logout
      </button>
      <h3>{`Hi  ${user.get('username')}`}</h3>
    </div>
  );
};

export default User;
