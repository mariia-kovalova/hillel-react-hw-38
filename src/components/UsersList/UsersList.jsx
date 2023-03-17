import { UserItem } from '../UserItem/UserItem';
import PropTypes from 'prop-types';

export function UsersList({ usersInfo, onDelete }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">User name</th>
            <th scope="col">Phone Number</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usersInfo.map(user => (
            <UserItem
              key={user.id}
              user={user}
              onDelete={() => onDelete(user.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

UsersList.propTypes = {
  usersInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
