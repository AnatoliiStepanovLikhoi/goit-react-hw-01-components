import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className="item">
      <span className={`${css.status} ${!isOnline ? css.isOffline : css.isOnline}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
}
