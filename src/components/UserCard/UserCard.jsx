// src/components/UserCard/UserCard.jsx
import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
      onClick={onClick}
    >
      <img className="w-32 h-32 mx-auto rounded-full mt-4" src={user.picture.large} alt="User" />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{user.name.first} {user.name.last}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p className="text-sm text-gray-500">{user.location.city}, {user.location.country}</p>
      </div>
    </div>
  );
};

export default UserCard;
