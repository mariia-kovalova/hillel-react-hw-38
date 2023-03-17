import { useEffect, useState } from 'react';
import { UsersList } from 'components/UsersList/UsersList';
import { Button } from 'GlobalStyles.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { AddUserForm } from 'components/AddUserForm/AddUserForm';
import { getUsers } from 'api/JP-Service';
import { Loader } from 'components/Loader/Loader';

export function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  function handleDeleteUserById(userId) {
    const newUsers = users.filter(({ id }) => id !== userId);
    setUsers(newUsers);
  }

  function handleSubmit(values) {
    setShowModal(false);
    console.log(values);
    /// POST
    setUsers(users => [
      ...users,
      {
        ...values,
        id: users.length + 1,
      },
    ]);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <>
      {!isLoading && !error && users.length !== 0 && (
        <>
          <UsersList usersInfo={users} onDelete={handleDeleteUserById} />
          <Button className="btn btn-danger btn-sm" onClick={handleOpenModal}>
            Add a user
          </Button>
        </>
      )}
      {!isLoading && error && <div>Opps, something went wrog...</div>}
      {isLoading && <Loader />}

      {showModal && (
        <ModalWindow onCloseModal={handleCloseModal}>
          <AddUserForm
            onSubmit={handleSubmit}
            onCloseModal={handleCloseModal}
          />
        </ModalWindow>
      )}
    </>
  );
}
