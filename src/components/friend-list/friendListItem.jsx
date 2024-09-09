import PropTypes from 'prop-types';
import './friendListItem.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p className={isOnline ? 'status online' : 'status offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
