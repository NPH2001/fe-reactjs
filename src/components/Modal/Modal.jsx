import React from 'react';
import { useNavigate } from 'react-router-dom';


const Modal = ({ user, onClose, onDelete }) => {

  const navigate = useNavigate();

  if (!user) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          className="text-red-500 absolute top-4 right-4 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          className="w-40 h-40 mx-auto rounded-full mt-4"
          src={user.picture.large}
          alt="User"
        />
        <h2 className="text-2xl font-bold text-center mt-4">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-center text-gray-600 mt-2">{user.email}</p>
        <p className="text-center text-gray-500 mt-2">{user.location.city}, {user.location.country}</p>
        <div className="mt-4 text-center">
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.dob.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
        <div>
        <button
          className="block bg-blue-500 text-white px-4 py-2 rounded mt-6 mx-auto"
          onClick={onClose}
        >
          Close
        </button>
        <button className="block bg-blue-500 text-white px-4 py-2 rounded mt-6 mx-auto"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
          Delete
        </button>
        <button className="block bg-blue-500 text-white px-4 py-2 rounded mt-6 mx-auto"
        onClick={() => navigate('/update-user')}
        >
          Update
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
