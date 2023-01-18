import { useEffect, useState } from "react";
import axios from "axios";
import { UsersList } from "../UsersList/UsersList";
import { AddUserForm } from "../AddUserForm/AddUserForm";

const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

export function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
     .get(FETCH_URL)
     .then((res) => {
        setUsers(res.data);
      });
  }, [])

  function deleteUserById(userId) {
    const newUsers = users.filter(({id}) => id !== userId);
    setUsers(newUsers);
  }

  return (
    <>
    <UsersList usersInfo={users} onDelete={deleteUserById}/>
    <AddUserForm/>
    </>
    
  );
}
