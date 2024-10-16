import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = ({ onCreate }) => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: { first: '', last: '' },
    email: '',
    phone: '',
    dob: { age: '' },
    gender: '',
    location: { city: '', country: '' },
    picture: { large: 'https://via.placeholder.com/150' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name.includes('.') ? name.split('.')[0] : name]: 
        name.includes('.') ? { ...prev[name.split('.')[0]], [name.split('.')[1]]: value } : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newUser); // Call the create function with new user data
    navigate('/'); // Redirect back to user list
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Create New User</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="name.first"
          value={newUser.name.first}
          onChange={handleChange}
          className="block w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="name.last"
          value={newUser.name.last}
          onChange={handleChange}
          className="block w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="block w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="block bg-green-500 text-white px-4 py-2 rounded mx-auto"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
