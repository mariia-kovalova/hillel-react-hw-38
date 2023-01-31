import { useEffect, useState } from 'react';
import axios from 'axios';
import { UsersList } from './UsersList/UsersList';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { Button } from '../GlobalStyles.styled';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

export function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get(FETCH_URL).then(res => {
      setUsers(res.data);
    });
  }, []);

  function handleDeleteUserById(userId) {
    const newUsers = users.filter(({ id }) => id !== userId);
    setUsers(newUsers);
  }

  function toggleModalWindow() {
    setModalOpen(!isModalOpen);
  }

  function handleSubmit(values) {
    console.log(values);
    toggleModalWindow();
  }

  return (
    <>
      <UsersList usersInfo={users} onDelete={handleDeleteUserById} />
      <Button className="btn btn-danger btn-sm" onClick={toggleModalWindow}>
        Add a user
      </Button>
      <ModalWindow isOpen={isModalOpen} onClose={toggleModalWindow}>
        <AddUserForm
          setModalOpen={setModalOpen}
          onSubmit={handleSubmit}
          onBtnClick={toggleModalWindow}
        />
      </ModalWindow>
    </>
  );
}
