// UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, selectedUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;
