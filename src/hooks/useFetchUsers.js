import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = () => {
      try {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
          setLoading(false);
        } else {
          const response = axios.get(url);
          const userData = response.data.results;
          setUsers(userData);
          localStorage.setItem('users', JSON.stringify(userData));
          setLoading(false);
        }
      } catch (err) {
        setError('Error fetching users');
        setLoading(false);
      }
    };
    fetchUsers();
  }, [url]);

  const saveToLocalStorage = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    saveToLocalStorage(updatedUsers);
  };

  const updateUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, ...updatedUser } : user
    );
    saveToLocalStorage(updatedUsers);
  };


  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    saveToLocalStorage(updatedUsers);
  }

  return { users, loading, error, deleteUser, addUser, updateUser};
};

export default useFetchUsers;
