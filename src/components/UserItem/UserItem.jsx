import PropTypes from 'prop-types';

export function UserItem({ user: { id, name, username, phone }, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    phone: PropTypes.any,
  }),
  onDelete: PropTypes.func.isRequired,
};
