import { useEffect, useState } from 'react';
import axios from 'axios';
import { UsersList } from '../UsersList/UsersList';
import { ModalWindow } from '../Modal/Modal';
import { AddUserForm } from '../AddUserForm/AddUserForm';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

export function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get(FETCH_URL).then(res => {
      setUsers(res.data);
    });
  }, []);

  function deleteUserById(userId) {
    const newUsers = users.filter(({ id }) => id !== userId);
    setUsers(newUsers);
  }

  return (
    <>
      <UsersList usersInfo={users} onDelete={deleteUserById} />
      <button onClick={() => setModalOpen(true)}>Add a user</button>
      <ModalWindow isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddUserForm setModalOpen={setModalOpen} />
      </ModalWindow>
    </>
  );
}
