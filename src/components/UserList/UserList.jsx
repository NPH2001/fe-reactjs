import React, { useContext } from 'react';
import useFetchUsers from '../../hooks/useFetchUsers';
import UserCard from '../UserCard/UserCard';
import Modal from '../Modal/Modal';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const { users, loading, error, deleteUser, addUser, updateUser } = useFetchUsers('https://randomuser.me/api/?results=10');
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">User List</h1>
      <button
      className="bg-green-500 text-white px-4 py-2 rounded mb-6"
      onClick={() => navigate('/create-user')}
      >
        Create User 
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>
      <Modal 
      user={selectedUser} 
      onClose={() => setSelectedUser(null)}
      onDelete={() => {
        const index = users.findIndex(user => user === selectedUser);
        deleteUser(index);
        setSelectedUser(null);
      }}
      />
    </div>
  );
};

export default UserList;
