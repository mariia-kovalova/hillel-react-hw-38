import PropTypes from 'prop-types';

export function UserItem({ id, name, username, phone, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

UserItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  phone: PropTypes.any,
  onDelete: PropTypes.func.isRequired,
};
