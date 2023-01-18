import { UserItem } from "../UserItem/UserItem";
import PropTypes from "prop-types";

export function UsersList({ usersInfo, onDelete }) {
  console.log(usersInfo);
  return (
    <div className="container">
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">User name</th>
          <th scope="col">Phone Number</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {usersInfo.map(({id, name, username, phone}) => 
        (<UserItem 
        key={id} 
        id={id} 
        name={name} 
        username={username} 
        phone={phone} 
        onDelete={onDelete}/>))}
      </tbody>
    </table>
    </div>
  );
}

UsersList.propTypes = {
  usersInfo: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelete: PropTypes.func.isRequired,
};
